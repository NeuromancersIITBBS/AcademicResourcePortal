$(afterLoading);
async function afterLoading() {
  // call controller to get all resources
   let flagData = await getFlaggedSubjects();
   let unreviewData = await getUnreviewedSubjects();

   propagateFlagTemplate(flagData);
   setOnClickFlagTemplate();
   propagateReviewTemplate(unreviewData);
   setOnClickReviewTemplate();
   setupEditPrompt();
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
    let downloadLink = $(clone).find('.btnDownload a');

    mostVotedReson = " ";
    console.log(resourceObj.flagReason);
    // mostVotedReson = getMostVotedReason(resourceObj.flagReason);

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
    downloadLink.attr('href', resourceObj.downloadLink);
    downloadLink.attr('target', '_blank');

    // Inserts template to the web page
    containerFlagged.append(template.html());
}

function getMostVotedReason(dataReasons){
  let frequency = {
      'Irrelevant': 0,
      'Duplicate': 0,
      'Unclear': 0,
      'Explicit': 0
  };
  dataReasons.forEach(function(item){
    frequency[item]++;
  });
}

function setOnClickFlagTemplate(){
   // $('.flagContainer .btnDownload').click(function(){
   //   let resourceID = $(this).parent().find('fieldResID').text();
   //   downloadFile(resourceID);
   // });
   $('.flagContainer .btnFlagToggle').click(function(){
     let resourceID = $(this).parent().find('.fieldResID span').text();
     // make resource object from the current div
     let subName = $(this).parent().find('.fieldSubName span').text();
     let subCode = $(this).parent().find('.fieldSubCode span').text();
     let type = $(this).parent().find('.fieldType span').text();
     let  year = $(this).parent().find('.fieldYear span').text();
     let  sem = $(this).parent().find('.fieldSem span').text();
     let resData = {
       subjectName: subName,
       subjectCode: subCode,
       type: type,
       year: year,
       semester: sem,
       review: true,
     };
     removeFlag(resourceID, resData, $(this).parent());
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
    let downloadLink = $(clone).find('.btnDownload a');


    // Enter Values in the fields
    email.text(resourceObj.emailId);
    resID.text(resourceObj.resourceId);
    subName.text(resourceObj.subjectName);
    subCode.text(resourceObj.subjectCode);
    sem.text(resourceObj.semester);
    type.text(resourceObj.type);
    year.text(resourceObj.year);
    downloadLink.attr('href', resourceObj.downloadLink);
    downloadLink.attr('target', '_blank');

    // Inserts template to the web page
    containerFlagged.append(template.html());
}

function setOnClickReviewTemplate(){
   // $('.unreviewContainer .btnDownload').click(function(){
   //   let resourceID = $(this).parent().find('fieldResID').text();
   //   downloadFile(resourceID);
   // });
   $('.unreviewContainer .btnReviewOK').click(function(){
     let resourceID = $(this).parent().find('.fieldResID span').text();
     // make resource object from the current div
     let subName = $(this).parent().find('.fieldSubName span').text();
     let subCode = $(this).parent().find('.fieldSubCode span').text();
     let type = $(this).parent().find('.fieldType span').text();
     let  year = $(this).parent().find('.fieldYear span').text();
     let  sem = $(this).parent().find('.fieldSem span').text();
     let resData = {
       subjectName: subName,
       subjectCode: subCode,
       type: type,
       year: year,
       semester: sem,
       review: true,
     };
     markAsReviewed(resourceID, resData, $(this).parent());
   });
   $('.unreviewContainer .btnDelete').click(function(){
     let resourceID = $(this).parent().find('fieldResID').text();
         deleteFile(resourceID, $(this).parent());
   });
}
