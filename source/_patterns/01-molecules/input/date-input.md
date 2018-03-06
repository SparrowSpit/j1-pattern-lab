## Description
- The date input allows input and selection of a specific date.

## Styling
- The date input consists of:
- A date input field with text label of “Date”
- The jQuery datepicker control

## Behavior
- If focus is placed in the date field then display a date picker.  
- Allow direct date entry into the date input field or selection from the date picker.  
- Allow the user to move forward or backward either a month or a year at a time.
- Disable dates that are not appropriate to select from the date picker.
- Possibly don’t allow focus on disabled dates, and give an explanation up front for screen readers using aria-description.
- Do not allow scrolling to calendar months or years beyond the calendar date limits.
- (How to handle display of validation message for a manually entered date that’s unavailable if the datepicker is already displaying?)

## Responsive Behavior
- N/A

## Defaults
- The current date

## Optional Features
- N/A

## Accessibility
- Should inherit text field input accessibility from mol-input-text-field.
- Allow manual entry of date in input field to bypass datepicker control

## Variables to be Defined
- Default date
- Default date picker begin month
- Calendar begin date limit
- Calendar end date limit
- Invalid calendar date selections