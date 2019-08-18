//controller function
/*A function to call model to get all
subjects in json format and to return it as a js object */

// enter linking code here (link to searchModel.js)
//1.getAllSubjects

$( document ).ready(function(){
  var jsonData = jsonAllSubjects();  //calling model function
  var jsObj = JSON.parse(jsonData);
  return jsObj;
});  //return all subjects as soon as document is ready
