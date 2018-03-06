## Description
- Used to bring important notes of validation issues to a user's attention
- Appears when a user submits unacceptable info or fails to complete and action on a form.
- Through the warning message we need to: 
 -- Clearly communicate what is happening
 -- Describe how a user can resolve it


## Styling
- Add Bootstrap’s alert and alert-warning classes to the component (.org-validation-bar)


## Behavior
- n/a


## Responsive Behavior
- The width of the Validation Bar component will respond and resize with the width of the user’s screen.


## Defaults
- Includes a glyphicon (info-sign) at the beginning of the message
- Includes text


## Optional Features
- May include links
- May be single or multi-line (though attempt to keep message as relevant and condense as possible)


## Accessibility
- Use aria-hidden=”true” on glyphicon to hide this from screenreaders
- Use the aria role="alert" to inform assistive technologies that the Validation Bar has appeared on screen.




