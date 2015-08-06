var formf =   [];
var count =   0
var v= 0
if ($('#idc-pager').length>0){
  var v=$('#idc-pager').children(); 
  v=v[parseInt(v.length-3)].innerHTML-1;
}

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
 	console.log(count)
  count++
  if (v > 0){
    if (count <= v) {
      IDPageLoad(count);
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

    if (count <= v) {
      myVar = setTimeout(function(){ 
        getPoster()
      }, 3000);
    }
  } else {
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
}

getPoster()
