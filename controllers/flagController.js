// functions for the flagging operation
//Format of the uniqueID "subjectCode-id" eg. CS1L001235

var flag = 0;

var flagToggle = function(uniqueID){
    if(flag === 0){
        let response = flagRequest(uniqueID);
        if(response === 1)
            flag = 1;
    }
    else if(flag === 1){
          let response = unflagRequest(uniqueID);
          if(response === 0)
              flag = 0;
    }
};
