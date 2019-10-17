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

		// Using confirm method to confirm whether user really wants to flag a resource or not
		let response = confirm('Do you really want to report resource ' + fileName + ' ?');
		if(response){
			flagToggle(uniqueID);
		}
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
	let subName = resources['midsem'][0]["subjectName"];
	// Available info: emailId, year, type, semester,
	//  				subjectName, flags, subjectCode,
	// 					resourceId

	// Changes heading of the page
	$('#subjectName').text(subName);

	// Creates 5 empty lists: midsem, endsem, tutorial, quiz, others

	if ('content' in document.createElement('template')) {
        let template = $('#resTemplate');
        let container = $('#resContainer');

        arr = ['midsem', 'endsem', 'quiz', 'tutorial', 'others'];
        for(let i = 0; i < arr.length; i++){
        	let clone = template.prop('content');
        	$(clone).find('h3').empty();
        	$(clone).find('.links').empty();
        	let tHeading = $(clone).find('h3');
        	tHeading.text(arr[i]);
        	fillData($(clone).find('.links'), resources, resources[arr[i]]);
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

function fillData(list, resources, type){
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





















function getRes(){
 	return [{
			"emailId": "aaa999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "0",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001019009"
		},
		{
			"emailId": "abc999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "1",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001018008"
		},
		{
			"emailId": "aaa999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "2",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001027007"
		},
		{
			"emailId": "abc999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "3",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001026006"
		},
		{
			"emailId": "ade999@iitbbs.ac.in",
			"year": "2017",
			"type": "tutorial",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "0",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001035005"
		},
		{
			"emailId": "aef999@iitbbs.ac.in",
			"year": "2018",
			"type": "tutorial",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "1",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001034004"
		},
		{
			"emailId": "agh999@iitbbs.ac.in",
			"year": "2019",
			"type": "tutorial",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "0",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001033003"
		},
		{
			"emailId": "aij999@iitbbs.ac.in",
			"year": "2017",
			"type": "quiz",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "3",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001042002"
		},
		{
			"emailId": "ajk999@iitbbs.ac.in",
			"year": "2017",
			"type": "other",
			"semester": "spring",
			"subjectName": "Network Theory",
			"flags": "2",
			"subjectCode": "EE2L001",
			"resourceId": "EE2L001051001"
		},
		{
			"emailId": "aaa999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "0",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001019109"
		},
		{
			"emailId": "abc999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "1",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001018208"
		},
		{
			"emailId": "aaa999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "2",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001027307"
		},
		{
			"emailId": "abc999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "3",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001026406"
		},
		{
			"emailId": "ade999@iitbbs.ac.in",
			"year": "2017",
			"type": "tutorial",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "0",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001035505"
		},
		{
			"emailId": "aef999@iitbbs.ac.in",
			"year": "2018",
			"type": "tutorial",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "1",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001034604"
		},
		{
			"emailId": "agh999@iitbbs.ac.in",
			"year": "2019",
			"type": "tutorial",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "0",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001033703"
		},
		{
			"emailId": "aij999@iitbbs.ac.in",
			"year": "2017",
			"type": "quiz",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "3",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001042802"
		},
		{
			"emailId": "ajk999@iitbbs.ac.in",
			"year": "2017",
			"type": "other",
			"semester": "autumn",
			"subjectName": "Electric Machines",
			"flags": "2",
			"subjectCode": "EE3L001",
			"resourceId": "EE3L001051901"
		},
		{
			"emailId": "aaa999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "0",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003019119"
		},
		{
			"emailId": "abc999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "1",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003018228"
		},
		{
			"emailId": "aaa999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "2",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003027337"
		},
		{
			"emailId": "abc999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "3",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003026446"
		},
		{
			"emailId": "ade999@iitbbs.ac.in",
			"year": "2017",
			"type": "tutorial",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "0",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003035555"
		},
		{
			"emailId": "aef999@iitbbs.ac.in",
			"year": "2018",
			"type": "tutorial",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "1",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003034664"
		},
		{
			"emailId": "agh999@iitbbs.ac.in",
			"year": "2019",
			"type": "tutorial",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "0",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003033773"
		},
		{
			"emailId": "aij999@iitbbs.ac.in",
			"year": "2017",
			"type": "quiz",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "3",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003042882"
		},
		{
			"emailId": "ajk999@iitbbs.ac.in",
			"year": "2017",
			"type": "other",
			"semester": "spring",
			"subjectName": "Control Systems",
			"flags": "2",
			"subjectCode": "EE3L003",
			"resourceId": "EE3L003051991"
		}
	]

}
