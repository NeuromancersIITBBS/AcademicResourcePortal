// Function that would post file to the server
// upload(subjectCode, formData)

var upload = function(subjectCode, formData){
    var branch = subjectCode.substring(0,2);
    var endpoint = `http://localhost:3000/studyResouces/branches/${branch}/subjects/${subjectCode}`;

    	$.ajax({
					url : endpoint,
					type : "POST",
					data : formData,
					contentType : false,
					processData : false
				}).done(function(response){
                    alert("Success");
				}).fail(function(){
                    alert("fail!");
				}).always(function(){
					//alert("AJAX request finished!");
				});
};
