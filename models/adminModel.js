// deleteRequest(uniqueId)
// Function that tells server to delete the file with the uniqueID.
//Format of uniqueID :- CS2L00101256 i.e. sunject_Code + some_number

var deleteRequest = function(uniqueID){
  let branch = uniqueID.substring(0,2);
  let subjectCode = uniqueID.substring(0,7);
   uniqueID = uniqueID.substring(7,uniqueID.length);
  let endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
  /*$.ajax({
      url: endpoint,
      type: 'DELETE',
      error: function(xhr){
        alert("Something went wrong, please try again.");
      },
      success: function(res){
        console.log("Success!");
      }
  });*/

};
