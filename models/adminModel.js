//Requests by admin(s) are sent to server.

// deleteRequest(uniqueId)
// Function that tells server to delete the file with this id.

var deleteRequest = function(uniqueID){
  var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
  $.ajax({
      url: endpoint,
      type: 'DELETE'
  });
}
