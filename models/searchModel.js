/* Model function */

// jsonAllSubjects
// Function that would call the REST api and fetch the json object containing
// all the subjects irrespective of branches.


var jsonAllSubjects=function(){
  var endpoint=`http://server/studyResouces/subjects`;
  var jsonData;
  $.getJSON(endpoint, function(res){
      jsonData = res ;
  });
  return jsonData;
}
