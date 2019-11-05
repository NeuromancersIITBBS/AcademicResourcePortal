/* Model functions */

// 1. jsResourceByCode
// Function that would call the REST api and fetch the json object containing
// all the academic resources available in the specified course code.

var jsResourcesByCode = async function(subjectCode){
    let branch = subjectCode.substring(0,2);
    let endpoint = `https://arpbackend-fd562.firebaseapp.com/studyResources/branches/${branch}/subjects/${subjectCode}`;
    let jsArray = [];
    const res  = await $.ajax({
        url: endpoint,
        method: 'GET',
        dataType: 'json',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(res) {
          console.log("Success!");
          console.log(res);
          jsArray = res;
        }
  });
  return jsArray;
}
// 2. jsSubjectsByBranch
// Function that would call the REST api and fetch the json object containing
// all the subjects of the specified branch

  var jsSubjectsByBranch = async function(branch){         // branch = branch code eg. CS, EE, PH
  let endpoint=`https://arpbackend-df561.firebaseapp.com/studyResources/branches/${branch}`;
  let jsArray = [];
  const res = await $.ajax({
      url: endpoint,
      method: 'GET',
      dataType: 'json',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res) {
        console.log("Success!");
        console.log(res);
        jsArray = res;
      }
  });
  console.log(jsArray);
  return jsArray;
};
