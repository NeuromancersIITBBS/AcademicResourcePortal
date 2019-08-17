

var upload_file_function_at_controller = function(str, file){

    // Create a jsonData
    var jsonData;
    jsonData = {
      "str" : str,
      "file": file
    }

    upload_file_function_at_model(str, jsonData);
};
