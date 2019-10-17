
var selecetedSearchID;  //Stores searchID of clicked item


//Function which runs after the document is completely loaded
function onDocReady(){
  //A subjectsList containing all the subjects
  searchBarSetup($('#myInput'));

  $('#searchSubject').click(function(){
    //Write code to call controller
    console.log(selecetedSearchID);
    // With an assumption that selectedSearchID = subject code
    window.location.href = 'SubjectTemplate.html?subCode=' + selecetedSearchID;
    return false;
  });
}
//Calls onDocReady when document is ready
$(onDocReady);


//Sets up the searchBar
function searchBarSetup(inp) {
  var currentFocus;

  inp.on('input', function(e) {

      //variables:
      //sContainer -> div that contains all suggestions
      //sItem -> div that contains information about a particular suggestion
      //query -> value of current input
      //suggestionLink -> tmp. variable which stores the html for sItem
      var sContainer, sItem, query = this.value,index, suggestionLink;
      closeAllLists();

      if (!query) { return false;}

      currentFocus = -1;

      sContainer = $('<div>');
      sContainer.attr('id', 'autocomplete-list');
      sContainer.attr('class', 'autocomplete-items');

      $(this).parent().append(sContainer);

      //Call Controller to get the search results
      //search is a controller function defined inside searchController.js
      var result = search(query)

      //Use controllers result and display it in dropdown
      result.forEach(function (item){
        sItem = $('<div>');
        suggestionLink = item.information.subjectName + ' (' + item.information.subjectCode + ')';
        suggestionLink += "<input type='hidden' value='" + item.information.subjectCode + "'>";
        sItem.html(suggestionLink);
        sItem.on('click', function(e) {
            //Set value of the input field to be clicked subject name
            inp.val($(this).text());
            selecetedSearchID = $(this).find('input').val();
            closeAllLists();
        });
        sContainer.append(sItem);
      });

  });

  //Reacts on arrowkeys and enter button
  inp.on('keydown', function(e) {
      var listItems = $('#autocomplete-list');
      if (listItems.length != 0) listItems = listItems.find('div');
      if (e.keyCode == 40) {
        currentFocus++;//If down key is pressed move currentFocus to the next element
        addActive(listItems);
      } else if (e.keyCode == 38) {
        currentFocus--;//If up key is pressed move currentFocus to the prev element
        addActive(listItems);
      } else if (e.keyCode == 13) {
        e.preventDefault();//If Enter is pressed submit form with the value on which currentfoucs is
        if (currentFocus > -1) {
          if (listItems.length != 0) listItems[currentFocus].click();
          //Simulate click on Search and then call controller
          var searchBtn = $('#searchSubject');
          searchBtn.click();
        }
      }
  });
  //Function to highlight active subject
  function addActive(x) {
    if (x.length == 0) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    $(x[currentFocus]).addClass('autocomplete-active');
  }
  //Function to remove active class from all items
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }
  //Closes all autocomplete lists
  function closeAllLists(elmnt) {
    var x = $('.autocomplete-items');
    for (var i = 0; i < x.length; i++) {
      //If user clicks outside the suggestions list or inbox close it
      if (elmnt != x[i] && elmnt != inp) {
        $(x[i]).remove();
      }
    }
  }
  //If user clicks outside the suggestions list or inbox, close it
  document.addEventListener('click', function (e) {
      closeAllLists(e.target);
  });
}
