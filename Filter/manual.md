## What this script does
Before a post is sent, this script checks if any forbidden words are inside the commentBox and automatically makes them postable by adding an empty symbol inside the substring before sending the post off. 

##Activating the script
The script can be activated by the following code in three variants:
``` Javascript
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://raw.githubusercontent.com/Piperita/PD_previewLinks/master/Filter/filter.js";}());
```
1. Save the script as a bookmark and launch it upon loading an ID-Page
2. Copy and paste it into the console (Ctrl+Shift+I)
3. Copy and paste it into a GreaseMonkey-Script

####Script for edited posts (beta)
Activate the following script like the 'normal' script:
``` Javascript
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://raw.githubusercontent.com/Piperita/PD_previewLinks/master/Filter/filter_edit.js";}());
```
This will also catch posts from the edit-textbox and change offending words. In the moment it might not start on the initil pageload or only after a circumventing prompt, like a manual start of the function editSave() from the console or a delayed start from GreaseMonkey:
``` Javascript
var lll = setTimeout(function(){
    editSave();
},1000)
```

It will definitely work if a page_load-signal has been sent to ID (loading a new page, sorting comments, firing the IDPageload()-command or reloading the page with a selected comment(?)).

## currently caught words
* patreon
* cialism
* cialist
* carrier
* pharmacy
* viagra
* cock

## Upcoming features
- integrate edit-function into main-script
- more words to be checked and replaced
