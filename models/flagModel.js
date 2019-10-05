// flagRequest(uniqueID)
//Function that prompts the server to modify the flag variable.

 var flagRequest = function(uniqueID){
    var branch = uniqueID.substring(0,2);
    var subjectCode = uniqueID.substring(0,7);
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}/flag`;
    var response;
    $.ajax({
        url: endpoint,
        type: 'PUT',
        success: function(result) {
        response = 1;
        }
    });
    return response;
};

// unflagRequest(uniqueID)
//Function that prompts the server to unflag the already flagged resource.

var unflagRequest = function(uniqueID){
   var branch = uniqueID.substring(0,2);
   var subjectCode = uniqueID.substring(0,7);
   var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}/unflag`;
   var response;
   $.ajax({
       url: endpoint,
       type: 'PUT',
       success: function(result) {
       response = 0;
       }
   });
   return response;
};
