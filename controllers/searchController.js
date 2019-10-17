//Implementation to get all the subject data
//Loading data when document loads and process it to prepare for search
//Conducting a search based on query sent by view.
//An array of relevant objects is returned

var searchArray = [];
var searchResult = [];
$(document).ready(function(){
    let jsArray = jsAllSubjects();  //calling model function
    jsArray.forEach(function(item){
        let searchID = item.subjectName + item.subjectCode;
        searchID = searchID.toLowerCase();
        let obj = { information: item, searchID: searchID};
        searchArray.push(obj);
    });
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
