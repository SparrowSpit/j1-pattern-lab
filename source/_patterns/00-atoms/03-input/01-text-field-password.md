## Description
- Provide a way for the user to securely enter a password. 
- The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read by replacing each character with a dot.
- Includes a concise, descriptive label so that users clearly know the purpose of the input.
- Receives a class of form-control



## Styling
- This component receives the (Bootstrap) form-control class which gives our standard form input stylings
- Width of the password input itself can vary depending on need of the form.


## Behavior
- n/a


## Responsive Behavior
- The Text Field Password will respond and resize as needed to fill the width of its defined form space on the screen.


## Defaults
- n/a



## Optional Features
- May be set to disabled


## Accessibility
- On focusing the control, the label should be ready by the screenreader
- When active, the Text Field Password input itself receives highlighted focus to show it is now active.
- The Text Field Password can be tabbed to in order to receive input.
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.









