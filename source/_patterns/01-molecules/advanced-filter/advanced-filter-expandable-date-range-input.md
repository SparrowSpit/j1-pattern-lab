## Description
- The advanced filter date range input allows input and selection of a specific range of days to be used to filter a set of data within the advanced filter.

## Styling
- The advanced filter date range input consists of:
- A checkbox to display or hide the filter
- A start input field with text label of “Start Date”
- An end date input field with text label “End Date”
- The text “to” between the fields
- The jQuery datepicker control

## Behavior
- If the checkbox is selected, then toggle the display of the date range input fields.
- If focus is placed in the begin or end date field then display a date picker. 
- The date picker should appear below the bottom edge of its input field. If there is not room for this positioning due to viewport restrictions, the date picker should appear above the top edge of the input field. 
- Allow direct date entry into the input field or selection from the date picker popup.  Allow scrolling through months of the calendar, one month at a time.
- Disable dates that are not appropriate to select from the date picker.
- Do not allow scrolling to calendar months beyond the calendar begin or end date limits.
- If a calendar end date is selected or entered that is earlier than the calendar begin date then replace the calendar begin date with the calendar end date.
- If a calendar begin date is selected or entered that is later than the calendar end date then replace the calendar end date with the calendar begin date.

## Responsive Behavior
- At 420px or lower, the component will stack in a vertical orientation.

## Defaults
- Blank

## Optional Features
- Adding the utility class “block” to the div containing the word “to” will force the component to stay in its vertical orientation.

## Accessibility
- A screen-reader-only message needs to be included as part of the label that describes to the user what will happen if a date is unavailable, “Unavailable dates will be indicated by a message”.
- The datepicker is technically accessible, but manual entry should be easiest. 

## Variables to be Defined
- Default begin date
- Default end date
- Default date picker begin month
- Calendar begin date limit
- Calendar end date limit
- Invalid calendar date selections
