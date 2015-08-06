//-----------------------     Needs more words to filter! When finding new strings that trigger the filter c&p the if-
//----RAW: Delete Filter|     paths and replace the word. Then remove the "postComment"-orders from all else-paths not 
//-----------------------     belonging to the last if-path for both types of boxes!

function test(){
  //---------------------
  //Box for new Comments|
  //---------------------
  if (x.contains('socialist')){                                                     //Check for word!
	x=x.replace('socialist','socia<b></b>list');                                      //Check for word!
        if (x.contains('socialist')){                                               //Check for word!
		test();
	} else {
          document.getElementById("IDCommentNewThreadText").value = x  
          postComment(0);
 	}       
  } else{
    postComment(0);
  }

  //----------------
  //Box for replies|
  //----------------                                                 
  if (y.contains('socialist')){                                                   //Check for word!               
	y=y.replace('socialist','socia<b></b>list');                                    //Check for word!
        if (y.contains('socialist')){                                             //Check for word!
		test();
	} else {
          document.getElementById("IDCommentNewThreadText").value = x  
          postComment(1);
 	}   	   	     
  } else{
    postComment(1);
  }
}

//defines elements, starts filtering
function startFilter(){
  x= document.getElementById("IDCommentNewThreadText").value
  y= document.getElementById("txtComment").value
  test()
}

//replaces functions on submit-button with function                  
   buttonNew=$('#IDNewThreadSubmitLI')[0].children[0].href="javascript: startFilter()"
   buttonRep=$('#IDReplyDivSubmitLIButton')[0].href="javascript: startFilter()"
