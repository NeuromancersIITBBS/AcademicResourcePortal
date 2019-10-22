// functions for the flagging operation
//Format of the uniqueID "subjectCode-id" eg. CS1L001235

var flag = 0;

var flagToggle = function(uniqueID,reason){
      let response = flagRequest(uniqueID,reason);
      if(response)
          flag = flag + 1;
};
