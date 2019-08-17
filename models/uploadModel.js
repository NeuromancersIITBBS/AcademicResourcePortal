

var upload_file_function_at_model = function(str, jsonData){
    var branch = str.substring(0,2);
    var endpoint = `http://server/studyResouces/branches/${branch}/subjects/${str}`;

    // send file to endpoint
    $.post(endpoint, jsonData);

};
