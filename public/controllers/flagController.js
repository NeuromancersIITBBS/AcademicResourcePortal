// functions for the flagging operation
//Format of the uniqueID "subjectCode-id" eg. CS1L001235

var isFlagged = false;

var flagToggle = function(uniqueID,reason){
  if(!isFlagged){
    flagRequest(uniqueID,reason);
    }
    else{
      alert('You already flagged this resource file');
    }
};
