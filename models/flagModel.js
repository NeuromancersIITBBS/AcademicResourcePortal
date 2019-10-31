// flagRequest(uniqueID)
//Function that prompts the server to modify the flag variable.

 var flagRequest = function(uniqueID, reason){

    let branch = uniqueID.substring(0,2);
    let subjectCode = uniqueID.substring(0,7);
    uniqueID = uniqueID.substring(7,uniqueID.length);
    let endpoint = `https://arpbackend.firebaseapp.com/studyResources/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
    // If flag is 1 server should increment current count by 1
    let data = {resourceID: uniqueID, flag: 1, flagReason: reason};
    let response;
    $.ajax({
        url: endpoint,
        method: 'PUT',
        data: JSON.stringify(data),
        contentType: "application/json",
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
