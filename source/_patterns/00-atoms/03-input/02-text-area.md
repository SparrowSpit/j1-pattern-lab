## Description
- Textarea inputs are used for a multi-line plain-text editing control.
- Includes a concise, descriptive label so that users clearly know the purpose of the text area.


## Styling
- This component receives the (Bootstrap) form-control class which gives our standard form input stylings
- When disabling the input, add class of "disabled" to the label as well as giving the input and label the attribute of disabled.
- The label has:
  -- Font-weight: bold
  -- Margin-bottom: 0.5rem
- Character Limit Indicator/Hint Text
  -- Text Size: $text-size-sm (1.2rem)
  -- Color: $color-text-muted
  -- Positioning: Left-aligned beneath label
  -- Margin: 0 0 $margin-xxs 0 (.3rem)
  -- Character Limit Text format: "x characters remaining"



## Behavior
- n/a


## Responsive Behavior
- The text area will respond and resize as needed to fill the width of its defined form space on the screen.


## Defaults
- Is left blank/empty on page load 
- Is resizable
- Includes a label.


## Optional Features
- May or may not be programmed to be able to resize
- May be set to disabled



## Accessibility
- The text area can be tabbed to in order to receive input.
- When active, the text area input itself receives highlighted focus to show it is now active.
- On focusing the control, the label should be ready by the screenreader
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.
- If hint text is included, it should be part of the label text (while still visually differentiated) to ensure it gets read in context with the label text.







