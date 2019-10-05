// upload()
// Function that would post file to the server

var upload = function(subjectCode, jsonData){
    var branch = subjectCode.substring(0,2);  //extracting branch from the subject code eg. CS from CS1L001
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}`;
    $.post(endpoint, jsonData, function(data,status,xhr){
        if(status !=== "success")
          alert("Something went wrong, please try again.");
    }); // send file to endpoint
};
