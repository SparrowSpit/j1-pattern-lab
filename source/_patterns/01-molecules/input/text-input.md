## Description
- The text input field defines an area where users can input plain text. 
- The field can be used individually or in conjunction with other input fields of the same or different types. 
## Styling
### Outer container
- Margin: 0 0 $margin-md 0
### Label
- Text Size: Default ($text-size-md)
- Font Weight: 700 ($text-weight-bold)
- Margin: 0 0 $margin-xxs 0
- Display: inline-block
- Cursor: pointer
- Positioning: Left-aligned, above the input field
### Input Field
- Height: 3.52rem
- Padding: 
     - Top/bottom - $padding-sm (.8rem)
     - Left/right: $padding-md (1.2rem)
- Border: %border-default
### Character Limit Indicator/Hint Text
- Text Size: $text-size-sm (1.2rem)
- Color: $color-text-muted
- Positioning: Left-aligned beneath label
- Margin: 0 0 $margin-xxs 0 (.3rem)
- Character Limit Text format: "x characters remaining"

### Validation Messaging
- Use the standard alert component, warning state (not yet developed)
- Margin: $margin-md 0 0 0
## Behavior
- Selecting the field's label or the input field itself should place focus within the input field.
- The field should allow all type-able characters.
- When characters typed within the field reach the right edge of the input, the text should scroll to the left as more characters are typed. 
- **Character Limit**
     - If the field has a character limit, display the character limit indicator. 
     - Typing should not be allowed once the limit is reached.
- **Validations**
     - If a field fails validation, immediately display a standard warning alert (not yet developed) beneath the input field with appropriate pre-defined text.
     - Once the validation is passed, immediately remove the validation message. 
     - If there is a character limit and a validation, place the alert beneath the character limit indicator.
Responsive Behavior
- The field should stretch horizontally to fit its parent container. 
## Defaults
- No character limit
- No validation
- Empty input field
## Optional Features
- Customizable label text 
- Character limit
- Hint text (below label)
- Validation (with definable message) (Should this happen outside the component as separate logic?)
## Accessibility
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.
- If hint text is included, it should be part of the label text (while still visually differentiated) to ensure it gets read in context with the label text.
