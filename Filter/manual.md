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

## currently caught words
* patreon
* cialism
* cialist
* pharmacy
* viagra

## Upcoming features
- Checking comments out of the edit-box
- more words to be checked and replaced
