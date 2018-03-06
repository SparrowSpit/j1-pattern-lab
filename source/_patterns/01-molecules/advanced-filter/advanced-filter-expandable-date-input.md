## Description
- The date input allows selection of a specifc date to be used within the advanced filter.

## Styling
- The date range consists of:
- A checkbox to display or hide the filter
- A date input field with text label of “Date”
- The jQuery datepicker control

## Behavior
- If the checkbox is selected, then toggle the display of the date input field. 
- If focus is placed in the date field then display a date picker.  
- Allow direct date entry into the date input field or selection from the date picker.  
- Allow the user to move forward or backward either a month or a year at a time.
- Disable dates that are not appropriate to select from the date picker.
- Do we allow manual date entry but disable dates? Too frustrating for accessibility users? Alternatives?
- Possibly don’t allow focus on disabled dates, and give an explanation up front for screen readers using aria-description.
- How to handle display of validation message for a manually entered date that’s unavailable if the datepicker is already displaying?
- Do not allow scrolling to calendar months or years beyond the calendar begin or end date limits.
- If a calendar end date is selected or entered that is earlier than the calendar begin date then replace the calendar begin date with the calendar end date.
- If a calendar begin date is selected or entered that is later than the calendar end date then replace the calendar end date with the calendar begin date.

## Responsive Behavior
- N/A

## Defaults
- Blank

## Optional Features
- N/A

## Accessibility
- A screen-reader-only message needs to be included as part of the label that describes to the user what will happen if a date is unavailable, “Unavailable dates will be indicated by a message”.
- The datepicker is technically accessible, but manual entry should be easiest. 

## Variables to be Defined
- Default date
- Default date picker begin month
- Calendar begin date limit
- Calendar end date limit
- Invalid calendar date selections