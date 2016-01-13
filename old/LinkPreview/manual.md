## About the script
This script adds buttons to every link inside IntenseDebate's commenting system that open and close previews for that link's content.

## Installing and starting the script
There are two options of getting the script to work: 

####Bookmark
Save the following code as a bookmark. Once you are on a site using the ID-commenting-system, click it to start the script. At success every link inside comments should be followed by two small buttons.
```
javascript:(function(){document.head.appendChild(document.createElement("script")).src="https://cdn.rawgit.com/Piperita/PD_previewLinks/master/popupLinks.js";}());
```

####Inject
Open your browsers console (Ctrl + Strg + I) and navigate to 'Console'. 
Paste the following code into it and press Enter. 
```
document.head.appendChild(document.createElement("script")).src="https://cdn.rawgit.com/Piperita/PD_previewLinks/master/LinkPreview/popupLinks.js";
```
At success the links inside comments shold now be followed by two small buttons. Now close the console and enjoy the new functions :)

## Current issues (sorted by importance)
* Twitter is only implemented by a third party service. The next versions of this script will try accessing tweets through the official API.
* Frame-height not set on mobile-site (see issues) 
* Some sites (e.g. livestream.com) impose automatic redirects upon opening the link. In the moment it and the early catches are 'blanked'. In the future there will be a notice or some form of alternative solution.

##Known sites that are currently not implemented
* Derpyboo.ru mainsite, potentially unfixable (embeddable version has the date in its url which is missing from the main-url)
* Most Google-sites (tested: Search-engine, Google Drive) sans Youtube
* Github
* Twitch (looking for embed-format)
* Livestream.com (automatic redirect)
