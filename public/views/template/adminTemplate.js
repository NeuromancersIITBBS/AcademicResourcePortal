$(afterLoading);
async function afterLoading() {
  // call controller to get all resources
   let flagData = await getFlaggedSubjects();
   let unreviewData = await getUnreviewedSubjects();

   propagateFlagTemplate(flagData);
   setOnClickFlagTemplate();
   propagateReviewTemplate(unreviewData);
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
    let subName = $(clone).find('.fieldSubName span');
    let subCode = $(clone).find('.fieldSubCode span');
    let sem = $(clone).find('.fieldSem span');
    let type = $(clone).find('.fieldType span');
    let year = $(clone).find('.fieldYear span');

    mostVotedReson = " ";
    // mostVotedReson = getMostVotedReason(resourceObj);

    // Enter Values in the fields
    email.text(resourceObj.emailId);
    resID.text(resourceObj.resourceId);
    flagCount.text(resourceObj.flags);
    flagReason.text(mostVotedReson);
    subName.text(resourceObj.subjectName);
    subCode.text(resourceObj.subjectCode);
    sem.text(resourceObj.semester);
    type.text(resourceObj.type);
    year.text(resourceObj.year);

    // Inserts template to the web page
    containerFlagged.append(template.html());
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
     removeFlag(resourceID, $(this).parent());
   });
   $('.flagContainer .btnDelete').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
         deleteFile(resourceID, $(this).parent());
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
    // select template and container
    let template = $('#unreviewedTemplate');
    let containerFlagged = $('.unreviewContainer .unreviewed');

    // Clone the template
    let clone = template.prop('content');

    // Select field to fill them
    let email = $(clone).find('.fieldEmail span');
    let resID = $(clone).find('.fieldResID span');
    let flagReason = $(clone).find('.fieldReason span');
    let subName = $(clone).find('.fieldSubName span');
    let subCode = $(clone).find('.fieldSubCode span');
    let sem = $(clone).find('.fieldSem span');
    let type = $(clone).find('.fieldType span');
    let year = $(clone).find('.fieldYear span');


    // Enter Values in the fields
    email.text(resourceObj.emailId);
    resID.text(resourceObj.resourceId);
    subName.text(resourceObj.subjectName);
    subCode.text(resourceObj.subjectCode);
    sem.text(resourceObj.semester);
    type.text(resourceObj.type);
    year.text(resourceObj.year);

    // Inserts template to the web page
    containerFlagged.append(template.html());
}

function setOnClickReviewTemplate(){
   $('.unreviewContainer .btnDownload').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
     downloadFile(resourceID);
   });
   $('.unreviewContainer .btnReviewOK').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
     markAsReviewed(resourceID, $(this).parent());
   });
   $('.unreviewContainer .btnDelete').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
         deleteFile(resourceID, $(this).parent());
   });
}
