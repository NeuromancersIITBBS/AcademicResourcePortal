/* Utility functions */

// 1. getResourcesByCode
// Function that would return the JS object containing
// all the academic resources available in the specified course code.

var getResourcesByCode = function(subjectCode){
    let jsonData = jsonResourcesByCode(subjectCode);  //calling model function
    let jsArray = JSON.parse(jsonData);
    let obj = {
      endsem : [],
      midesem : [],
      tutorial : [],
      quiz : [],
      others : []
    };
    jsArray.forEach(function(item){
        obj[item.type].push(item);
    });
    return obj;
};


//2. getSubjectsByBranch
//Function that would return a JS array of objects having info about
//all the subjects of the specified branch

var  getSubjectsByBranch=function(branch){       // branch = branch code eg. CS, EE, PH
    var jsonData = jsonSubjectsByBranch(branch); //calling model function
    var jsArray=JSON.parse(jsonData);
    return jsArray;
};


//3. getAllResources
//Function that would return a JS array of objects having info about
//all the resources available

var getAllResources = function(){
    var jsonData = jsonAllResources();
    var jsArray = JSON.parse(jsonData);
    return jsArray;
};
