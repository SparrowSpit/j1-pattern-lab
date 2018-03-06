## Description
- The Full List Batch Options Dropdown allows a user to apply an action to multiple full list rows after selecting those rows via the checkbox column. 
## Styling
- This component uses a standard [Button Dropdown component] (http://vmowlallie.jenzabar.net/alliebs3/templates/master-templates/exi-pattern-lab-sass/public/?p=molecules-button-dropdown) and should use its styling.
- Add the “button-dropdown-right” class to the UL tag of the component to make the dropdown menu open right-aligned to the button to ensure it does not display off the edge of the viewport. 
- Use standard disabled styling for the disabled state of this component. 
- The button should be located within the same row as the pagination controls, aligned far right.
## Behavior
- The button should be disabled until at least one row checkbox is selected.
- Once a checkbox selection is made, enable the button dropdown and allow an action to be selected.
- When a selection is made, immediately refresh the full list and display the results of the action taken. 
## Responsive Behavior
- In viewports below 768px:
     - Move the button beneath the pagination controls
     - Align left
## Defaults
- Disabled until activation
## Optional Features
- If one or more of the actions within the dropdown is a primary action on the page, style the button as primary.
- If the actions within the dropdown are deemed secondary for a given page, the button may be styled as default.
## Accessibility
- Inherit from Button Dropdown sub-component 
- Contrast
- Keyboard
     - Button should be focusable by tab selection
     - Button should be selectable by the Enter or Space keys
- Screen Reader
Ensure the screen reader flows from the previous pagination component into the following component