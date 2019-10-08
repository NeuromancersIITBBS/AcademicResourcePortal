// Waits for page to load and then excutes this function
$(afterLoading);

function afterLoading(){
	var subCode = getParamByName('subCode');
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
		var uniqueID = $(this).parent().find('input').val();
		// Calls Controller function
		downloadFile(uniqueID);
	});
}

function flagOnClick(){
	$('.links p span').click(function(event){
		// Stop propagation otherwise resource download will be triggered
		event.stopPropagation(); 
		var fileName = $(this).parent().text();
		var uniqueID = $(this).parent().find('input').val();
		var currFlagCount = $(this).text();
		
		// Using confirm method to confirm whether user really wants to flag a resource or not
		var response = confirm('Do you really want to report resource ' + fileName + ' ?');
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

	// var resources = getResourcesByCode(subCode)
	var resources = getRes();
	if(!resources) {
		return;
	}

	var subName = resources[0]["subject_name"];
	// Available info: email_id, year, type, semester,
	//  				subject_name, flags, subject_code,
	// 					resource_id

	// Changes heading of the page 
	$('#subjectName').text(subName);

	// Creates 5 empty lists: midsem, endsem, tutorial, quiz, other
	
	if ('content' in document.createElement('template')) {
        var template = $('#resTemplate');
        var container = $('#resContainer');	

        arr = ['midsem', 'endsem', 'quiz', 'tutorial', 'other'];
        for(var i = 0; i < arr.length; i++){
        	let clone = template.prop('content'); 
        	$(clone).find('h3').empty();    
        	$(clone).find('.links').empty();
        	var tHeading = $(clone).find('h3');
        	tHeading.text(arr[i]); 
        	fillData($(clone).find('.links'), resources, arr[i]);
        	container.append(template.html());
        }

        // Set on click listener for all items 
        // when user clicks on a resource name download that pdf
        $('resContainer links p').click(function(){
        	var id = $(this).find('input').val();        	
        });
     } 
     else {
        // the HTML template element is not supported.
        alert("HTML template element is not supported.")
    }
}

function fillData(list, resources, type){
	var pTag, flagTag, idTag;
	for(var i = 0; i < resources.length; i++){
		if(resources[i]['type'] === type){
			pTag = $('<p>');
			flagTag = $('<span>');
			pTag.html( resources[i].semester + '-' + resources[i].year);
			// using font awesome flag icon
			flagTag.html('<i class="fa fa-flag" style = "color:red" aria-hidden="true"></i>'
			 + ' ' + resources[i]["flags"]);
			idTag = $('<input>');
            idTag.attr('type', 'hidden');
            idTag.val(resources[i]['resource_id']);
            pTag.append(idTag);
			pTag.append(flagTag);
			list.append(pTag);
		}
	}
}

// Finds a property name in the query string and returns the value of that property
function getParamByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}





















function getRes(){
 	return [{
			"email_id": "aaa999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "0",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001019009"
		},
		{
			"email_id": "abc999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "1",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001018008"
		},
		{
			"email_id": "aaa999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "2",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001027007"
		},
		{
			"email_id": "abc999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "3",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001026006"
		},
		{
			"email_id": "ade999@iitbbs.ac.in",
			"year": "2017",
			"type": "tutorial",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "0",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001035005"
		},
		{
			"email_id": "aef999@iitbbs.ac.in",
			"year": "2018",
			"type": "tutorial",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "1",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001034004"
		},
		{
			"email_id": "agh999@iitbbs.ac.in",
			"year": "2019",
			"type": "tutorial",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "0",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001033003"
		},
		{
			"email_id": "aij999@iitbbs.ac.in",
			"year": "2017",
			"type": "quiz",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "3",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001042002"
		},
		{
			"email_id": "ajk999@iitbbs.ac.in",
			"year": "2017",
			"type": "other",
			"semester": "spring",
			"subject_name": "Network Theory",
			"flags": "2",
			"subject_code": "EE2L001",
			"resource_id": "EE2L001051001"
		},
		{
			"email_id": "aaa999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "0",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001019109"
		},
		{
			"email_id": "abc999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "1",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001018208"
		},
		{
			"email_id": "aaa999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "2",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001027307"
		},
		{
			"email_id": "abc999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "3",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001026406"
		},
		{
			"email_id": "ade999@iitbbs.ac.in",
			"year": "2017",
			"type": "tutorial",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "0",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001035505"
		},
		{
			"email_id": "aef999@iitbbs.ac.in",
			"year": "2018",
			"type": "tutorial",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "1",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001034604"
		},
		{
			"email_id": "agh999@iitbbs.ac.in",
			"year": "2019",
			"type": "tutorial",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "0",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001033703"
		},
		{
			"email_id": "aij999@iitbbs.ac.in",
			"year": "2017",
			"type": "quiz",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "3",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001042802"
		},
		{
			"email_id": "ajk999@iitbbs.ac.in",
			"year": "2017",
			"type": "other",
			"semester": "autumn",
			"subject_name": "Electric Machines",
			"flags": "2",
			"subject_code": "EE3L001",
			"resource_id": "EE3L001051901"
		},
		{
			"email_id": "aaa999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "0",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003019119"
		},
		{
			"email_id": "abc999@iitbbs.ac.in",
			"year": "2017",
			"type": "midsem",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "1",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003018228"
		},
		{
			"email_id": "aaa999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "2",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003027337"
		},
		{
			"email_id": "abc999@iitbbs.ac.in",
			"year": "2018",
			"type": "endsem",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "3",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003026446"
		},
		{
			"email_id": "ade999@iitbbs.ac.in",
			"year": "2017",
			"type": "tutorial",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "0",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003035555"
		},
		{
			"email_id": "aef999@iitbbs.ac.in",
			"year": "2018",
			"type": "tutorial",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "1",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003034664"
		},
		{
			"email_id": "agh999@iitbbs.ac.in",
			"year": "2019",
			"type": "tutorial",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "0",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003033773"
		},
		{
			"email_id": "aij999@iitbbs.ac.in",
			"year": "2017",
			"type": "quiz",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "3",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003042882"
		},
		{
			"email_id": "ajk999@iitbbs.ac.in",
			"year": "2017",
			"type": "other",
			"semester": "spring",
			"subject_name": "Control Systems",
			"flags": "2",
			"subject_code": "EE3L003",
			"resource_id": "EE3L003051991"
		}
	]

}