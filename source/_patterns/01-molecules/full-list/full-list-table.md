This is a temporary static example that shows all examples documented below. A fully functioning example will be provided soon.

## Description
- The full list allows display of data sets of similar items, such as people, events or buildings on a campus. The data is laid out in a tabular manner with rows and columns. Column headings provide a way to identify the data in each column. Each row should be for an individual item. 
- The full list is designed to be mobile-friendly by hiding columns as needed and allowing viewing of those columns by expanding/collapsing individual rows.
- This component is ONLY for the full list table itself and does not include any of the other parts of the overall Full List Organism. Other pieces such as table pagination and filtering are separate components. 

## Styling
###Table Header
####Column Labels
- Label wording should be as short as possible while remaining clear
- Default text size
- Bold
- Color: $color-text-default (unless changed to other state such as success, danger, etc.)
- Left-aligned (unless changed as described below)
- Margin: 0
- Padding: (Front-end dev: fill in when sort icons are in place)
####Column Sort Icons
- An up/down triangle arrow icon for sortable tables that have not yet been sorted. 
- A single downward triangle for columns that has been sorted in ascending order.
- A single upward triangle arrow for columns that have been sorted in descending order.
- Black color
- Icons should appear to the right of the column heading text with $margin-lg spacing between them.
####Header Border (THs)
- Bottom border only: 2px solid $color-border-default
###Table Rows
####Rows
- The table should display a maximum of 15 rows at a time when paginated, using the full list pagination component. All rows should be displayed only if the user chooses the Show all button in the pagination control.
- FUTURE? When a new row is added to the table:
     - Add the row in the list appropriate to the current list sorting (alpha, numeric, etc.) even if it is not visible
     - Display the notification bar component at the bottom of the screen with success styling to indicate the row was added (message text TBD and notification bar pending)
- FOR DEV CONSIDERATION The collapsed column area should be built in such a way as to allow for a generic container to hold sub-components other than just regular collapsed table columns. This already exists in the system, so we don’t want to lose it.
####Cells
- Left-aligned by default
- Always center columns (Bootstrap class: "text-center") that contain only:
     - Toggle switches
     - Action icons
     - Buttons
- Margin: 0
- Padding: $padding-sm
- No background color
- Top border: 1px solid $color-border-default
- No other borders
- Collapse borders
- Initial cell
     - When applicable, display a plus sign (Bootstrap glyphicon-plus. Default footable is fooicon-plus) 
          - Color: $color-text-link
          - Size: Default font size
          - Margin: 0 $margin-md 0 0
- Cell text
     - Default size
     - Color: $color-text-default
- Collapsed row cells
     - Cells in collapsed rows should left-align with the text of the always-visible initial cell
     - Padding?
###Table Columns
- Column widths should be adjustable to allow for custom widths (percentage or fixed ems)
- Collapsed Detail Columns
     - Collapsed heading columns should automatically adjust to fit the width of the widest column heading label with a max width of 50% to prevent columns that are too large with large gaps between labels and cell data or too small that unnecessarily wrap labels and/or cell data

## Behavior
- If there is a delay when the table is initially loading and when any new page is loaded, always display the standard (existing, for now, enhance to component spinner later) EXi loading spinner component
     - For the best user experience, the table should display  (can be UX enforced, does not need to be programmatic):
          - For desktop
- A max of 7 columns (UX design consideration, not programmatically enforced)
          - For mobile  (UX design consideration, not programmatically enforced)
- A max of 3 columns (and only if the data in those three columns is not lengthy)
          - Lists in blocks
- Columns should not be sortable
- Display a max of 5 rows
- No pagination
- When a row has collapsed columns, selecting the displayed plus icon for that row (not anywhere in the row as FooTable does by default) should expand the row and show all collapsed columns for that row. The plus icon should change to a minus icon on selection. Selecting the minus icon should collapse the row again. 
     - Use the following icons for UI consistency
          - Plus: Bootstrap glyphicon-plus
          - Minus: Bootstrap glyphicon-minus
- The table should allow filtering of the rows when paired with other filtering components
- Sorting
     - Column sorting should be predefined as to which column is initially sorted and how. 
     - Each column can be made either sortable or not sortable
     - Columns that cannot be sorted should have no sort icon
     - For sortable columns
          - Not yet been user selected - Display an up/down arrow icon
          - User selected once – Sort in ascending order with down arrow icon
          - User selected twice – Sort in descending order with up arrow icon
          - User selection thereafter – Toggle between ascending and descending with their corresponding icons
- When no rows are displayed:
     - By default, display the generic text string, "Currently, no items exist."
     - Allow for adding a new text string that is specific to a particular full list instance.

## Responsive Behavior
- The list table columns should adjust themselves to fit within the parent container’s full width as the viewport size changes
- Columns should be able to collapse based on different media query breakpoints for all columns together or individually as needed. The columns do not need to collapse in a sequential order.
- Use a max of 3 columns in mobile layout, two if content is not short and easily wrapped to new lines.

## Defaults
- Headings and cells left-aligned
- Sorted on first column ascending (sort type should be based on data type in the cell, i.e. alphabetical, numeric, etc.)
- Empty list text string of, "Currently, no items exist."
- When any columns are collapsed, include the plus icon to expand/collapse the row.

## Optional Features
- Row styling 
     - Disabled
          - CSS repeating linear gradient (SASS placeholder "%gradient-disabled")
     - Past
          - Background color: $color-success-background
     - Success
          - Background color: $color-success-background
     - Warning
          - Background color: $color-warning-background
     - Danger
          - Background color: $color-danger-background
- Cell alignment
     - Centered
     - Right-aligned
     - When center- or right-aligning is needed, the default BS "text-*" classes are used for consistency across the system
- If there is secondary information that should always be available to the user, the table can have columns that are always collapsed, even in a desktop layout.
- A custom text string can be defined for a list with no items
     - REQUIRED: If this is desired, the custom text must be defined

## Accessibility
- Contrast
- Keyboard
     - The expand/collapse icons should be buttons to allow keyboard tab indexing and easy selection.
- Screen Readers
     - Table Identification
          - There should be an aria-labelledby element in the main table tag that points back to the containing panel’s heading title text or other applicable text on the table page
          - If the table will appear on a page where there will not be descriptive text to describe the table, add descriptive text using a caption tag as the first item within the table (ex. A block where the block title does not adequately describe the table)
     - Column scope
          - Each column should have a scope=”col” tag to indicate that the column heading is for that entire vertical column
     - Sort action tag text
          - The sort icons for each column should have descriptive text for the current sort type applied
          - Initial: “No sort applied”
          - Ascending: “Ascending sort”
          - Descending: “Descending sort”
