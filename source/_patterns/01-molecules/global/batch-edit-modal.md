## Description
- The Batch Edit Modal is a specific modal layout that standardizes the way users can quickly edit a number of items.
- The items to be edited are selected from a full list or other standard collection of items prior to the modal being displayed. 
- The data that may be edited for the selected items is determined by the data available in the list or item set from which the modal is launched. 

## Styling
- The modal uses the default style of the standard modal component. 
- The modal layout consists of these sections:
### Item selection count
- H4 heading that functions as the title for the selection table section
- Sits outside of the below table SECTION tag to avoid scrolling
- Uses the global "Subtext" text style
  - Text Size: Small
  - Color: Text Muted
  - Font Weight: 400
### Selection Table
- Outer SECTION tag container set to automatically scroll vertically after expanding vertically to display up to 5 table rows
- Uses the standard Data Table component (not yet componentized)
- UX NOTE: General data display for the rows should be two columns, not counting the remove button column. Up to three columns may be used so long as the data that will be in the columns is not lengthy.
- Standard remove button (not yet in Lab). The remove button's column width is limited to 3rem since the data in its cells will always be consistent.
- *Scroll to view* (displayed when more than 5 rows in the selection)
  - Uses the global "Subtext" text style
    - Text Size: Small
    - Color: Text Muted
    - Font Weight: 400
### Detail Update Section 
- Outer container SECTION tag
- H4 heading for section title of, "Select a Detail to Update"
- Uses standard modal row/2 columns 
- First column
  - Select input dropdown
- Second column
  - Any type of form input may be used to edit/update the data for the selected items, depending on the type of data being updated
  - Right margin of 3rem to allow room for the remove button. For alignment, the right margin is there even when the remove button is not displayed.
- "Add another detail" button
  - Standard text button
### Action Button
- Use the standard primary modal action button with the text, "Update".
- It should be located as the last row of the detail update section table with a single cell set to colspan="2".

## Behavior
### Selection Items
- When a user selects one or more items from the current page's full list or other item collection (such as a card view or entity carousel) and selects the batch edit option, display the modal.
- Insert a row in the selection table area for each selection made.
- If more than 5 rows are selected, display the "Scroll to view" subcomponent centered below the selection table area.
### Updating Data
- On initial display:
  - The Detail Update section should display a single row with two columns. The first column should contain a select input with a hidden label of, "Row x - Detail to Update". The row number should increment up by one for each row added.
  - The second column should be empty.
  - The "Add another detail" button should be displayed but disabled.
- Once a selection is made in the first column dropdown:
  - Add a form input to the second table cell of the row that is appropriate for the type of data to be updated (text, select dropdown, etc.) with hidden label text of, " Row x - Update detail to...". The row number should increment up by one for each row added.
  - Enable the "Add another detail" button.
- If the "Add another detail" button is selected:
  - Add a second row with a single select dropdown in the first column of the row and nothing in the second column, as was done for the initial display state.
  - Disable the "Add another detail" button.
  - Add a remove button to the far right of both rows.
- Repeat this process for each new row added.
- As columns are selected and new rows are added, in the select dropdown in the first column, disable already selected details from the available selections.
- If a user has entered a value for an update then changes the detail to be updated in the first column then reselects the original detail, clear the accompanying update field of whatever value had been previously entered for the initial detail.
- Display a remove button for all input rows until there is only one row left. 
- Apply all updates when the "Update" button is selected.
- *UX NOTE: If the second form input in a row is a text input field or equivalent, decide IN THE SPECIFIC USE CASE if leaving that field blank should:*
  - Keep the Update modal button disabled until a value is entered.
  - Use the blank field state as a value and change all data for the selected detail to blank. In this case, warn the user with a validation bar message of, "Leaving this field empty will set all selections of this detail to a blank value!" below the field when the field loses focus.

## Responsive Behavior
### Selection Section
- The selection table should scale horizontally with the width of the modal. Each heading and cell should have a max width of 15rem to avoid squashed data.
  - In mobile, the max width reduces to 10rem.
### Detail Update section
- The input rows should expand to 100% width (-3rems right margin) and stack vertically
- Each row should (to increase visual separation of input rows):
  - Set to position relative
  - Add 1.6rem of bottom margin
  - Add a bottom standard border
- The columns within the rows should
  - Set positioning to static (so remove buttons position themselves absolutely off the row instead)

## Defaults
- Scrollable selection section
- Single input in the left column of the Detail Update section
- Add another detail button disabled

## Optional Features
- N/A

# Accessibility
### Overall Pattern
- Use the default modal and inherit its standard accessibility guidelines.
- Use the standard data table and inherit its accessibility guidelines
### Keyboard
- Ensure keyboard access by providing tab stops on all buttons and form controls, including the modal close, all remove buttons, and detail update form inputs.
- Tabbing should flow from top to bottom.
### Screen Reader
- Selection section
  - Set the selection section to have an aria-describedby that points to the H4 tag of the same section.
  - Set the scope of the selection table TH tags to scope="col".
  - Make the TH tag for the remove button column screen-reader-only text.
  - The remove button on each row should have screen-reader-only text of "Remove this selection row".
  - Set the scrolling indicator to aria-hidden="true".
- Detail Update section
  - H4 heading for identification
  - Hide the labels for displayed inputs, but always include descriptive text that includes a row number to keep the field labels unique.
    - Column 1 input - "Row x - Detail to update"
    - Column 2 input - "Row x - Update detail to..."

