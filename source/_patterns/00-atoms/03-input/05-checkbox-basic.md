## Description
- A checkable input that communicates if an option is true or false
- Note: there is another checkbox component (Checkbox Toggle) that may be used. Typically the Checkbox Toggle is used for forms whereas the Checkbox Basic component is used for advanced filters or other at the discretion of UX. 
- Always use clear and concise labels for checkboxes. Be explicit about the action that will follow if the checkbox is selected. 


## Styling
- The label may be positioned to the left, right or top of the input.
- Default browser styling is used to style the input


## Behavior
- Users should be able to select the checkbox by clicking on the box directly or by clicking on its label.


## Responsive Behavior
- There is not a default responsive behavior. 


## Defaults
- The default view of a checkbox is having no option selected (unchecked).
- The default label has a font-weight of bold. 
- If there is a group of checkboxes, more than one checkbox may be selected at a time.
- The label appears to the right of checkboxes by default.
- May be set to disabled



## Optional Features
- A checkbox may have an attribute of checked set to it. 
- A checkbox may be disabled (or be set to checked and disabled)



## Accessibility
- Groups of checkboxes should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they’re answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question. But, there are exceptions to this rule. For example, if a table makes use of checkboxes as a way to select rows of data. Checkboxes in this context would represent an entire row of data in its associated table row. 
- The input itself should be able to receive focus. 
- On focusing the control, the label should be read by the screenreader. 
- The component can be tabbed to in order to receive input.
- The checkmark may also be applied by pressing/activating the spacebar
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.


