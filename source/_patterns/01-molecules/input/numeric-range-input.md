## Description
- The numeric range input allows a user to enter a specific number range. 
- Date ranges should use the [Date Range Input](http://vmowlallie.jenzabar.net/alliebs3/templates/master-templates/exi-pattern-lab-sass/public/?p=molecules-date-range-input) component.
## Styling
- Input fields should be standard text input components with labels.
     - Constrain label text, hint text and 
- Mobile (Stacked configuration)
     - Input fields and labels
          - Display: block
     - "to" text
          - Display: block
          - Text align left
          - Margin: 0 0 $margin-xxs 0 (.3rem)
## Behavior
- The input fields should allow only alphanumeric characters.
- Allow for validation of both input fields and give feedback using a standard validation alert component 
     - **Min/max values**
          - If a minimum value is defined and validation fails for an entered value, display the following text, "Range Start must be greater than x" in a validation alert where x is the defined minimum value.
          - If a maximum value is defined and validation fails for an entered value, display the following text, "Range End must be greater than x" in a validation alert where x is the defined maximum value.
          - If both values fail, concatenate the messages together into one validation alert.
     - **Range Start less than Range End**
          - If this option is enabled and validation fails, display a validation alert with the text, "Range Start must be less than Range End".

## Responsive Behavior
- For viewports below 420px, stack the input fields and "to" text
## Defaults
- Empty input fields
- No validation
- Start field label text of "Range Start"
- End field label text of "Range End"
## Optional Features
- Pre-entered values for either input field
- Clear input fields using a button press
- Reset input fields to a default value using a button press
- Ability to disable/enable input fields
- Validations (with customizable message)
  - Range Start value must be less than Range End value
  - Minimum value / Maximum value
- Hint text beneath labels
- Ability to hide labels (screen reader only labels)
- Ability to customize labels
- Hidden screen-reader-only text to allow for extended description
## Accessibility
- Input fields should include label text that is helpful to describe the start and end of the numeric range being entered. 
- Include a hidden description that explains only alphanumeric characters are allowed and optionally gives more info about the range being entered.
