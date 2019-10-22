$(afterLoading);
function afterLoading() {
  // call controller to get all resources
   dataArr = getAllResources();
   propagateTemplate(dataArr);
   setOnClickFlagTemplate();

   
}


function propagateTemplate(subData){
    if ('content' in document.createElement('template')) {
      subData.forEach(function(item){
        this.fillDataInFlagContainer(item);
      });
    }
     else {
        // the HTML template element is not supported.
        alert("HTML template element is not supported.")
    }
}

function fillDataInFlagContainer(resourceObj){
  // select template and container
  let template = $('#flagTemplate');
  let containerFlagged = $('.flagContainer .flagged');
  let containerUnFlagged = $('.flagContainer .unflagged');

  // Clone the template
  let clone = template.prop('content');

  // Select field to fill them
  let email = $(clone).find('.fieldEmail');
  let resID = $(clone).find('.fieldResID');
  let flagCount = $(clone).find('.fieldFlagCount');

  // Enter Values in the fields
  email.text(resourceObj.emailId);
  resID.text(resourceObj.resourceId);
  flagCount.text(resourceObj.flags);

  // Set up flag button appropriately
  let flagBtnImg = $(clone).find('.btnFlagToggle img');
  flagBtnImg.attr('style', 'width: 20px');
  if(resourceObj.flags == 0){
    flagBtnImg.attr('src', './views/Images/flag.png');
    // Inserts template to the web page
    containerUnFlagged.append(template.html());
  }else{
    flagBtnImg.attr('src', './views/Images/unflag.png');
    // Inserts template to the web page
    containerFlagged.append(template.html());
  }
}

function setOnClickFlagTemplate(){
   $('.flagContainer .btnDownload').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
     downloadFile(resourceID);
   });
   $('.flagContainer .btnFlagToggle').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
     // Toggle Image
     if($(this).find('img').attr('src') == './views/Images/flag.png'){
       $(this).find('img').attr('src', './views/Images/unflag.png');
     }else{
       $(this).find('img').attr('src', './views/Images/flag.png');
     }
     flagToggle(resourceID);
   });
   $('.flagContainer .btnDelete').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
         deleteFile("${dataArr.resourceId}");
         $(this).parent().fadeOut();
   });
}
