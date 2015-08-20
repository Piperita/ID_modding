function editSave() {
  IDsaveComment = function(commentid) {
  	if(!commentObj.curUser.userid || commentObj.curUser.userid <= 0)
	  {
		  showMsgBox("Sorry", "<p>You must be logged in to delete a comment.</p>", 0, null);
		  return;
	  }
  	if(!commentObj.comments[commentid] || !commentObj.comments[commentid].commentid)
	  {
		  showMsgBox("Sorry", "<p>That comment doesn't exist...</p>", 0, null);
		  return;
	  }
    //--------------------------------------
    //Area for filtering
    //--------------------------------------
	  ff=$id("IDEditCommentTextArea"+commentid).value
 	  ff = ff.replace('pharmacy','phar<b></b>macy'); 
	  ff = ff.replace('viagra','via<b></b>gra'); 
	  ff = ff.replace('cialis','cia<b></b>lis');
	  ff = ff.replace('patreon','pat<b></b>reon');
	  ff = ff.replace('carrier','car<b></b>rier');
	  ff = ff.replace('cock','co<b></b>ck');
	  
	  $id("IDEditCommentTextArea"+commentid).value = ff
    //--------------------------------------
    //End_Area
    //---------------------------------------
	  IDReplaceHtml($id("IDCommentCancelSave"+commentid), '<img src="http://s.intensedebate.com/images/ajax-loader.gif" alt="Submitting..." />');
	  var theStr = '"params":{"blogpostid":'+commentObj.blogpostid+', "accountid":'+commentObj.acctid+', "userid":'+commentObj.curUser.userid+', "token":"'+commentObj.curUser.token+'", "commentid":"'+commentid+'", "comment":"'+encodeURIComponent(IDaddslashes(IDaddslashes($id("IDEditCommentTextArea"+commentid).value))).replace(/&/g, "%26")+'"}';
	  var requestObj = new buildRequestObj(theStr, 12, null, connectionErr);
	  xs.make_request(requestObj);
  }
};


id_add_action('page_load', function(pageObj) {
  editSave();
})

id_add_action('idcomments_func_load', function(pageObj) {
  editSave();
})

//does not get called but for some reason affects func_load
id_add_action('idcomments_init', function(pageObj) {
  editSave();
})
