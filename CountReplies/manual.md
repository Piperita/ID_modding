##What do these files do?
Upon activatation, they crawl a given ID-page (with EQD's relations between elements) for any post by a registered user with replies on the active and all subsequent pages. They then save the amount of replies, the poster's name and (in count_withText.js) the comment's contents to a csv-file that can be downloaded when clicking the new Element next to the post-counter.

##Using the files
Copy the code and paste them into the console (Ctrl+Shift+I), the scipt then should run on its own.

## Difference of both versions
Both scripts yield the same results, the difference is how they are iterated: The 'normal' version checks for the next element in the nav-bar, the 'loop'-version manually loads all pages. 

The normal version is better to get results from the current page onwards as it only links forwards, whereas the looped version always loads the current page and the pages two to the end. Another difference lies in error-handling: The looped version causes no errors when the counter is set too low or the page just won't load but may yeld some 'double' entries, whereas the normal version may stop when it gets to act before .idc-sel is selected.

##General aspects
On multi-paged threads the function will reload the next page (if available) every three seconds until all pages are crawled through.
Depending on the page this script is used on, it might thus take some time to finish

####Change delay in loading the next page
Depending on the connection, the script could run a bit slow or cause errors as the navbar needed for page-progression gets loaded quite late into the page. 
If an error is caused, increase the value on the setTimeout()-function (standard: 3000 milliseconds), on faster connections you might decrease it insted

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
