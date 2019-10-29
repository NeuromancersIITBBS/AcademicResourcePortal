//Delete functionality (exclusive to admin)

// deleteFile(uniqueID)
// passes unique id to model function

var deleteFile = function(uniqueID){
  deleteRequest(uniqueID);
};
var removeFlag = function(uniqueID){
  unflagRequest(uniqueID);
};
var markAsReviewed = function(uniqueID){
  reviewRequest(uniqueID);
};
var reviewedAndEdited = function(uniqueID, resourceObj){
  editDetailsRequest(uniqueID, resourceObj);
};
