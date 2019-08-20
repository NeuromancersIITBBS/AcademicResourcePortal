/* Utility functions */

// 1. getResourceByCode
// Function that would return the JS object containing
// all the academic resources available in the specified course code.


// enter linking code here (link to modelUtils.js)

//call the model
var getResourcesByCode = function(subjectCode){       
    var jsonData = jsonResourcesByCode(subjectCode);  //model function
    var jsObj = JSON.parse(jsonData);
    return jsObj;
}


//2. getSubjectsByBranch
//Function that would return a JS object
//with all the subjects of the specified branch

var  getSubjectsByBranch=function(branch){       // branch = branch code eg. CS, EE, PH
    var jsonData = jsonSubjectsByBranch(branch); //calling model function
    var jsObj=JSON.parse(jsonData);
    return jsObj;
}
