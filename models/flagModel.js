// flagRequest(uniqueID)
//Function that prompts the server to modify the flag variable.

 var flagRequest = function(uniqueID){
    var branch = uniqueID.substring(0,2);
    var subjectCode = uniqueID.substring(0,7);
    var uniqueID = uniqueID.substring(7,uniqueID.length);
    var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}/flag`;
    var response;
    $.ajax({
        url: endpoint,
        type: 'PUT',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(result) {
        response = 1;
        alert("Successfully flagged! ");
        }
    });
    return response;
};

// unflagRequest(uniqueID)
//Function that prompts the server to unflag the already flagged resource.

var unflagRequest = function(uniqueID){
   var branch = uniqueID.substring(0,2);
   var subjectCode = uniqueID.substring(0,7);
    var uniqueID = uniqueID.substring(7,uniqueID.length);
   var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}/unflag`;
   var response;
   $.ajax({
       url: endpoint,
       type: 'PUT',
       error: function(xhr){
         alert("Something went wrong, please try again.");
       },
       success: function(result) {
       response = 0;
       alert("Successfully unflagged! ");
       }
   });
   return response;
};
