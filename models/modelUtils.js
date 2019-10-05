/* Model functions */

// 1. jsonResourceByCode
// Function that would call the REST api fetch the json object containing
// all the academic resources available in the specified course code.

var jsonResourcesByCode = function(subjectCode){
    var branch = subjectCode.substring(0,2);          //extracting branch from the subject code eg. CS from CS1L001
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}`;
    var jsonData;
    $.getJSON(endpoint, function(res){
        jsonData = res ;
    });
    return jsonData;
};


// 2. jsonSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsonSubjectsByBranch = function(branch){         // branch = branch code eg. CS, EE, PH
  var endpoint=`http://server/studyResouces/branches/${branch}/subjects`;
  var jsondata;
  $.getJSON(endpoint, function(res){
      jsonData = res ;
  });
  return jsonData;
};


// 3. jsonAllResources
// Function that would call the REST api and fetch the json containing
// all the information about all the resources.

  var jsonAllResources = function(){
  var endpoint="http://server/studyResouces";
  var jsondata;
  $.getJSON(endpoint, function(res){
      jsonData = res ;
  });
  return jsonData;
};
