// The function processes multiple files and their related data into JSON
//and triggers the upload function for each file

var uploadPreprocessing = function(email, num){   //num : number of files being uploaded at once

    let i = 0;
    for(i=0 ; i<num ; i++){
        //let formData = new FormData($(".upload-form-subunit")[i]);
        let f = new FormData();
         f.append("email", "avp10@iitbbs.ac.in");
        //formData.append("email", "avp10@iitbbs.ac.in");
        console.log(f);
        //formJSON = JSON.stringify(formData);
        //upload(formData.subjectCode, formData);
    }
};
