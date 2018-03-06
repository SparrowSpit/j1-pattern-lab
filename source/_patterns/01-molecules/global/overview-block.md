## Description
- The overview block is used to give high-level summary information on a hub or entity page. 
- It can contain multiple content types, such as:
  - Plain text
  - Lists
  - Two-column data tables
  - Progress bars
  - Editable fields
  - Dual columns
- The overview block is commonly used on hub and entity pages but is not required.

## Styling
- Should always occupy the top left corner of any blocks on the page.
- Inherits basic styling from the generic block molecule.
- The block heading styling is unchanged from the basic block.
- The heading should contain an eye icon (glyphicon-open-eye), a single character space, and the text, "Overview".
- The block's body and footer backgrounds are changed to match the color of the basic gray header.
- All headings and link text are changed to white.
- Muted text is color #767676 ($boulder-gray).
- Empty State Options
  - Empty Block
    - Use class "mol-overview-block--empty" with an H4 tag
    - Color: Text muted ($color-text-muted)
    - Font-size: 1.8rem
  - Empty Block Section
    - Use class "mol-overview-block--empty" with a P tag
    - Color: Text muted ($color-text-muted)
    - Font-size: Default text size
- Editable block
  - If an overview block has editable areas, it should contain a button in the block heading to the immediate left of the help icon with the following:
- Text: Edit
- Size: XS
- Style: Default

## Behavior
- Editable Block
  - Selecting the "Edit" button in the block's heading should:
    - Activate any editable fields in the block's body
    - Change the edit button's text to , "Done editing"
  - Selecting the "Done editing" button should:
    - Deactivate any editable fields back to read-only mode
    - Change the Done editing button's text back to "Edit"
    - Any unsaved changes within editable fields are lost

## Responsive Behavior
- In layouts 768px and less, any two columns layouts should collapse to a single column.
- Inherit the responsive behaviors of the basic block molecule.

## Defaults
- N/A

## Optional Features
- Empty state (mol-overview-block--empty)

## Accessibility
- General
  - Inherit accessibility considerations from the basic block molecule.
- Contrast
  - Ensure all block text and the body and footer background color pass the minimum contrast ratios.
  - Does NOT currently comply
- Keyboard
  - Ensure that tabbing through the block flows logically from one area to the next and honors the order set out in the HTML code.
- Screen Reader
  - Any icons that display as information need to be accompanied by either aria-label or screen-reader-only text to relay the same information to screen readers.
