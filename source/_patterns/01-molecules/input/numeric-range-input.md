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
- Allow for validation of both numbers and give feedback using a standard warning alert component (not yet developed)
## Responsive Behavior
- For viewports below 420px, stack the input fields and "to" text
## Defaults
- Empty input fields
- No validation
- Start field label text of "Range Start"
- End field label text of "Range End"
## Optional Features
- Pre-entered values for either input field
- Validation (with customizable message)
- Lower and upper limits on each field? (hint text indicators for each)
- Hint text
- Ability to hide labels (screen reader only labels)
- Ability to customize labels
- Hidden screen-reader-only text to allow for extended description
## Accessibility
- Input fields should include label text that is helpful to describe the start and end of the numeric range being entered. 
- Include a hidden description that explains only alphanumeric characters are allowed and optionally gives more info about the range being entered.
