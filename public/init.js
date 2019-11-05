$(document).ready(function(){
  $('#ContactUsPage').css('display', 'none');
  $('#uploadPage').css('display', 'none');
  $('#subjectTemplatePage').css('display', 'none');
  $('.navUpload').click(initUpload);
  $('.navHome').click(initHome);
  $('.navContact').click(initContact);
});

function initUpload(){
  $('#ContactUsPage').css('display', 'none');
  $('#indexPage').css('display', 'none');
  $('#subjectTemplatePage').css('display', 'none');
  $('#uploadPage').css('display', 'block');
   $('#activeNavUpload').addClass('active');
   $('#activeNavHome').removeClass('active');
   $('#activeNavContact').removeClass('active');
  afterLoadingUpload();
}

function initHome(){
  $('#subjectTemplatePage').css('display', 'none');
  $('#ContactUsPage').css('display', 'none');
  $('#indexPage').css('display', 'block');
  $('#uploadPage').css('display', 'none');
  $('#activeNavUpload').removeClass('active');
  $('#activeNavHome').addClass('active');
  $('#activeNavContact').removeClass('active');
  $('.btnReturn').remove();
  setupSchools(); 
}

function initContact(){
  $('#subjectTemplatePage').css('display', 'none');
  $('#ContactUsPage').css('display', 'block');
  $('#indexPage').css('display', 'none');
  $('#uploadPage').css('display', 'none');
  $('#activeNavUpload').removeClass('active');
  $('#activeNavHome').removeClass('active');
  $('#activeNavContact').addClass('active');
}
