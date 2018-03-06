## Description
- This component allows quick selection of one or more list items from a small data set. Since the available selections display immediately, there is no need for a user to have existing knowledge of what selections are available as with the Typeahead Dropdown. For larger data sets that cannot be displayed right away, use the Typeahead Dropdown.
- This component is based on the third-party tool "Select2".

## Styling
- Text Label
  - Default text size, bold, black
- Input Field
  - Standard input field size and styling (box shadow, blue focus highlight, etc.). See the text input field molecule for field styling details.
- Dropdown Section
  - This should match the standard styling of dropdowns across the system. See the Button Dropdown molecule for more styling details. 
- Selection Chip
  - The selection chip should match that of the Typeahead Dropdown. Please see that component for styling details.
- It will consist of a text label and a 3rd party drop down called Select2.
- It should display each selected value in a chip style that matches the selection chips in the Typeahead Dropdown.

## Behavior
- On initial field focus, the list of available selections should immediately display in a dropdown section.
- A selection can immediately be made out of the entire list of available options. 
- A user can also enter text and matching results should display after one or more characters is entered.  The best result and display it at the top of the dropdown list.
- For each result selected display the name of the selection in a selection chip.
- If no results are found, after one or more characters are entered, then display text "No results found".
- Display a remove icon, right aligned in each selection.  If the icon is selected, remove the selected item and make it available again in the dropdown list.
- Mark selected items with "text-muted" class text in the dropdown, and if selected a second time in the dropdown then remove them as a selection.

## Responsive Behavior
- The selection chips and input cursor will stack to a new row if necessary. The spacing around the chips should remain consistent.

## Defaults
- N/A

## Optional Features
- Pre-filled selections
- Default text label or alternate field descriptor elsewhere on the page.

## Accessibility
- Ensure that there is always either the default text label or an alternate aria-labelledby within the input field that refers to the ID of a descriptor for that field elsewhere on the page. 

## Variables to be Defined
- N/A
