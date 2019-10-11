window.onload = afterLoading;
function afterLoading(){
      var form1=new UploadTemplate();
      form1.populateTemplate();
}

class UploadTemplate {
      populateTemplate(){
             if ('content' in document.createElement('template')){
                   var template=document.querySelector("#uploadtemplate");
                   var formcontainer=document.querySelector("#formContainer");

                   var clone=document.importNode(template.content, true);
                   formcontainer.appendChild(clone);
             }
             else {
                   window.alert("HTML Template is not supported by Browser");
             }
      }
}
//to count the number of files being uploaded at once
var num=1;
//dummy data for email
var email='email@gmail.com';

//Function to add form Template
function addtemplate(){
      var temp=new UploadTemplate();
      temp.populateTemplate();
      num++;
};


function submit(){
       uploadPreprocessing(email,num);

};
