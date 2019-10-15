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
      $('#formContainer .removeBtn').attr('disabled', true);

      $('#addTemplateButton').click(function(){
            addTemplate();
      });
      $('#submit').click(function(){
            submit();
      });
}

class UploadTemplate {
      populateTemplate(){
             if ('content' in document.createElement('template')){
                   var template = $('#uploadtemplate');
                   var formcontainer = $('#formContainer');

                   // var clone = template.prop('content');
                   formcontainer.append(template.html()); 
                   $('#formContainer .removeBtn').click(function(item){
                        console.log(num);
                        if(num <= 1){
                              $(this).attr('disabled', true);
                        }else{
                              $(this).parent().remove();  
                              num--;    
                              if(num <= 1){
                                    $('#formContainer .removeBtn').attr('disabled', true);
                              }else{
                                    resetAllButtons();
                              }
                        }
                    }); 
             }
             else {
                   window.alert('HTML Template is not supported by Browser');
             }
      }
}


//Function to add form Template
function addTemplate(){
      var temp=new UploadTemplate();
      temp.populateTemplate();
      num++;
      resetAllButtons();
}


// Sets disabled attribute of all buttons to be false
function resetAllButtons(){
      $('#formContainer .removeBtn').attr('disabled', false);
}

function submit(){
      uploadPreprocessing(email,num);    
}
