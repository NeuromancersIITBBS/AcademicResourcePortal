// postFile
// Function that would post file to the server

var postFile = function(str, jsonData){
    var branch = str.substring(0,2);  //extracting branch from the subject code eg. CS from CS1L001
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${str}`;
    $.post(endpoint, jsonData); // send file to endpoint
};
