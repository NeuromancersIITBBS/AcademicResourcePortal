//Delete functionality (exclusive to admin)

// deleteFile(uniqueID)
// passes unique id to model function

var deleteFile = function(uniqueID, containerID){
  deleteRequest(uniqueID, containerID);
};
var removeFlag = function(uniqueID, resourceObj, containerID){
  editDetailsRequest(uniqueID, resourceObj, containerID);
};
var markAsReviewed = function(uniqueID, resourceObj, containerID){
  editDetailsRequest(uniqueID, resourceObj, containerID);
};
var reviewedAndEdited = function(uniqueID, resourceObj, containerID){
  editDetailsRequest(uniqueID, resourceObj, containerID);
};
var getUnreviewedSubjects = async function(){
  let jsArray = await jsUnreviewedSubjects();
  return jsArray;
};
var getFlaggedSubjects =async function(){
  let jsArray = await jsFlagggedSubjects();
  return jsArray;
};
