## Description
- This component allows quick selection of one or more list items from a small data set. Since the available selections display immediately, there is no need for a user to have existing knowledge of what selections are available as with the Typeahead Dropdown. For larger data sets that cannot be displayed right away, use the Typeahead Dropdown.
- This component is based on the third-party tool "Select2".
- Optional Modes (See behavior section for more details)
  - Multi-select dropdown (default)
  - Text input only
  - Single chip range input

## Styling
- Text Label
  - Default text size, bold, black
- Input Field
  - Standard input field size and styling (box shadow, blue focus highlight, etc.). See the text input field molecule for field styling details.
- Dropdown Section
  - This should match the standard styling of dropdowns across the system. See the Button Dropdown molecule for more styling details. 
- Optional second line of descriptive text
  - Text Size: Small
  - Color: Text muted
  - Display: Block
- Selection Chip
  - The selection chip should match that of the Typeahead Dropdown. Please see that component for styling details.
- It will consist of a text label and a 3rd party drop down called Select2.
- It should display each selected value in a chip style that matches the selection chips in the Typeahead Dropdown.
- Optional Range Input Mode
  - Dropdown Section
    - Selection already made for a dropdown item
      - Add class "select2-results__option--disabled" to the LI containing class "select2-results__option"
      - Text: Muted gray
      - Background: White
    - Multiselect in progress
      - Text: Muted gray
      - Background: Light gray
  - Selection Chip
    - Single Selection Chips show a single number
    - Range Selection Chips show both number with a dash in between them (1-10 for example)


## Behavior
### As a Dropdown
- On initial field focus, the list of available selections should immediately display in a dropdown section.
- A selection can immediately be made out of the entire list of available options. 
- A user can also enter text and matching results should display after one or more characters is entered.  The best result and display it at the top of the dropdown list.
- For each result selected display the name of the selection in a selection chip.
- If no results are found, after one or more characters are entered, then display text "No results found".
- Display a remove icon, right aligned in each selection.  If the icon is selected, remove the selected item and make it available again in the dropdown list.
- Mark selected items with "text-muted" class text in the dropdown, and if selected a second time in the dropdown then remove them as a selection.
- If the optional second line of descriptive text is used, display the text always on a new line beneath the main item text, and always treat the two lines as a single dropdown selection.
- If the text of the first line or second line are wider than the max width, wrap the text to an additional line. Depending on PM/UX user story requirements allow for all text to display or allow for the use of ellipsis. 

### As Text Input Only
- On initial field focus, the dropdown section should display as a single line, and as characters are entered they should display in both the field and dropdown section.
- A selection can be made from the dropdown section after at least one character is entered.
- The enter/return key can also be used to select the text entered.
- Ideally the dropdown section should not display "No results" on initial field focus.

### Selection Action for Both Dropdown and Text Input
- For each result selected display the name of the selection as a selection chip in the initial input field.
- In each selection chip, display a right-aligned remove icon.  If the remove icon is selected, remove the selected item and make it available again in the dropdown list.
- If the dropdown is using the optional second line of text, do not display that text in the selection chip. Only display the main item text.

### As Single Chip Range Input
- This component allows users to select by range and single select from the multi-select dropdown. This design is geared towards power users who are familiar with keyboard commands such as holding the Shift key to select a collection of data.  
- Users will click the input field to open the inputs dropdown.
- Users may select a single item by clicking the item once.
- Users may select by a range by holding SHIFT then click on the range start and then clicking on the range end. 
- Once a range or single item have been selected the text will now appear muted and the user may not select the item again. 
- To reactivate items in the dropdown that are in a range or single selected the user will need to click the X on the item's chip making them reselectable.
- Users may input multiple ranges and single items at one time. 
- Error validation appears below the input field if a range error occurs. For example, a user initially selects 5 and later tries to select a range of 1-7. 
- When a user creates a successful selection by single item or range the validation error will disappear. If a user removes the chip which is creating the error, then the validation error will disappear. 
- User may click on the help link to the right of the input to better understand the components functionality.

## Responsive Behavior
- The selection chips and input cursor will stack to a new row if necessary. The spacing around the chips should remain consistent.

## Defaults
- Dropdown mode

## Optional Features
- Pre-filled selections
- Second line of descriptive text for dropdown items
  - Wrap text to be on the second line in a plain span tag
  - Default wrapping of second line text
  - Optional truncate with ellipsis of second line text (add class mol-multiselect-dropdown--ellipsis to wrapper div containing mol-multiselect-dropdown class)
- Modes
  - Dropdown
  - Text Input
  - Single chip range selection
- Dropdown item text coloring
  - Wrap text to be colored in a span tag with a standard text color class
    - Success (color-text-success)
    - Warning (color-text-warning)
    - Danger (color-text-danger)
- Default text label or alternate field descriptor elsewhere on the page.

## Accessibility
- Ensure that there is always either the default text label or an alternate aria-labelledby within the input field that refers to the ID of a descriptor for that field elsewhere on the page. 
- If a field is required, include ending sr-only text of, " - Required input" in the input's LABEL tag.
- Ensure that the validation error message is read to our screen readers using ARIA Polite.
- Enter or space should open the dropdown and esc should close the dropdown. Space and enter will select an item or range while the dropdown is open. Up and down arrows will allow users to navigate through the dropdown. 

