## What this script does
If a post has too many replies, new replies will soon become unreadable as the subthreads will indent further and further until only one character is viewable. This script changes this behaviour and fixes the minimal width of a post at 300px.

##Activating the script
The script can be activated by the following code in three variants:
``` Javascript
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://cdn.rawgit.com/Piperita/PD_previewLinks/master/Padding/padding.js";}());
```
1. Save the script as a bookmark and launch it upon loading an ID-Page
2. Copy and paste it in its entirety into the console (Ctrl+Shift+I)
3. Copy and paste it the script above into a GreaseMonkey-Script

## Upcoming features
- add a 'connection' or note which posts belong together or in which depth the posts originally lay.
