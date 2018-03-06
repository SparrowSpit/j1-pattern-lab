## Description
- Select a single option from a list in a drop menu.
- The options within the menu are represented by option elements that you can group with similar items with optgroup elements. 
- The Select component includes a concise, descriptive label so that users clearly know the purpose of the selection.
- Best practices
	-- Sort the list in logical order. For instance, if possible put the most selected option at the top. 
	-- Need an option to turn something on or off? Use a checkbox.
- When an item is selected and appears in the text input field, the input remains highlighted


## Styling
- Default browser styling is used.


## Behavior
- n/a


## Responsive Behavior
- The select area will respond and resize as needed to fill the width of its defined form space on the screen.


## Defaults
- Includes a label.
- Has an empty input on page load.



## Optional Features
- Three or more option or optgroup elements.
- The select may contain an empty value on page load or have a defined option. 
- May be set to disabled.



## Accessibility
- When active, the select element itself receives highlighted focus to show it is now active.
- While in focus, pressing the spacebar will act to open the select and show the provided options 
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.
- If hint text is included, it should be part of the label text (while still visually differentiated) to ensure it gets read in context with the label text.




