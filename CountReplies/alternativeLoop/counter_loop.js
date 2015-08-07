var currentPage = 0;
var totalCommentThreads = 0;
var formf =   [];

function getPoster(){
  c=$('.idc-collapselink_closed')
  var author = [];
  var replies= [];
  var form =   [];
  var text = [];
  for (i = 1; i < c.length; i++) { 
    if (!c[i].parentElement.parentElement.parentElement.children[0].classList.contains ('idc-twitter') && !c[i].parentElement.parentElement.parentElement.children[0].classList.contains ('idc-anonymous')) {
      author[i] = c[i].parentElement.parentElement.parentElement.children[0].children[0].children[0].children[3].children[0].innerHTML;
      text[i] = c[i].parentElement.parentElement.children[1].children[0].innerHTML
      if (parseInt(c[i].innerHTML)){
        replies[i] = parseInt(c[i].innerHTML)
      } else {
        replies[i] = 0;
      } 
      form[i] =  replies[i]+'\t'+author[i]+'\t'+text[i]
    }
  } 
  formf = formf.concat(form);
    console.log("Page " + (currentPage+1));
}

//IntenseDebate action that fires after a new comment page has been loaded.
function getReplies(){
  id_add_action('page_load', function(pageObj) {
    getPoster();
    
    //If there is another page, load it.
    if($('#idc-pager .idc-sel').next('a').length) {
        currentPage++;
        IDPageLoad(currentPage);
    } else {
        //Remove the action we added.
        var lastAction = id_action_list['page_load'].length-1;
        id_action_list['page_load'][lastAction] = undefined
        formf[0] = "replies\tauthor\tcomment"
        formf = formf.filter(Boolean)
        formf = formf.join("\n")
        var csvElement = document.createElement('a');
        csvElement.id = 'csv_download'
        csvElement.innerHTML = " (Download CSV)";
        csvElement.href     = 'data:application/csv;charset=utf-8,' + encodeURIComponent(formf);
        csvElement.target   = '_blank';
        csvElement.download = 'myFile.csv';
        if ($('#csv_download').length >0){
          $('#csv_download').remove()
        }
        $('#idc-commentcount').append(csvElement);
    }
  });

   //In case we are not on the first page already.
   IDPageLoad(currentPage);
}

var countLink = document.createElement('a');
countLink.id = 'countLink'
countLink.innerHTML = "For Bluefury";
countLink.href     = 'javascript: getReplies()'
$('#idc-sortLinks').children().append("|").append(countLink)
