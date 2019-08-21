// functions for the flagging operation 
// Assuming that unique id is in the format "subjectCode-id" eg. CS1L001235

var flag = 0; 

var flagFile = function(uniqueID){
    if(flag === 0){                                 // flagging done only once each session
        var response = flagRequest(uniqueID);  
        if(response === 1)
            flag = 1;
    }
};