##What do these files do?
Upon activatation, they crawl a given ID-page (with EQD's relations between elements) for any post by a registered user with replies on the active and all subsequent pages. They then save the amount of replies, the poster's name and (in count_withText.js) the comment's contents to a csv-file that can be downloaded when clicking the new element next to the post-counter.

##Using the files
Copy the code and paste them into the console (Ctrl+Shift+I), the script then should run on its own.
Alternatively, run the following script
```
//CountReplies
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://cdn.rawgit.com/Piperita/PD_previewLinks/master/CountReplies/counter.js";}());
```

##General aspects
On multi-paged threads the function will reload the next page (if available) as soon as possible until all pages are crawled through.
Depending on the page this script is used on and other scripts being run, it might thus take some time to finish

####Only crawl through active page
Use the following code (with text):
```Javascript
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
  formf[0] = "replies\tauthor\ttext"
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

getPoster();
```
##Problems
* Comments must be closed to be counted (will be fixed in next update). Kight's close-function does not work as it re-assigns the 'closed'-class to every thread.
* Does only count registered users as the data for Anons or users from Facebook/Twitter/Instagram is stored differently. Might be fixed if the need arises
* Does not count 'empty' threads, i.e. posts without replies. As the origin of this script was to count what makes a reply-worthy post, I deliberately avoided them for now. 
