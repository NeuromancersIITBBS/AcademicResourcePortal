//Implementation to get all the subject data
//Loading data when document loads and process it to prepare for search
//Conducting a search based on query sent by view.
//An array of relevant objects is returned

var searchArray = [];
var searchResult = [];
/*
$(document).ready(async function(){
    let jsArray = await jsAllSubjects();  //calling model function
    jsArray.forEach(function(item){
        let searchID = item.subjectName + item.subjectCode;
        searchID = searchID.toLowerCase();
        let obj = { information: item, searchID: searchID};
        searchArray.push(obj);
    });
});
*/
$(document).ready(async function(){

      $('#loadingDivContainer').css('z-index', '1');
      $('#loadingDivContainer').css('display', 'block');
      $('#bodyPage').css('display', 'none');

      $('#loadingDiv').css('z-index', '2');
      $('#loadingDiv').css('display', 'block');

    await jsAllSubjects();
    let jsArray = searchModelList;  //calling model function
    jsArray.forEach(function(item){
        let searchID = item.subjectName + item.subjectCode;
        searchID = searchID.toLowerCase();
        let obj = { information: item, searchID: searchID};
        searchArray.push(obj);
    });

    $('#loadingDivContainer').css('z-index', '0');
    $('#loadingDivContainer').css('display', 'none');
    $('#loadingDiv').css('z-index', '0');
    $('#loadingDiv').css('display', 'none');
    $('#bodyPage').css('display', 'block');
});

// function to get the search results as per the query
var search = function(query){
  query = query.toLowerCase();
  searchResult.length=0;
  searchArray.forEach(function(item){
    if(item.searchID.includes(query)){
        searchResult.push(item);
    }
  });
  return searchResult;
};
