/* Model functions */

// 1. jsResourceByCode
// Function that would call the REST api and fetch the json object containing
// all the academic resources available in the specified course code.

var jsResourcesByCode = function(subjectCode){
    let branch = subjectCode.substring(0,2);
    let endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}`;
    $.ajax({
        url: endpoint,
        type: 'GET',
        dataType: 'json',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(res) {
          console.log("Success!");
          let jsonData = res;
          let jsArray = JSON.parse(jsonData);
          return jsArray;
        }
  });
};


// 2. jsSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsSubjectsByBranch = function(branch){         // branch = branch code eg. CS, EE, PH
  let endpoint=`http://localhost:3000/studyResouces/branches/${branch}/subjects`;
  $.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        alert("Success!");
        let jsonData = res;
        let jsArray = JSON.parse(jsonData);
        return jsArray;
      }
  });
  if(branch === 'CS'){
     array =
      return array;

  }
};


// 3. jsAllResources
// Function that would call the REST api and fetch the json containing
// all the information about all the resources.

  var jsAllResources = function(){
  let endpoint="http://server/studyResouces"; //endpoint may be changed based on api
  $.ajax({
      url: endpoint,
      type: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        alert("Success!");
        let jsonData = res;
        let jsArray = JSON.parse(jsonData);
        return jsArray;
      }
  });
};
