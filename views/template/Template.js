$(afterLoading);
function afterLoading(){
    setupSchools();
}
// School Names and courses offered by the schools are hardcoded
function setupSchools(){
    // Clear cardContainer
    $('.cardContainer').empty();

    // Change heading to subjects
    $('#branchLists h3').text('Schools')
    let SES = {
        name : 'SES',
        tData : ['Electrical Engg.', 'Electronics and Communication Engg.', 'Computer Scince Engg.'],
        tSearchID : ['ee', 'ec', 'cs']
    }
    let SMS = {
        name : 'SMS',
        tData : ['Mechanical Engg.'],
        tSearchID : ['me']
    }
    let SIF = {
        name : 'SIF',
        tData : ['Civil Engg.'],
        tSearchID : ['ce']
    }

    let SEST = new BranchTemplate(SES);
    let SMST = new BranchTemplate(SMS);
    let SIFT = new BranchTemplate(SIF);
    SEST.propagateTemplate();
    SMST.propagateTemplate();
    SIFT.propagateTemplate();

    branchOnClick();
}

function branchOnClick(){
    // If someone selects the branch clear cardContainer div
    // and add semseter wise subject list in the div
    $('.cardContainer p').click(function(){
        branchID = $(this).find('input').val();
        console.log(branchID);
        // Clear cardContainer
        $('.cardContainer').empty();

        // Change heading to subjects
        $('#branchLists h3').text('Subjects')


        // Create a button to return to previous page
        let prevButton = $('<button>');
        let icon = $('<img>');
        icon.attr('src', 'views/Images/btnReturn.png')
        // prevButton.text('Return');
        prevButton.append(icon);

        prevButton.addClass('btnReturn')
        prevButton.click(function(){
            setupSchools();
            $(this).remove();
        });

        $('.cardContainer').before(prevButton);

        // Call Controller to get subject list for that branch
        // Expected format
        // jsArray = [sem1, sem2, ...]
        // sem1 = [subject_1, subject_2, ...]
        // subject_1 = {
        //      subjectName = ,
        //      subjectCode = , (subjectCode will act as subjectID)
        //      Any other Info
        // };

        subjectArr = getSubjectsByBranch(branchID);

        // Propagate semester wise subjects
        let subjectTemp = new SubjectTemplate(subjectArr);
        subjectTemp.propagateTemplate();

        $('.cardContainer p').click(function() {
            let subjectCode = $(this).find('span').text();
            console.log(subjectCode);
        });
    });
}

// This class takes data from jSon or arrays and
// populates template present in the current page with the received data
class BranchTemplate{
    constructor(dataObj){
        this.tHeading = dataObj.name;
        this.tData = dataObj.tData;
        this.tSearchID = dataObj.tSearchID;
    }
    propagateTemplate(){
        if ('content' in document.createElement('template')) {
            var template = $('#myTemplate');
            var container = $('.cardContainer');

            let clone = template.prop('content');

            var tHeading = $(clone).find('h3');
            tHeading.text(this.tHeading);

            this.fillData($(clone).find('.links'));

            container.append(template.html());

            //Reset template
            $(clone).find('h3').empty();
            $(clone).find('.links').empty();
         }
         else {
            // the HTML template element is not supported.
            alert("HTML template element is not supported.")
        }
    }
    fillData(cardContent){
        var L = this.tData.length, i = 0, pTag, ipTag;
        if(this.tData.length !== this.tSearchID.length){
            console.log('Unequal tData and tSearchID array!');
        }
        for(i = 0; i < L; i++){
            pTag = $('<p>');
            pTag.text(this.tData[i]);
            ipTag = $('<input>');
            ipTag.attr('type', 'hidden');
            ipTag.val(this.tSearchID[i]);
            pTag.append(ipTag);
            cardContent.append(pTag);
        }
    }
}

// Does similar work
// Used to propagate subjects for given branch
class SubjectTemplate{
    constructor(subArray){
        this.subArray = subArray;
    }
    propagateTemplate(){
        if ('content' in document.createElement('template')) {
            var template = $('#myTemplate');
            var container = $('.cardContainer');

            // tHeading.text(this.tHeading);
            for(var i = 0; i < this.subArray.length; i++){
                let clone = template.prop('content');

                let semHeading = $(clone).find('h3');
                semHeading.text('Semseter - ' + (i+1));

                this.fillSubjects($(clone).find('.links'), this.subArray[i]);
                // this.fillData($(clone).find('.links'));
                container.append(template.html());

                //Reset template
                $(clone).find('h3').empty();
                $(clone).find('.links').empty();
            }
         }
         else {
            // the HTML template element is not supported.
            alert("HTML template element is not supported.")
        }
    }
    fillSubjects(subjectListDiv, data){
        var L = data.length, i = 0, aTag, pTag;
        for(i = 0; i < L; i++){
            aTag = $('<a>');
            aTag.text(data[i].subjectName + ' ' + data[i].subjectCode);
            // Uses subject code to identify the subject
            aTag.attr('href', 'SubjectTemplate.html?subCode=' + data[i].subjectCode);
            subjectListDiv.append(aTag);
        }
    }
}


// Data for testing
/*
subjectArr = [[{
        subjectName: 'Physics',
        subjectCode: 'PH1L001'
    },
    {
        subjectName: 'PDS',
        subjectCode: 'CS1L001'
    },
    {
        subjectName: 'Mechanics',
        subjectCode: 'ME1L001'
    },
    {
        subjectName: 'Maths',
        subjectCode: 'MA1L001'
    },],


    [{
        subjectName: 'Chemistry',
        subjectCode: 'CH1L001'
    },
    {
        subjectName: 'Maths',
        subjectCode: 'MA1L002'
    },
    {
        subjectName: 'Electrical Technology',
        subjectCode: 'EE1L001'
    },
    {
        subjectName: 'Learning English',
        subjectCode: 'HS1L001'
    }],


    [{
        subjectName: 'Data Structures',
        subjectCode: 'CS2L003'
    },
    {
        subjectName: 'Discrete Structures',
        subjectCode: 'CS2L001'
    },
    {
        subjectName: 'Introduction to Electronics',
        subjectCode: 'EC2L001'
    },
    {
        subjectName: 'Signals and Systems',
        subjectCode: 'EC2L002'
    },
    {
        subjectName: 'Introduction to Bio-Science',
        subjectCode: 'IDT2L001'
    },
    {
        subjectName: 'Introduction to Economics',
        subjectCode: 'HS2L007'
    },


    ] ];
*/
