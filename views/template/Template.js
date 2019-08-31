$(afterLoading);
function afterLoading(){
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

    let SEST = new SubjectTemplate(SES);
    let SMST = new SubjectTemplate(SMS);
    let SIFT = new SubjectTemplate(SIF);
    SEST.populateTemplate();
    SMST.populateTemplate();
    SIFT.populateTemplate();

    $('.cardContainer p').click(function(){
        console.log($(this).find('input').val());
    });

}


// This class takes data from jSon or arrays and
//populates template present in the current page with the received data
class SubjectTemplate{
    constructor(dataObj){
        this.tHeading = dataObj.name;
        this.tData = dataObj.tData;
        this.tSearchID = dataObj.tSearchID;
    }   
    populateTemplate(){
        if ('content' in document.createElement('template')) {
            var template = $('#myTemplate');
            var container = $('.cardContainer');

            let clone = template.prop('content');
            //Resets template
            $(clone).find('h3').empty();    
            $(clone).find('.links').empty(); 
            
            var tHeading = $(clone).find('h3');
            tHeading.text(this.tHeading);

            this.fillData($(clone).find('.links'));

            container.append(template.html());
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