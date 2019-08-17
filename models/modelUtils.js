/* Model functions */

// 1. jsonResourceByCode
// Function that would call the REST api fetch the json object containing
// all the academic resources available in the specified course code.

var jsonResourcesByCode = function(str){
    var branch = str.substring(0,2);
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${str}`;
    var jsonData;
    $.getJSON(endpoint, function(res){
        jsonData = res ;
    });
    return jsonData;
};

// 2.jsonSubjectsByBranch
// Function that would call the REST api fetch the json object containing
// all the subjects of a branch available in the specified course code.
var jsonSubjectsByBranch=function(str){
  var branch = str.substring(0,2);
  var endpoint=`http://server/studyResouces/branches/${branch}`;
  var jsondata;
  $.getJSON(endpoint, function(res){
      jsonData = res ;
  });
  return jsonData;
};
