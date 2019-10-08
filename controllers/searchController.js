//Implementation to get all the subject data 
//and to conduct a search based on query sent by view.
//An array of relevant objects is returned

//Loding data when document loads and process it to prepare for search.

var searchArray = [];
var searchResult = [];
$(document).ready(function(){
    var jsonData = jsonAllSubjects();  //calling model function
    var jsArray = JSON.parse(jsonData);    
    jsArray.forEach(function(item){
        var searchID = item.subjectName + item.subjectCode;
        searchID = searchID.toLowerCase();
        var obj = { information: item, searchID: searchID};
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


