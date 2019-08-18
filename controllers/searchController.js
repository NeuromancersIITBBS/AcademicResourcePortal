//controller function
//getAllSubjects
//A function to call model to get all
//subjects in json format and to return it as a js object 

// enter linking code here (link to searchModel.js)

var getAllSubjects = function(){
  var jsonData = jsonAllSubjects();  //calling model function
  var jsObj = JSON.parse(jsonData);
  return jsObj;
};  
