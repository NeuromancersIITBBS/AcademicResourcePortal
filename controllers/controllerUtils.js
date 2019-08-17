/* Utility functions */

// 1. getResourceByCode
// Function that would return the JS object containing
// all the academic resources available in the specified course code.


// enter linking code here (link to modelUtils.js)

//call the model
var getResourcesByCode = function(str){
    var jsonData = jsonResourcesByCode(str);  //model function
    var jsObj = JSON.parse(jsonData);
    return jsObj;
}


//2.getSubjectsByBranch
//Function that would a JS object
//with all the subjects of a branches

var  getSubjectsByBranch=function(str){
    var jsonData = jsonSubjectsByBranch(str); //calling model function
    var jsObj=JSON.parse(jsonData);
  return jsObj;
}
