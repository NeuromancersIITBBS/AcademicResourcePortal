// Function that would call the REST api and fetch the json object containing
// jsAllSubjects()
// all the subjects irrespective of branches
var searchModelList = [];
var branchSubjectList= [];

var jsAllSubjects = async function(){
    let endpoint = "https://arpbackend-fd562.firebaseapp.com/search";
    let success = 0;
    let jsArray = [];
    const res = await $.ajax({
        url: endpoint,
        method: 'GET',
        dataType: 'json',
        error: function(xhr){
            alert("Something went wrong, please try again.");
        },
        success: function(res) {
            console.log("Success!");
            jsArray = res;
            console.log(res);
            for(const subNameCodeObj of res){
               for(const obj of subNameCodeObj.data){
                   searchModelList.push(obj);
               }
            }
            branchSubjectList = jsArray;
        }
    });
    return jsArray;
};

