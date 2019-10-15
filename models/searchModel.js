// Function that would call the REST api and fetch the json object containing
// jsonAllSubjects()
// all the subjects irrespective of branches

var jsonAllSubjects = function(){
  let endpoint = "http://localhost:3000/studyResouces/subjects";
  let jsonData;
  let success = 0;

  $.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        console.log("Success!");
        jsonData = res;
        let jsArray = JSON.parse(jsonData);
        return jsArray;
      }
});



};
