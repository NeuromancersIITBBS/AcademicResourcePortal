// flagRequest(uniqueID)
//Function that prompts the server to modify the flag variable.

 var flagRequest = function(uniqueID){
    let branch = uniqueID.substring(0,2);
    let subjectCode = uniqueID.substring(0,7);
    uniqueID = uniqueID.substring(7,uniqueID.length);
    let endpoint = `https://localhost:3000/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
    let response;
    $.ajax({
        url: endpoint,
        type: 'PUT',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(result) {
        response = 1;
        console.log("Successfully flagged! ");
        }
    });
    return response;
};
