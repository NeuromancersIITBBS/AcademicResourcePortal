$(afterLoading);
function afterLoading() {
  // call controller to get all resources
   dataArr = getAllResources();
   propagateFlagTemplate(dataArr);
   setOnClickFlagTemplate();
   propagateReviewTemplate(dataArr);
   setOnClickReviewTemplate();
}


function propagateFlagTemplate(subData){
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
  if(resourceObj.flags != 0){
    // select template and container
    let template = $('#flagTemplate');
    let containerFlagged = $('.flagContainer .flagged');

    // Clone the template
    let clone = template.prop('content');

    // Select field to fill them
    let email = $(clone).find('.fieldEmail span');
    let resID = $(clone).find('.fieldResID span');
    let flagCount = $(clone).find('.fieldFlagCount span');
    let flagReason = $(clone).find('.fieldReason span');
    let resName = $(clone).find('.fieldResName span');

    // Enter Values in the fields
    email.text(resourceObj.emailId);
    resID.text(resourceObj.resourceId);
    flagCount.text(resourceObj.flags);
    // flagReason.text(mostVotedReson);
    resName.text(resourceObj.subjectName + ' ' + resourceObj.type +
     ' ' + resourceObj.semester + ' ' + resourceObj.year);

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
     // removeFlag(resourceID);
     $(this).parent().fadeOut();
   });
   $('.flagContainer .btnDelete').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
         deleteFile("${dataArr.resourceId}");
         $(this).parent().fadeOut();
   });
}

function propagateReviewTemplate(subData){
    if ('content' in document.createElement('template')) {
      subData.forEach(function(item){
        this.fillDataInReviewContainer(item);
      });
    }
     else {
        // the HTML template element is not supported.
        alert("HTML template element is not supported.")
    }
}

function fillDataInReviewContainer(resourceObj){
  // if(!resourceObj.review){
    // select template and container
    let template = $('#unreviewedTemplate');
    let containerFlagged = $('.unreviewContainer .unreviewed');

    // Clone the template
    let clone = template.prop('content');

    // Select field to fill them
    let email = $(clone).find('.fieldEmail span');
    let resID = $(clone).find('.fieldResID span');
      let flagReason = $(clone).find('.fieldReason span');
    let resName = $(clone).find('.fieldResName span');

    // Enter Values in the fields
    email.text(resourceObj.emailId);
    resID.text(resourceObj.resourceId);
    resName.text(resourceObj.subjectName + ' ' + resourceObj.type +
     ' ' + resourceObj.semester + ' ' + resourceObj.year);

    // Inserts template to the web page
    containerFlagged.append(template.html());
  // }
}

function setOnClickReviewTemplate(){
   $('.unreviewContainer .btnDownload').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
     downloadFile(resourceID);
   });
   $('.unreviewContainer .btnReviewOK').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
     markAsReviewed(resourceID);
     $(this).parent().fadeOut();
   });
   $('.unreviewContainer .btnDelete').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
         deleteFile("${dataArr.resourceId}");
         $(this).parent().fadeOut();
   });
}
