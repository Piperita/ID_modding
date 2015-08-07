var currentPage = 0;
var formf =   [];
var formx =   [];
var author = [];
var replies= [];
var form =   [];
var text = [];
var lastAction
var csvElement = document.createElement('a');
var c

function getPoster(){
  c=$('.idc-collapselink_closed')
  author = [];
  replies= [];
  form =   [];
  text = [];
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
//    console.log("Page " + (currentPage+1));
}

//IntenseDebate action that fires after a new comment page has been loaded. Structure from DarknessKight (https://github.com/Darknesskight)
function getReplies(){
  id_add_action('page_load', function(pageObj) {
    getPoster();
    
    //If there is another page, load it.
    if($('#idc-pager .idc-sel').next('a').length) {
        currentPage++;
//         console.log(currentPage+'         '+'nextpage')
        IDPageLoad(currentPage);
    } else {
        //Remove the action we added.
        lastAction = id_action_list['page_load'].length-1;
        id_action_list['page_load'][lastAction] = undefined
        formf[0] = "replies\tauthor\tcomment"
//        console.log(formx.length)
//        console.log(currentPage+'         '+'end')
        formx = formf.filter(Boolean)
        formx = formx.join("\n")
        csvElement.id = 'csv_download'
        csvElement.innerHTML = " (Download CSV)";
        csvElement.href     = 'data:application/csv;charset=utf-8,' + encodeURIComponent(formx);
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

function launchRepl(){
  currentPage = 0;
  formf =   [];
  formx =   [];
  getReplies();
}

var countLink = document.createElement('a');
countLink.id = 'countLink'
countLink.innerHTML = "Get Replies";
countLink.href     = 'javascript: launchRepl()'
$('#idc-sortLinks').children().append("|For Bluefury: ").append(countLink).append ('(max. 2x)')
