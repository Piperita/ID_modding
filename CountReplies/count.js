var formf =   [];

function getPoster(){
  c=$('.idc-collapselink_closed')
  var author = [];
  var replies= [];
  var form =   [];
  for (i = 1; i < c.length; i++) { 
    if (!c[i].parentElement.parentElement.parentElement.children[0].classList.contains ('idc-twitter') && !c[i].parentElement.parentElement.parentElement.children[0].classList.contains ('idc-anonymous')) {
      author[i] = c[i].parentElement.parentElement.parentElement.children[0].children[0].children[0].children[3].children[0].innerHTML;
      if (parseInt(c[i].innerHTML)){
        replies[i] = parseInt(c[i].innerHTML)
      } else {
        replies[i] = 0;
      } 
      form[i] =  replies[i]+'\t'+author[i]
    }
  } 
  formf = formf.concat(form);

  if ($('#idc-pager').length > 0){
    a=$('.idc-sel')
    a=a[a.length-1]
    if (a.nextSibling.className != 'idc-clear') {
      a.nextSibling.click();
    } else {
        formf[0] = "replies\tauthor"
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

    if (a.nextSibling.className != 'idc-clear') {
      myVar = setTimeout(function(){ 
        getPoster()
      }, 3000);
    }
  } else {
        formf[0] = "replies\tauthor"
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
}

getPoster();
