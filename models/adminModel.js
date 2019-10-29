// deleteRequest(uniqueId)
// Function that tells server to delete the file with the uniqueID.
//Format of uniqueID :- CS2L00101256 i.e. sunject_Code + some_number

var deleteRequest = function(uniqueID){
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
        console.log("Success!");
      }
  });

};

// unflagRequest(uniqueID)
//Function that prompts the server to unflag the already flagged resource.

var unflagRequest = function(uniqueID){
   let branch = uniqueID.substring(0,2);
   let subjectCode = uniqueID.substring(0,7);
   uniqueID = uniqueID.substring(7,uniqueID.length);
   let endpoint = `https://arpbackend.firebaseapp.com/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
   let data = {resourceID: uniqueID, flags: 0};
   let response;
   $.ajax({
       url: endpoint,
       method: 'PUT',
       data : JSON.stringify(data),
       contentType: application/json,
       error: function(xhr){
         alert("Something went wrong, please try again.");
       },
       success: function(result) {
       response = 0;
       console.log("Successfully unflagged! ");
       }
   });
   return response;
};

// reviewRequest(uniqueID)
//Function that prompts the server to set review to true.

var reviewRequest = function(uniqueID){
   let branch = uniqueID.substring(0,2);
   let subjectCode = uniqueID.substring(0,7);
   uniqueID = uniqueID.substring(7,uniqueID.length);
   let endpoint = `https://arpbackend.firebaseapp.com/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
   let data = {resourceID: uniqueID, review: true};
   let response;
   $.ajax({
       url: endpoint,
       method: 'PUT',
       data : JSON.stringify(data),
       contentType: application/json,
       error: function(xhr){
         alert("Something went wrong, please try again.");
       },
       success: function(result) {
       response = 0;
       console.log("Successfully unflagged! ");
       }
   });
   return response;
};
