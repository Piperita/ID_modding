##What does this file do?
Upon activatation, this file adds buttons on top of the textareas that paste the corresponding html-code into the form. 
These buttons can be used by clicking, the cursor will then automatically be positioned inside the tags. It is also possible to click them after highlighting parts of the comment, the tags will then wrap around the selection.

##Currently the following functions are implemented (left to right)
* Preview (shows the resulting text as it will be shown after posting)
* <strike>Strike</strike>
* <b>Bold</b>
* <u>Underlined</u> (strangley not available with markup...)
* <i>Italized</i>
* Unordered List (*)
* Ordered List (1..n)
* Spoiler (requires darknessKight's Ponydebate)
* <blockquote>Blockquote</blockquote>
* List-entries (to be used inside the list-tags)
* [Hyperlink](http://javascript:""; "Links to the following input-area")
* Input-Area for the link's destination

####Beta-Version
The beta-version currently has the additional functionality of automatically creating li-tags out of the #-symbol when creating ol- or ul-elements. The deviation from the main code lies in the functions orderWord() and unorderWord():
```javascript
function unorderWord(){                     //orderWord() for ol-elements
 a=$('textarea')
 a.surroundSelectedText("<ul>","</ul>")     //replace ul with ol for ol-elements
 r=a.getSelection();
 r=r.text.replace(/#/g, "<li>")
 a.replaceSelectedText(r);
}
```

##Using the file
There are currently three stable methods of launching the script: Manually, through a bookmark or through an add-on like GreaseMonkey. It should be noted that the script stays active when using the pageLoad-functions from IntenseDebate (sorting, opening a new thread-page), it only needs to be applied once after opening the page that contains the ID-container until it is closed again. 

####Manually
Take the code from the file "editor.js" and copy it into your browser's console. The console can be opened with Ctrl+Shift+I and tabbing to the right submenu.

####Bookmark
Save the following bookmark and launch it after opening a page with the ID-commenting system. 
```javascript
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://raw.githubusercontent.com/Piperita/PD_previewLinks/master/Editor/editor.js";}());
```

####GreaseMonkey
```
// ==UserScript==
// @name        InsertNameHere
// @namespace   InsertNamespaceHere
// @description Adds functionality boxes to textareas
// @include     http://www.equestriadaily.com/*
// @version     1
// @grant       none
// ==/UserScript==

//Kight's PonyDebate, needed for the spoiler-function to be effective.
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://googledrive.com/host/0B3L9afwXII3JYUx0SnlhdWNKckU";}());

//Editor
var lll = setTimeout(function(){
    javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://raw.githubusercontent.com/Piperita/PD_previewLinks/master/Editor/editor.js";}());
},3000)

```

##Features to be reviewed
* Buttons on edit-boxes (all have different IDs, so I'm unsure how to properly link buttons and text)
* New method of launching script
* Better symbols for buttons
* Preview working better with lists (currently they need to be posted in one line, otherwise they have one blank line between each entry)
* add easy-access to the emotes from Ponydebate
