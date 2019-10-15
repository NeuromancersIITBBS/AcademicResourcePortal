//DELETE requests by admin are sent to server.
// deleteRequest(uniqueId)
// Function that tells server to delete the file with the uniqueIDd.
//Format of uniqueID :- CS2L00101256 i.e. sunject_Code + some_number

var deleteRequest = function(uniqueID){
  var branch = uniqueID.substring(0,2);
  var subjectCode = uniqueID.substring(0,7);
  var uniqueID = uniqueID.substring(7,uniqueID.length);
  var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
  $.ajax({
      url: endpoint,
      type: 'DELETE',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res){
        alert("Success!");
      }
  });
};
