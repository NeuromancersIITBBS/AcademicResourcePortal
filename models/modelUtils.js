/* Model functions */

// 1. jsonResourceByCode
// Function that would call the REST api fetch the json object containing
// all the academic resources available in the specified course code.

var jsonResourcesByCode = function(str){
    var branch = str.substring(0,2);          //extracting branch from the subject code eg. CS from CS1L001
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${str}`;
    var jsonData;
    $.getJSON(endpoint, function(res){
        jsonData = res ;
    });
    return jsonData;
};

// 2.jsonSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch
  var jsonSubjectsByBranch=function(branch){         // branch = branch code eg. CS, EE, PH
  var endpoint=`http://server/studyResouces/branches/${branch}/subjects`;
  var jsondata;
  $.getJSON(endpoint, function(res){
      jsonData = res ;
  });
  return jsonData;
};
