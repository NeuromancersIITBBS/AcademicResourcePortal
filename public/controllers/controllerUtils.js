/* Utility functions */

// 1. getResourcesByCode
// Function that would return the JS object containing
// all the academic resources available in the specified course code.

var getResourcesByCode = async function(subjectCode){
    var jsArray  = await jsResourcesByCode(subjectCode);  //calling model function
    var len = jsArray.length;
    var i;
    var endsem = [];
    var midsem = [];
    var tutorial = [];
    var quiz = [];
    var others = [];
    for(i = 0; i<len ; i++){
      if(jsArray[i].type === "endsem")
      endsem.push(jsArray[i]);
      else if(jsArray[i].type === "midsem")
      midsem.push(jsArray[i]);
      else if(jsArray[i].type === "tutorial")
      tutorial.push(jsArray[i]);
      else if(jsArray[i].type === "quiz")
      quiz.push(jsArray[i]);
      else if(jsArray[i].type === "other")
      others.push(jsArray[i]);
    }

    let obj = {
      endsem : endsem,
      midsem : midsem,
      tutorial : tutorial,
      quiz : quiz,
      others : others
    };
    console.log(obj);
    return obj;
};


//2. getSubjectsByBranch
//Function that would return a JS array of objects having info about
//all the subjects of the specified branch

var  getSubjectsByBranch=async function(branch){       // branch = branch code eg. CS, EE, PH
    let jsArray = await jsSubjectsByBranch(branch);  //calling model function
    return jsArray;
};


//3. getAllResources
//Function that would return a JS array of objects having info about
//all the resources available

var getAllResources = function(){
    let jsArray  = jsAllResources();
    return jsArray;
};
