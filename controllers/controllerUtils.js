/* Utility functions */

// 1. getResourcesByCode
// Function that would return the JS object containing
// all the academic resources available in the specified course code.

var getResourcesByCode = function(subjectCode){       
    var jsonData = jsonResourcesByCode(subjectCode);  //calling model function 
    var jsArray = JSON.parse(jsonData);
    return jsArray;
}


//2. getSubjectsByBranch
//Function that would return a JS array of objects having info about
//all the subjects of the specified branch

var  getSubjectsByBranch=function(branch){       // branch = branch code eg. CS, EE, PH
    var jsonData = jsonSubjectsByBranch(branch); //calling model function
    var jsArray=JSON.parse(jsonData);
    return jsArray;
}
