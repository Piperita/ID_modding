function test(ver){
  $('#dialog').show() 
  $('#dialog')[0].innerHTML="<button onclick='negTest()' style=''>Hide</button> <u><b>PREVIEW</b></u><br><br>"
  $('#dialog')[0].innerHTML+=ver[0].value.replace(/\n/g,"<br>")
}

function negTest(){
  $('#dialog').hide() 
  $('#dialog')[0].innerHTML="<button onclick='negTest()' style=''>Hide</button> <u><b>PREVIEW</b></u><br><br>"
}

function boldWord(ver){
  ver.surroundSelectedText("<b>","</b>")
}

function italizeWord(ver){
  ver.surroundSelectedText("<i>","</i>")
}

function underlineWord(ver){
  ver.surroundSelectedText("<u>","</u>")
}

function strikeWord(ver){
  ver.surroundSelectedText("<strike>","</strike>")
}

function quoteWord(ver){
  ver.surroundSelectedText("<blockquote>","</blockquote>")
}

function spoilWord(ver){
  ver.surroundSelectedText(" sp "," !sp ")
}

function listWord(ver){
  ver.surroundSelectedText("<li>","</li>")
}

function orderWord(ver){
  ver.surroundSelectedText("<ol>","</ol>")
}

function unorderWord(ver){
  ver.surroundSelectedText("<ul>","</ul>")
}

//-------------------------------------
//create popup or inputarea for link---
//-------------------------------------
function linkWord(ver, link){
  var ausl = '<a href="'+link+'">'
  ver.surroundSelectedText(ausl,'</a>')
}


document.head.appendChild(document.createElement("script")).src="https://raw.githubusercontent.com/timdown/rangyinputs/master/rangyinputs-jquery-src.js"

var xyz = $("#IDCommentNewThreadText")
var zyx = $("#txtComment")
var in1 = $("#inOne")[0].value
var in2 = $("#inTwo")[0].value

var cont1 =   '<div id="ButtonContainerNew"><button type="button" onclick="test(xyz)" style="">Preview</button><button type="button" onclick="strikeWord(xyz)"><strike>S</strike></button><button type="button" onclick="boldWord(xyz)" href="javascript:;"><b>B</b></button><button type="button" onclick="underlineWord(xyz)"><u>U</u></button><button type="button" onclick="italizeWord(xyz)"><i>I</i></button><button type="button" onclick="unorderWord(xyz)">*</button><button type="button" onclick="orderWord(xyz)">1</button><button type="button" onclick="spoilWord(xyz)">SP</button><button type="button" onclick="quoteWord(xyz)">Q</button><button type="button" onclick="listWord(xyz)">LI</button><button type="button" onclick="linkWord(xyz, in1)">A</button><input id="inOne" value="http://"></div>'

var cont2 =   '<div id="ButtonContainerRep"><button type="button" onclick="test(zyx)" style="">Preview</button><button type="button" onclick="strikeWord(zyx)"><strike>S</strike></button><button type="button" onclick="boldWord(zyx)"><b>B</b></button><button type="button" onclick="underlineWord(zyx)"><u>U</u></button><button type="button" onclick="italizeWord(zyx)"><i>I</i></button><button type="button" onclick="unorderWord(zyx)">*</button><button type="button" onclick="orderWord(zyx)">1</button><button type="button" onclick="spoilWord(zyx)">SP</button><button type="button" onclick="quoteWord(zyx)">Q</button><button type="button" onclick="listWord(zyx)">LI</button><button type="button" onclick="linkWord(zyx, in2)">A</button><input id="inTwo" value="http://"></div>'

$("#IDCommentNewThreadText").before(cont1)
$("#txtComment").before(cont2)

var xxxxxx = '<div style="position: fixed; background: white; top: 50%; height: 33%; padding: 3px; margin: 3px; border: 7px double black; overflow: scroll; display: none" id="dialog" title="Preview"><button onclick="negTest()" style="">Hide</button><u><b>PREVIEW</b></u><br><br></div>'
$('#idc-container').after(xxxxxx)
