// flagRequest(uniqueID)
//Function that prompts the server to modify the flag variable.

 var flagRequest = function(uniqueID){
    let branch = uniqueID.substring(0,2);
    let subjectCode = uniqueID.substring(0,7);
     uniqueID = uniqueID.substring(7,uniqueID.length);
    let endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}/flag`;
    let response;
    $.ajax({
        url: endpoint,
        type: 'PUT',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(result) {
        response = 1;
        console.log("Successfully flagged! ");
        }
    });
    return response;
};

// unflagRequest(uniqueID)
//Function that prompts the server to unflag the already flagged resource.

var unflagRequest = function(uniqueID){
   let branch = uniqueID.substring(0,2);
   let subjectCode = uniqueID.substring(0,7);
    uniqueID = uniqueID.substring(7,uniqueID.length);
   let endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}/unflag`;
   let response;
   $.ajax({
       url: endpoint,
       type: 'PUT',
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
