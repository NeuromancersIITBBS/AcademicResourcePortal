// Function that would call the REST api and fetch the json object containing
// jsonAllSubjects()
// all the subjects irrespective of branches

var jsonAllSubjects = function(){
  var endpoint = "http://localhost:3000/studyResouces/subjects";
  var jsonData;
  var success = 0;

  $.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        alert("Success!");
        jsonData = res;
        return jsonData;
      }
});



};
