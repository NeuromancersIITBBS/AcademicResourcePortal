// deleteRequest(uniqueId)
// Function that tells server to delete the file with the uniqueID.
//Format of uniqueID :- CS2L00101256 i.e. sunject_Code + some_number

var deleteRequest = function(uniqueID, containerID){
  let branch = uniqueID.substring(0,2);
  let subjectCode = uniqueID.substring(0,7);
  uniqueID = uniqueID.substring(7,uniqueID.length);
  let endpoint = `https://arpbackend.firebaseapp.com/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
  $.ajax({
      url: endpoint,
      method: 'DELETE',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res){
        console.log("Successfully Deleted!");
        // Code to remove that container
        containerID.fadeOut();
      }
  });
};

// reviewRequest(uniqueID)
//Function that prompts the server to set review to true.

var reviewRequest = function(uniqueID, containerID){
   let branch = uniqueID.substring(0,2);
   let subjectCode = uniqueID.substring(0,7);
   uniqueID = uniqueID.substring(7,uniqueID.length);
   let endpoint = `https://arpbackend.firebaseapp.com/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
   let data = {review: true};
   $.ajax({
       url: endpoint,
       method: 'PUT',
       data : JSON.stringify(data),
       contentType: 'application/json',
       error: function(xhr){
         alert("Something went wrong, please try again.");
       },
       success: function(result) {
         console.log("Successfully unflagged! ");
         // Code to remove that container
         containerID.fadeOut();
       }
   });
};

var editDetailsRequest = function(uniqueID, resourceObj, containerID){
  let branch = uniqueID.substring(0,2);
  let subjectCode = uniqueID.substring(0,7);
  uniqueID = uniqueID.substring(7,uniqueID.length);
  let endpoint = `https://arpbackend.firebaseapp.com/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
  console.log(endpoint);
  $.ajax({
      url: endpoint,
      method: 'PUT',
      data : JSON.stringify(resourceObj),
      contentType: 'application/json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(result) {
        console.log("Successfully edited! ");
        // Code to remove that container
        containerID.fadeOut();
      }
  });
};

var jsFlagggedSubjects = function(){
  let endpoint = "https://arpbackend.firebaseapp.com/admin/flagged";
  let jsArray;
  $.ajax({
      url: endpoint,
      method: 'GET',
      async: false,
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
};

var jsUnreviewedSubjects = function(){
  let endpoint = "https://arpbackend.firebaseapp.com/admin/unreviewed";
  let jsArray;
  $.ajax({
      url: endpoint,
      method: 'GET',
      async: false,
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        console.log("Success!");
        jsArray = res;
        console.log(res);
      }
  });
  return jsArray;
};
