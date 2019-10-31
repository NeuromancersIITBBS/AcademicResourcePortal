// Function that would post file to the server
// upload(subjectCode, formData)

var upload = function(subjectCode, formData,file){
    console.log("model");
    console.log(subjectCode);
    console.log(formData);
    console.log(formData.get("subjectName"));
    let branch = subjectCode.substring(0,2);
    console.log(branch);
    let endpoint = `https://arpbackend.firebaseapp.com/studyResouces/${branch}/subjects/${subjectCode}`;

    var metadata = {
    contentType: 'pdf'
    };
    var timeStamp = new Date().valueOf();
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child(`${timeStamp}/`).put(file);
  //  var uploadTask = storageRef.child('resources/' + file.name).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
    }
    }, function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
    case 'storage/unauthorized':
    // User doesn't have permission to access the object
    break;

    case 'storage/canceled':
    // User canceled the upload
    break;

    case 'storage/unknown':
    // Unknown error occurred, inspect error.serverResponse
    break;
    }
    }, function() {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    var storageRef2 = firebase.storage().ref().child(`${timeStamp}/`);
    console.log("somelink" + timeStamp);
    //console.log(storageRef2);
    //console.log(JSON.stringify(formData));

    var jsonObj = {"emailId": formData.get("email"),
                    "subjectName":formData.get("subjectName"),
                      "semester": formData.get("semester"),
                      "subjectCode":formData.get("subjectCode"),
                      "type":formData.get("type"),
                      "year":formData.get("year"),
                      "downloadLink":downloadURL,
                      "storageReference": timeStamp,
                    };

    console.log(jsonObj);
        	$.ajax({
    					url : endpoint,
      				method : "POST",
    					data : jsonObj,
    					contentType : false,
    					processData : false
    				}).done(function(response){
                        console.log("Success");
                        location.reload(true);

    				}).fail(function(){
                        alert("fail!");
    				}).always(function(){

    				});
    });
    });

};
