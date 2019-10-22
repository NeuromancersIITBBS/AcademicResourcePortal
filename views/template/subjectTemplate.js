// Waits for page to load and then excutes this function
$(afterLoading);

function afterLoading(){
	let subCode = getParamByName('subCode');
	if(!subCode) {alert('Invalid Subject Code')}
	else{
		setupPage(subCode);
	}
	// Set on click listener for flags
	// When user clicks on a flag ask him for conformation and then flag the resource
	flagOnClick();

	// Set on click listener for each resource
	// When user clicks on the resource download the resource
	downloadResource();
}

// Set on click listener on each resource file name
function downloadResource(){
	$('.links p').click(function(){
		let uniqueID = $(this).parent().find('input').val();
		// Calls Controller function
		downloadFile(uniqueID);
	});
}

function flagOnClick(){
	$('.links p span').click(function(event){
		// Stop propagation otherwise resource download will be triggered
		event.stopPropagation();
		let fileName = $(this).parent().text();
		let uniqueID = $(this).parent().find('input').val();
		let currFlagCount = $(this).text();
		console.log("im in subtempjs");
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
			if(response){
				flagToggle(uniqueID,response);
			}
				console.log(response);
    }
});

	});
}

function setupPage(subCode){
	// Changes page title
	$(document).prop('title', subCode);
	// Changes heading of the page
	$('#subjectCode strong').text(subCode);
	console.log(subCode);
	let resources = getResourcesByCode(subCode)
	// let resources = getRes();
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

        arr = ['Midsem', 'Endsem', 'Quiz', 'Tutorial', 'Others'];
        for(let i = 0; i < arr.length; i++){
        	let clone = template.prop('content');
        	$(clone).find('h3').empty();
        	$(clone).find('.links').empty();
        	let tHeading = $(clone).find('h3');
        	tHeading.text(arr[i]);
        	fillData($(clone).find('.links'), resources[arr[i].toLowerCase()]);
        	container.append(template.html());
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
}

function fillData(list, resources){
	let pTag, flagTag, idTag;
	for(let i = 0; i < resources.length; i++){
		pTag = $('<p>');
		flagTag = $('<span>');
		pTag.html( resources[i].semester + '-' + resources[i].year);
		// using font awesome flag icon
		flagTag.html('<i class="fa fa-flag" style = "color:red" aria-hidden="true"></i>'
		 + ' ' + resources[i]["flags"]);
		idTag = $('<input>');
          idTag.attr('type', 'hidden');
          idTag.val(resources[i]['resourceId']);
          pTag.append(idTag);
		pTag.append(flagTag);
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
