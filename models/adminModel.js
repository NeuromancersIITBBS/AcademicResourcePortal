//Requests by admin are sent to server.

// deleteRequest(uniqueId)
// Function that tells server to delete the file with this id.

var deleteRequest = function(uniqueID){
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
}
