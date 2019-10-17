// The function processes multiple files and their related data into JSON
//and triggers the upload function for each file

var uploadPreprocessing = function(email, num){   //num : number of files being uploaded at once

    let i = 0;
    for(i=0 ; i<num ; i++){
        let formData = new FormData($(".upload-form-subunit").get(i));
        formData.append("email", email);
        upload(formData.get("subjectCode"), formData);
    }
};
