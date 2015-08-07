//-----------------------     Needs more words to filter! When finding new strings that trigger the filter c&p the if-
//----RAW: Delete Filter|     paths and replace the word. Then remove the "postComment"-orders from all else-paths not 
//-----------------------     belonging to the last if-path for both types of boxes!



//---------------------
//Box for new Comments|
//---------------------
function newBox(){
  if (x.contains('cialis')){                                                     //Check for word!
	x=x.replace('cialis','cia<b></b>lis');                                   //Check for word!
        if (x.contains('cialis')){                                               //Check for word!
		newBox();
	} else {
          document.getElementById("IDCommentNewThreadText").value = x  
          postComment(0);
 	}       
  } else{
    postComment(0);
  }
}

//----------------
//Box for replies|
//----------------                                                 
function replyBox(){
  if (y.contains('cialis')){                                                   //Check for word!               
	y=y.replace('cialis','cia<b></b>lis');                                 //Check for word!
        if (y.contains('cialis')){                                             //Check for word!
		replyBox();
	} else {
          document.getElementById("txtComment").value = y
          postComment(1);
 	}   	   	     
  } else{
    postComment(1);
  }
}

//-----------
//Launch New|
//----------- 
function startFilterNew(){
  x= document.getElementById("IDCommentNewThreadText").value
  newBox()
}

//---------------
//Launch Replies|
//--------------- 
function startFilterRep(){
  y= document.getElementById("txtComment").value
  replyBox()
}

//--------------------
//Button-functionality|
//--------------------                  
   buttonNew=$('#IDNewThreadSubmitLI')[0].children[0].href="javascript: startFilterNew()"
   buttonRep=$('#IDReplyDivSubmitLIButton')[0].href="javascript: startFilterRep()"
