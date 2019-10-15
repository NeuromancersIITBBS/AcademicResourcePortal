//Function that prompts the server to send a file to download.
// download(uniqueID)
//Format of uniqueID :- CS2L00101256 i.e. sunject_Code + some_number
//Expecting further changes based on backend implementation
 var download = function(uniqueID){
    var branch = uniqueID.substring(0,2);
    var subjectCode = uniqueID.substring(0,7);
    var uniqueID = uniqueID.substring(7,uniqueID.length);
    var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;

    $.ajax({
        url: endpoint,
        type: 'GET',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(result) {
          alert("Success!");
        }
    });

};
