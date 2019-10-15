// Global Variables

//to count the number of files being uploaded at once
var num =  1;
//dummy data for email
var email = 'email@gmail.com';

// Runs afterLoading function after the page loads
$(afterLoading);

function afterLoading(){
      var form1 = new UploadTemplate();
      form1.populateTemplate();
}

class UploadTemplate {
      populateTemplate(){
             if ('content' in document.createElement('template')){
                   var template = $('#uploadtemplate');
                   var formcontainer = $('#formContainer');

                   var clone = template.prop('content');
                   formcontainer.append(clone);  
             }
             else {
                   window.alert('HTML Template is not supported by Browser');
             }
      }
}


//Function to add form Template
function addtemplate(){
      var temp=new UploadTemplate();
      temp.populateTemplate();
      num++;
}


function submit(){
      uploadPreprocessing(email,num);    
}
