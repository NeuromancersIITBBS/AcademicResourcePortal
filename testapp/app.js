const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
var cors = require('cors');


// Mongo URI
//const mongoURI = "mongodb+srv://p_ash:mongoavp@cluster0-wogcq.mongodb.net/admin?retryWrites=true&w=majority
//";

// Create mongo connection
var conn = mongoose.createConnection("mongodb+srv://p_ash:<password>@cluster0-wogcq.mongodb.net/admin?retryWrites=true&w=majority");
var arpSchema = new mongoose.Schema({
  email_id : String,
  type : String,
  semester : String,
  subject_name : String,
  flags : Number,
  subject_code : String,
  resource_id : {
    type : String,
    unique: true
  }
});
var Arp = mongoose.model('Arp',arpSchema);


var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json());


// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: "mongodb+srv://p_ash:<password>@cluster0-wogcq.mongodb.net/admin?retryWrites=true&w=majority",
  file: function(req, file){
      return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

//upload
app.post('/studyResouces/branches/:branch/subjects/:subjectCode', upload.single('file'), (req, res) => {

    var data = new Arp({
      email_id : req.body.email_id,
      type : req.body.type,
      semester : req.body.semester,
      subject_name : req.body.subject_name,
      flags : 0,
      subject_code : req.body.subject_code,
      resource_id : req.body.subject_code + req.file._id
    });
    data.save((err, data)=>{
        if(!err)
          res.status(200);
    });
});

//download
app.get('/studyResouces/branches/:branch/subjects/:subjectCode/resources/:uniqueID', (req, res) => {
    gfs.files.findOne({ _id : req.params.uniqueID }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
    });
});

//delete
app.delete('/studyResouces/branches/:branch/subjects/:subjectCode/resources/:uniqueID', (req, res) => {
    Arp.deleteOne({"resource_id" : req.params.subjectcode + req.params.uniqueID}, (err)=>{
      if(err)
        return res.status(404).json({err : err});
    });
    gfs.remove({ _id: req.params.uniqueID, root: 'uploads' }, (err, gridStore) => {
        if (err) {
            return res.status(404).json({ err: err });
        }
        res.status(200);
    });
});

//flag
app.put('/studyResouces/branches/:branch/subjects/:subjectCode/resources/:uniqueID/flag',(req,res)=>{
    Arp.findOneAndUpdate({"resource_id" : req.params.subjectcode + req.params.uniqueID},
                          {$inc : {"flags" : 1}});
});
//unflag
app.put('/studyResouces/branches/:branch/subjects/:subjectCode/resources/:uniqueID/unflag',(req,res)=>{
    Arp.findOneAndUpdate({"resource_id" : req.params.subjectcode + req.params.uniqueID},
                          {$inc : {"flags" : -1}});
});

//search things
//res by code
app.get('/studyResouces/branches/:branch/subjects/:subjectCode',(req,res)=>{
    var query = Arp.find({"subject_code": req.params.subjectcode});
    query.exec(function(err,data){
        if(err)
          res.status(404).json({err : err});
        res.json(data);
    });
});

//res by branch
//"authors": { "$regex": "Alex", "$options": "i" }
app.get('/studyResouces/branches/:branch/subjects',(req,res)=>{
    var query = Arp.find({"subject_code": { "$regex" : req.params.branch, "$options": "i" }});
    query.select({
      email_id : 0,
      type : 0,
      semester : 0,
      subject_name : 1,
      flags : 0,
      subject_code : 1,
      resource_id : 0
    }).exec(function(err,data){
        if(err)
          res.status(404).json({err : err});
        res.json(data);
    });
});

//everything
//"authors": { "$regex": "Alex", "$options": "i" }
app.get('/studyResouces',(req,res)=>{
    var query = Arp.find();
    query.exec(function(err,data){
        if(err)
          res.status(404).json({err : err});
        res.json(data);
    });
});



app.listen(3000,function(){
  console.log("The app is listening on port 3000..");
});





// var storage = GridFsStorage({
//     gfs : gfs,
//
//     filename: (req, file, cb) => {
//         let date = Date.now();
//         // The way you want to store your file in database
//         cb(null, file.fieldname + '-' + date + '.');
//     },
//
//     // Additional Meta-data that you want to store
//     metadata: function(req, file, cb) {
//         cb(null, { originalname: file.originalname });
//     },
//     root: 'ctFiles' // Root collection name
// });
//
// // Multer configuration for single file uploads
// let upload = multer({
//     storage: storage
// }).single('file');
//
// // Route for file upload
// app.post('/upload', (req, res) => {
//     upload(req,res, (err) => {
//         if(err){
//              res.json({error_code:1,err_desc:err});
//              return;
//         }
//         res.json({error_code:0, error_desc: null, file_uploaded: true});
//     });
// });
