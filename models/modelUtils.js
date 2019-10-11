/* Model functions */

// 1. jsonResourceByCode
// Function that would call the REST api and fetch the json object containing
// all the academic resources available in the specified course code.

var jsonResourcesByCode = function(subjectCode){
    var branch = subjectCode.substring(0,2);
    var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}`;
    var jsonData;
    $.ajax({
        url: endpoint,
        type: GET,
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


// 2. jsonSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsonSubjectsByBranch = function(branch){         // branch = branch code eg. CS, EE, PH
  var endpoint=`http://localhost:3000/studyResouces/branches/${branch}/subjects`;
  var jsonData;
  $.ajax({
      url: endpoint,
      type: GET,
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


// 3. jsonAllResources
// Function that would call the REST api and fetch the json containing
// all the information about all the resources.

  var jsonAllResources = function(){
  var endpoint="http://server/studyResouces"; //endpoint may be changed based on api
  var jsonData;
  $.ajax({
      url: endpoint,
      type: GET,
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
