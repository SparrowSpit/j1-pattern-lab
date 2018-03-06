## Description
* The Page Header Toolbar component is contained within the global Page Header and presents a secondary page menu to the user
* Buttons appear inline and stay contained within the Page Header component
* The Page Header Toolbar buttons are a button group contained within a btn-group class. 
* The button text (or screen reader text) should contain verbs to indicate actions to the user
* The Page Header Toolbar contains 2 or more buttons within the button group depending on the need of the page. Currently _2/2018_, the hub pages contain 2 buttons while the entity pages contain 4 buttons. 



## Styling
* Button:
 * background: #5c6368, $color-branding-main (default)
 * background: #a09c95, $color-branding-header (hover)
	 * color: #ffffff;
	 * from .btn class
		* padding: 6px  $padding-md
		* font-size: 14px, $text-size-md
		* border-radius: 4px (on the two end button’s outer corners)


## Behavior
* Clicking on a Page Header Toolbar button will open a modal that allows the user to do a task


## Responsive Behavior
* n/a


## Defaults
* Contains
  * Send a Message button
  * Add Task button
* The button group consists of two buttons



## Optional Features
* The button group may contain 2 or more buttons within it as needed by the designer


## Accessibility
* Keyboard
  * Users should be able to set focus on and tab through each individual button within the button group. 
  * Once users have tabbed to the button, users should be able to activate the button by clicking the return button	


* Screen Reader
  * Glyphicons should include aria-hidden=”true” so that screen readers will skip over these elements
  * Screen reader only (sr-only) text should be included to provide screen readers info regarding each glyphicon element





