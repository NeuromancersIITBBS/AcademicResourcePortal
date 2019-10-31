//Delete functionality (exclusive to admin)

// deleteFile(uniqueID)
// passes unique id to model function

var deleteFile = function(uniqueID, containerID){
  deleteRequest(uniqueID, containerID);
};
var removeFlag = function(uniqueID, containerID){
  reviewRequest(uniqueID, containerID);
};
var markAsReviewed = function(uniqueID, containerID){
  reviewRequest(uniqueID, containerID);
};
var reviewedAndEdited = function(uniqueID, resourceObj, containerID){
  editDetailsRequest(uniqueID, resourceObj, containerID);
};
