// Function that would call the REST api and fetch the json object containing
// jsAllSubjects()
// all the subjects irrespective of branches
var searchModelList = [];
var branchSubjectList= [];

var jsAllSubjects = async function(){
    let endpoint = "https://arpbackend-fd562.firebaseapp.com/search";
    let success = 0;
    let jsArray = [];
    const res = await $.ajax({
        url: endpoint,
        method: 'GET',
        dataType: 'json',
        error: function(xhr){
            alert("Something went wrong, please try again.");
        },
        success: function(res) {
            console.log("Success!");
            jsArray = res;
            console.log(res);
            for(const subNameCodeObj of res){
               for(const obj of subNameCodeObj.data){
                   searchModelList.push(obj);
               }
            }
            branchSubjectList = jsArray;
        }
    });
    return jsArray;
};


/*var jsAllSubjects = async function(){
  let endpoint = "https://arpbackend.firebaseapp.com/search";
  let success = 0;
  let jsArray = [];
  const res = await $.ajax({
      url: endpoint,
      method: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        console.log("Success!");
        jsArray = res;
      }
    });
    return jsArray;
};*/
/*
let jsArray=[{    subjectName: 'Data Structure',  subjectCode: 'CS2L003'
},{    subjectName: 'Programming and Data Structure',  subjectCode: 'CS1L001'},
{    subjectName: 'Discrete Structure',  subjectCode: 'CS2L001'},{    subjectName: 'Network Theory',  subjectCode: 'EE2L001'
},{    subjectName: 'Electric Machines',  subjectCode: 'EE3L001'},
{    subjectName: 'Control Systems',  subjectCode: 'EE3L003'},{    subjectName: 'Theory of Machines - 1',  subjectCode: 'ME2L001'
 },{    subjectName: 'Heat Transfer',  subjectCode: 'ME3L001'},
 {    subjectName: 'IC Engines',  subjectCode: 'ME3L005'}];

 return jsArray;
};*/
