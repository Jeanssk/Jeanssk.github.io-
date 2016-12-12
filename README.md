# MediaCV


## Starting
git clone to your repo

It is written in purely HTML, CSS, Javascript and JQuery so nothing to install.


## Vendors
The Jquery plugins Animsition and AsPieProgress are impotant. Don't mess with any of the folders in 'vendors'


## Required Adaptions
 * Navigate through the files and change the text to be relevant to yourself.
 * Add in new images in the images folder using the filepaths referenced in the HTML or make a new folder system as you wish.


## Functionality

None of the downloads, forms or personal links (facebook icon etc..) work. You have to do that yourself to something relevant to you!


## Changes

### Media Queries
I would suggest adding:
 * A navbar that replaces the burger menu when the screen isn't mobile
 * Changing the timeline to all render on the same side in mobile mode as it is squeezed up too much when small. (alternatively remove the timeline and just render teh text as normal headers and paragraphs)

### Look and feel
It would be good if you understood where most things are coming from or why they are happening. so a few things to fiddle with and you should be able to understand most of it:
 * Change the colour scheme
 * Change the fonts
 * Try moving images or block of components to different side or section
 * Try commenting out the different vendor plug-ins at the top of a page to see which ones are responsible for which effects on that page.

### One page -> REACT

Currently each page requires the entire site to laod from a new URL. It would be much better to transform the site into REACT components and have the user only render get to stay on the site the whole time without having to wait around for new pages.
