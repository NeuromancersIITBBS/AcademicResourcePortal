/* Model functions */

// 1. jsonResourceByCode
// Function that would call the REST api fetch the json object containing
// all the academic resources available in the specified course code.

var jsonResourcesByCode = function(str){
    var subject = str.substring(0,2);
    var endpoint = `http://server/studyResouces/branches/${subject}/subjects/${str}`;
    var jsonData;
    $.getJSON(endpoint, function(res){
        jsonData = res ;
    });
    return jsonData;
};


