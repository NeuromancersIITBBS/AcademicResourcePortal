/* Model functions */

// 1. jsonResourceByCode
// Function that would call the REST api fetch the json object containing
// all the academic resources available in the specified course code.

var jsonResourcesByCode = function(subjectCode){
    var branch = subjectCode.substring(0,2);          //extracting branch from the subject code eg. CS from CS1L001
    var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}`;
    var jsonData;
    var success = 0;
    $.getJSON(endpoint, function(res,status,xhr){
      if(status === "success")
        success = 1;
      jsonData = res ;
    });
    if(success)
      return jsonData;
    else {
      alert("Something went wrong, please try again.");
      return;
    }
};


// 2. jsonSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsonSubjectsByBranch = function(branch){         // branch = branch code eg. CS, EE, PH
  var endpoint=`http://localhost:3000/studyResouces/branches/${branch}/subjects`;
  var jsondata;
  var success = 0;
  $.getJSON(endpoint, function(res,status,xhr){
    if(status === "success")
      success = 1;
    jsonData = res ;
  });
  if(success)
    return jsonData;
  else {
    alert("Something went wrong, please try again.");
    return;
  }
};


// 3. jsonAllResources
// Function that would call the REST api and fetch the json containing
// all the information about all the resources.

  var jsonAllResources = function(){
  var endpoint="http://server/studyResouces";
  var jsondata;
  var success = 0;
  $.getJSON(endpoint, function(res,status,xhr){
    if(status === "success")
      success = 1;
    jsonData = res ;
  });
  if(success)
    return jsonData;
  else {
    alert("Something went wrong, please try again.");
    return;
  }
};
