// $(afterLoadingEditPrompt)// Get the modal
function setupEditPrompt(){
  let containerID;
  console.log('Hii');
  // Prvents the prompt from closing when admin clicks on the container
  $('#editPrompt .container').click(function(event){
      event.stopPropagation();
  });
  // Closes the prompt when admin clicks outside the container
  $('#editPrompt').click(function(){
    $('#editPrompt').css('display', 'none');
  });
  // discards the changes made by the admin
  $('#btnCancel').click(function(){
    $('#editPrompt').css('display', 'none');
  });
  // Submits the changes made by the admin
  $('#btnSubmit').click(function(){
    // Extract field values and send a put request
    // Select Input fields
    let iSubName = $('.editPromptContainer .iSubjectName').val();
    let iSubCode = $('.editPromptContainer .iSubjectCode').val();
    let iSem = $('.editPromptContainer .iSemester').val();
    let iType = $('.editPromptContainer .iType').val();
    let iYear = $('.editPromptContainer .iYear').val();
    let iResID = $('.editPromptContainer .iResID').val();
    let resData = {
      subjectName: iSubName,
      subjectCode: iSubCode,
      type: iType,
      year: iYear,
      semester: iSem,
      review: true,
    };
    console.log(resData);
    // Call controller function to send  request to the server
    reviewedAndEdited(iResID, resData, containerID);
    $('#editPrompt').css('display', 'none');
  });

  // Main Button to ambed it in adminTemplate.js
  $('.btnEdit').click(function(){
    $('#editPrompt').css('display', 'block');
    // Fill default values in the container
    let container = $(this).parent();
    // Retrive data from the container
    let subjectName = $(container).find('.fieldSubName span').text();
    let subjectCode = $(container).find('.fieldSubCode span').text();
    let semester = $(container).find('.fieldSem span').text();
    let type = $(container).find('.fieldType span').text();
    let year = $(container).find('.fieldYear span').text();
    let resID = $(container).find('.fieldResID span').text();

    // Select Input fields
    let iSubName = $('.editPromptContainer .iSubjectName');
    let iSubCode = $('.editPromptContainer .iSubjectCode');
    let iSem = $('.editPromptContainer .iSemester');
    let iType = $('.editPromptContainer .iType');
    let iYear = $('.editPromptContainer .iYear');
    let iResID = $('.editPromptContainer .iResID');

    // Set values of input fields
    iSubName.val(subjectName);
    iSubCode.val(subjectCode);
    iSem.val(semester);
    iType.val(type);
    iYear.val(year);
    iResID.val(resID);

    // Setup subjectBar and codeBar
    // for subjectName and subject Code input
    subjectBarSetup($('.iSubjectName'));
    codeBarSetup($('.iSubjectCode'));
    containerID = $(this).parent();
  });
}
