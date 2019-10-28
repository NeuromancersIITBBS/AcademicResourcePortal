//Function that prompts the server to send a file to download.
// download(uniqueID)
//Format of uniqueID :- CS2L00101256 i.e. sunject_Code + some_number
//Expecting further changes based on backend implementation
 var download = function(uniqueID){
    let branch = uniqueID.substring(0,2);
    let subjectCode = uniqueID.substring(0,7);
    uniqueID = uniqueID.substring(7,uniqueID.length);
    let endpoint = `https://localhost:3000/studyResouces/${branch}/subjects/${subjectCode}/resources/${uniqueID}`;

    $.ajax({
        url: endpoint,
        method: 'GET',
        error: function(xhr){
          alert("Something went wrong, please try again.");
        },
        success: function(result) {
          window.open(result, '_blank');
          console.log("Success!");
        }
    });

};
