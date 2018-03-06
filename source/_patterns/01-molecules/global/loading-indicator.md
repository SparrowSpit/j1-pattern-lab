## Description
- The loading indicator displays “busy” feedback when the site is loading or processing information. 
- The indicator is a looped animation


## Styling
- The color of the bars will be #000000 and variations of this color
- Center the loading indicator horizontally and vertically within the container or page/block. Also, it should be position: absolute within its block container
- The size of the loading indicator is 50px = 5rem on screens up to 768px = 48rem, and 80px = 8rem above that 
- The overlay that is applied to block or page is background-color: rgba(236, 236,236,0.6);
- If the block does not load then the overlay should change to background-color: rgba(255, 255, 255, 0.95); and add borders of 4px to the top and bottom of block in $color-danger-default These borders should also have a border-radius to that mimics the block's border-radius. 


## Behavior
- The loading indicator will spin circularly as information is being loaded or processed
- The loading indicator should appear if an action/response takes longer than one second.
- There will be an overlay (as detailed in Styling section above) that should be placed on the block. This overlay will be above (z-index) block content with the loading indicator above the overlay. 
- If a block does not load then display error icon and text: “Loading error. Please refresh your browser to reload content.” If there are overlapping error messages, only show the error message on top. Developers: do not show AJAX technical errors on the page but instead send them to the console. If there is an error the only text to be shown is, "Loading error. Please refresh your browser to reload content." 
- If there is a loading indicator that overlaps with another loading indicator, only show the top loading indicator. If the loading indicator on top finishes loading before an overlapping loading indicator, then show hide the top loading indicator and show the lower loading indicator.
- Do not use a loading indicator inline with text but instead on the block itself



## Responsive Behavior
- The size of loading indicator should respond as indicated above in Styling section


## Defaults
- See above


## Optional Features
- n/a


## Accessibility
- Include an empty div with a class of sr-only set to “Loading” for a screen reader
- This loading indicator element itself should not receive focus
- After the AJAX call has finished and spinner has been removed, place focus on the initial element that initiated the loading




