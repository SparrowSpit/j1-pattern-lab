## Description
* The Popover (Calendar) is used within the calendar block. *There is also a “standard” popover* within the Pattern Lab available to use outside of the calendar block. 
* The component should be paired with a clickable trigger element and contain at least one focusable element.
* It’s used to display contextual and relevant information about calendar items to the user.
* An h3 is used for the title of the popover


## Styling
* The default Bootstrap popover has a max-width of 276px
* Popover-inner (Bootstrap default)
	* Background-color: #eceef1
* Popover-content
	* Padding: 9px 14px
* Positioned/centered within the calendar block
* See global close button spec for styling
* The arrow will be positioned (top, left, right, bottom) where needed 


## Behavior
* Upon opening, the popover opens within the block that it was triggered from.
* Only one Popover (Calendar) is allowed at a time
* The popover should be absolutely positioned with the coordinates being determined by JavaScript based on the location of the triggering button and the direction of opening. It should be centered within the block.
* The popover should only close if the user clicks on the global close button or the button that triggered the popover in the first place. 

* Popover Heading
	* Popovers should always have a title for clarity.
	* They should use the close button molecule in all cases.

* Popovers can contain:
	* Text
	* Links
	* Unordered or ordered lists
	* Buttons


## Responsive Behavior
* The popover will respond (position) as needed with its relevant button

## Defaults
* Contains: 
	* a title for clarity
	* A button to “view event” or similar text
	* Global close button
	* More info on calendar event
* Selecting the close button in a popover should immediately close the popover and return cursor focus to the triggering button.
* The popover should only close if the user clicks on the global close button or the button that triggered the popover in the first place. 


## Optional Features
* The arrow may be positioned to the left, right, top, or bottom as needed. Currently in the calendar block there is no arrow.

## Accessibility
* Overall Pattern
	* User focus should be placed back on the triggering button when the popover is closed
	* The component should have role="dialog" applied
	* If possible, the rendered popover code should appear directly after its triggering link/button in the code so that the content is logically ordered and easily accessed. 
	* The popover title includes an ID which corresponds to the aria-describedby attribute on the Description/Purpose of the popover. 

* Contrast
	* Ensure contrast between background colors and any interior content has sufficient contrast.

* Keyboard
	* Users should be able to set focus on the triggering element for the popover.
	* Once the popover is displayed, focus should be immediately placed on the popover’s close button to allow users to quickly exit the popover if so desired.
	* Once the popover is displayed, tabbing flow should be: 
		* Triggering button
		* Popover close button
		* Any focusable elements in the popover body
		* The next focusable element outside the popover

* Screen Reader
	* Once the popover is displayed using the triggering button:
		* Use role=”dialog” on container of popover content
		* Read the popover’s title
		* Set focus on the popover’s close button
	* The user should then be able to either tab through the focusable elements in the popover or move through each element individually to have them read.
	* Popover close button
		* Provide screen-reader-only text of, “Close this popover”, with class=”sr-only”.





