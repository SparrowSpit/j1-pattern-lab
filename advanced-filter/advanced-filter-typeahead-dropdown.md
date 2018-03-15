## Description
- The Advanced Filter Typeahead Dropdown contains the same basic functionality as the [Typeahead Dropdown]( ?p=molecules-typeahead-dropdown), but is paired with a selection checkbox and text label to allow it to be activated or deactivated to be used within the advanced filter organism. 

## Styling
- Advanced Filter checkbox and label (standard styling beyond Bootstrap defaults)
  - Form group (parent container)
- Margin: 0 0 .5em 0
- Padding: 0 0 0 1.5em
  - Checkbox
    - Margin: 0 0 .5em -1.5em
  - Checkbox label
    - Font weight: 700
    - Min-height: 20px
    - Margin: 0 0 .3em 0
    - Padding: 0 0 0 20px
- Dropdown Filter
  - The styling of the dropdown itself uses the styling defined in the [Typeahead Dropdown]( ?p=molecules-typeahead-dropdown)

## Behavior
- If the checkbox is selected or deselected, toggle the display of the [Typeahead Dropdown]( ?p=molecules-typeahead-dropdown) molecule. If the checkbox is unchecked, maintain all current selections in the dropdown if reselected.
- When displayed, the behavior of the Typeahead Dropdown should behave as described in its specific documentation.

## Responsive Behavior
- The filter input field should scale horizontally to fit within the parent filter panel.

## Defaults
- Blank, nothing selected

## Optional Features
- Pre-filled selections
- Default text label or alternate field descriptor elsewhere on the page. 

## Accessibility
- The checkbox should always have an associated label with descriptive text.
- The label for the checkbox should be clickable to allow selection/deselection of the checkbox.

## Variables to be Defined
- N/A
