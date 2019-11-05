// Waits for page to load and then excutes this function
// $(afterLoading);

// function afterLoading(){
// 	let subCode = getParamByName('subCode');
// 	if(!subCode) {alert('Invalid Subject Code')}
// 	else{
// 		setupSubjectTemplate(subCode);
// 	}
// }
function flagOnClick(){
	$('.links p span').click(function(event){
		// Stop propagation otherwise resource download will be triggered
		event.stopPropagation();
		let fileName = $(this).parent().text();
		let uniqueID = $(this).parent().find('input').val();
		let name = $('#subjectCodeST').text();
		name = name.substring(0,(name.length-7));

		console.log(name);
		console.log(uniqueID);
		let currFlagCount = $(this).text();
		// Using confirm method to confirm whether user really wants to flag a resource or not
		bootbox.prompt({
    title: "Select a reason for flagging",
    inputType: 'select',
    inputOptions: [
    {
        text: 'Select',
        value: '',
    },
    {
        text: 'The file is irrelevant',
        value: 'Irrelevant',
    },
    {
        text: 'This file is a duplicate file',
        value: 'Duplicate',
    },
		{
			text: 'The file is unclear',
			value: 'Unclear',
		},
    {
        text: 'The file is an explicit file',
        value: 'Explicit',
    }
    ],
    callback: function (response) {
			if(response || response != ''){
				console.log(uniqueID);
				flagToggle(uniqueID,name,response);
			}else{
				alert('Select a valid reason');
			}
				console.log(response);
    }
});

	});
}

async function setupSubjectTemplate(subCode,name){
	// Changes heading of the page
	$('#subjectTemplatePage').css('display', 'block');
	$('#ContactUsPage').css('display', 'none');
  $('#indexPage').css('display', 'none');
  $('#uploadPage').css('display', 'none');

	$('#resContainer').empty();

	$('#subjectCodeST').text(name+' '+subCode);
		console.log(subCode);
		$('#loadingDiv').css('display', 'block');
		let resources = await getResourcesByCode(subCode)
		$('#loadingDiv').css('display', 'none');
		let arr = ['Midsem', 'Endsem', 'Quiz', 'Tutorial', 'Others'];
		let subName = '';
		for(var i = 0; i < arr.length; ++i){
			if(resources[arr[i].toLowerCase()].length){
				subName = resources[arr[i].toLowerCase()][0].subjectName;
			}
	}

	returnBtnSubjectTemplate();

	$('#subjectName').text(subName);
	if(!resources) {
		return;
	}
	//let subName = resources['midsem'][0]["subjectName"];
	// Available info: emailId, year, type, semester,
	//  				subjectName, flags, subjectCode,
	// 					resourceId

	// Changes heading of the page
	//$('#subjectName').text(subName);

	// Creates 5 empty lists: midsem, endsem, tutorial, quiz, others

	if ('content' in document.createElement('template')) {
        let template = $('#resTemplate');
        let container = $('#resContainer');

        for(let i = 0; i < arr.length; i++){
					if(resources[arr[i].toLowerCase()].length){
        		let clone = template.prop('content');
        		$(clone).find('h3').empty();
        		$(clone).find('.links').empty();
        		let tHeading = $(clone).find('h3');
        		tHeading.text(arr[i]);
        		fillData($(clone).find('.links'), resources[arr[i].toLowerCase()]);
        		container.append(template.html());
					}
        }

        // Set on click listener for all items
        // when user clicks on a resource name download that pdf
        $('resContainer links p').click(function(){
        	let id = $(this).find('input').val();
        });
     }
     else {
        // the HTML template element is not supported.
        alert("HTML template element is not supported.")
    }
		// Set on click listener for flags
		// When user clicks on a flag ask him for conformation and then flag the resource
		flagOnClick();
}

// Prepends return button on subjectTemplate
function returnBtnSubjectTemplate(){
	$('#subjectTemplatePage .btnReturn').remove();
	let prevButton = $('<button>');
	let icon = $('<img>');
	icon.attr('src', './views/Images/btnReturn.png')
	prevButton.append(icon);

	prevButton.addClass('btnReturn')
	prevButton.click(function(){
		$('#subjectTemplatePage').css('display', 'none');
		$('#ContactUsPage').css('display', 'none');
  	$('#indexPage').css('display', 'block');
  	$('#uploadPage').css('display', 'none');
		$(this).remove();
	});
	$('#resContainer').before(prevButton);
}

function fillData(list, resources){
	let pTag, flagTag, aTag;
	// let idTag;
	for(let i = 0; i < resources.length; i++){
		pTag = $('<p>');
		flagTag = $('<span>');
		aTag = $('<a>');
		aTag.html(resources[i].semester + '-' + resources[i].year);
		aTag.attr('href', resources[i].downloadLink);
		aTag.attr('target', '_blank');
		flagTag.html('<i class="fa fa-flag" style = "color:black" aria-hidden="true"></i>'
		 + ' ' + resources[i]["flags"]);
		 pTag.append(aTag);
		 pTag.append(flagTag);
		 idTag = $('<input>');
		 idTag.attr('type', 'hidden');
		 idTag.val(resources[i]['subjectCode']+resources[i]['resourceId']);
		 pTag.append(idTag);
		 if(resources[i].description != '' && resources[i].description != undefined){
		 	pTag.append('<br>' + resources[i].description);
		}
		 list.append(pTag);
	}
}

// Finds a property name in the query string and returns the value of that property
function getParamByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
