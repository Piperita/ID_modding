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


##Using the files
Copy and Paste the entire script into your browser's console or alternatively run the following script through GreaseMonkey:

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
