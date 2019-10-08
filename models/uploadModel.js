// upload()
// Function that would post file to the server

var upload = function(subjectCode, formData){
    var branch = subjectCode.substring(0,2);  //extracting branch from the subject code eg. CS from CS1L001
    var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}`;
   /* $.post(endpoint, jsonData, function(data,status,xhr){
        if(status !== "success")
          alert("Something went wrong, please try again.");
    }); */// send file to endpoint
    
    
    	$.ajax({
					url : endpoint,
					type : "POST",
					data : formData,
					// both 'contentType' and 'processData' parameters are
					// required so that all data are correctly transferred
					contentType : false,
					processData : false
				}).done(function(response){
					// In this callback you get the AJAX response to check
					// if everything is right...
                    console.log("Looks fine");
				}).fail(function(){
                    console.log("fail!");
					// Here you should treat the http errors (e.g., 403, 404)
				}).always(function(){
					alert("AJAX request finished!");
				});
};
