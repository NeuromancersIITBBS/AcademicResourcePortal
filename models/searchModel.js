/* Model function */

// jsonAllSubjects
// Function that would call the REST api and fetch the json object containing
// all the subjects irrespective of branches.


var jsonAllSubjects = function(){
  var endpoint = "http://localhost:3000/studyResouces/subjects";
  var jsonData;
  var success = 0;
  $.getJSON(endpoint, function(res,status,xhr){
      if(status === "success")
        success = 1;
      jsonData = res ;
  });
  if(success)
    return jsonData;
  else {
    alert("Something went wrong, please try again.");
    return;
  }
};
