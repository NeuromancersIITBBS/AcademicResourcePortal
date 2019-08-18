
// prepareFile
// Function that would convert jsObj to JSON format and calls the postFile function in uploadModel.js
//


// enter linking code here (link to uploadModel.js)

var prepareFile = function(subjectCode, jsObj){       // subject code: eg. CS, EE, PH ; jsObj = file in JS object format

    // Convert Javascript object to JSON format
    var jsonData = JSON.stringify(jsObj);
    postFile(subjectCode, jsonData);
};
