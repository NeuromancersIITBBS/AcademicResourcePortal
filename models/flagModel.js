// flagRequest(uniqueID) 
//Function that prompts the server to modify the flag variable.

function flagRequest(uniqueID){
    var branch = uniqueID.substring(0,2);
    var subjectCode = uniqueID.substring(0,7);
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;
    var response;
    $.ajax({
        url: endpoint,
        type: 'PUT',
        success: function(result) {
        response = 1;
        }
    });
    return response;
}