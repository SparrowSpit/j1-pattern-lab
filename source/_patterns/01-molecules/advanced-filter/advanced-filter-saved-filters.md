## Description
* The saved filter component is an optional part of the advanced filter that allows users to save a specific collection of individual advanced filters for easy usage at a later time. 
* Multiple filters can be saved. 
* One saved filter can be set as the default filtering for the accompanying list. 
* Filters may be renamed or deleted as needed using the "Edit" functionality. 

## Styling
* General
     * Saved filter container
          * Uses a standard Bootstrap panel
          * Panel heading
               * None
          * Panel body (only listed if different from standard panel)
               * Margin
                    * Margin-left: 0
                    * Margin-right: 0
               * Padding
                    * Padding-bottom: 0
               * Background
                    * Color: SASS variable $color-branding-background
     * Inputs
          * Margin: 0 0 $margin-bottom-md 0
          * Padding: 0
     * Buttons
          * "Apply", "Save", and "Save as" buttons:
               * Size: btn-xs
               * Style: Primary
          * "Cancel" button:
               * Size: btn-xs
               * Style: Default
          * "Edit"/"Done editing" button
               * Size: btn-sm
               * Style: btn-link
               * Absolutely positioned
               * Top: SASS variable $positioning-sm
               * Right: SASS variable $positioning-md
* Editing
     * H4 tag with class of "label" to style it as label text
     * Bootstrap table to list the currently saved filters
          * Two columns
               * TH rows
                    * "Saved Filter Name"
                    * "Options"
                    * Hide this row as screen-reader-only (sr-only class)
          * Each TD row should contain two cells:
               * Saved filter name
                    * User-saved filters
                         * Editable fields (x editable) with standard styling (as currently exists, since not yet a Pattern Lab component)
                              * Left-align with the edge of the containing saved filters list table
                              * Right margin of (TBD once component is built)
                    * EXi pre-loaded filters
                         * Read-only text
                              * Default color and size
                         * Left-aligned with the edge of the containing saved filters list table
                    * Indicate which filter is the default filtering for the accompanying list by placing a text tag to the right of the filter name in the first column of:
                         * Text: (default)
                         * Text size: SASS variable $text-size-sm
                         * Color: SASS variable $color-success-default
                         * Margin: SASS variable $margin-left-xs
               * Options for that saved filter
                    * Delete (Do not display for pre-loaded saved filters)
                    * Set as default
* Saving
     * Saved filter panel
          * The save state should display a select input component (mol-select-input) with a label of "Save the Current Filters As..."
          * Beneath the select component, there should be a checkbox component (mol-input checkbox) with a label of, "Set as Default"
          * There should be two buttons beneath the checkbox component:
               * Save
                    * Style: Primary (btn-primary)
                    * Size: btn-xs
               * Cancel
                    * Style: Default (btn-default)
                    * Size: btn-xs
     * Individual filters (beneath the saved filters panel)
          * Disabled attribute and class (disable fieldset tag to disable all fields at once)
     * Individual filter "Save as" and "Apply" buttons
          * Disabled attribute and class

## Behavior
* General
     * A user should be able to save any combination of individual filter criteria
     * The saved filter dropdown should contain all saved filters that either the user has created or that were pre-loaded with EXi
     * Do not allow pre-loaded EXi saved filters to be renamed or deleted
* Saving
     * When the "Save as" button is selected: 
          * Hide the Advanced Filter Control Bar
          * Disable the fieldset for all individual filters below the save panel with their current filter selections
          * Disable the Bottom "Save as" and "Apply" buttons
          * Hide:
               * The saved filters dropdown and accompanying label text 
               * The "Edit" link button
               * The "Apply" button
          * Display:
               * A text input field with a label of, "Save the Current Filters As..."
               * A checkbox with a text label of, "Set as Default"
               * A "Save" button
               * A "Cancel" button
               * Place the cursor focus within the text input field
     * Disable the "Save" button until text is entered in the input field
     * Once the save is either completed or canceled, the individual filters should be reenabled with the same filter criteria they previously had
     * Selecting the "Set as default" checkbox before saving should also make the new saved filter the default filtering for the accompanying list
* Editing
     * When the "Edit" button is selected:
          * Hide:
               * The Advanced Filter Control Bar (display: none;)
               * All individual filters below the save panel (display: none;). 
               * The bottom "Save as" and "Apply" (display: none;)
               * The save panel select dropdown and its text label
               * The save panel "Apply" button
          * Display:
               * An H4 heading:
                    * Text: "Manage Saved Filters"
                    * Style: CSS class of "label" to style as a label
               * A table list of all currently saved filters
               * If there are no saved filters, display text, "Currently, there are no saved filters"
                    * Size: Default
                    * Color: SASS variable $color-text-muted
               * A table list of currently saved filters (described above in styling section)
          * The Advanced Filter panel should scale down accordingly to fit the lesser amount of content
          * Change the "Edit" button text to "Done editing"
     * Renaming a Filter
          * Selecting a saved filter's name should activate the editable field and allow the user to change the name of the filter. The standard x editable "save" and "Cancel" buttons should display left-aligned beneath the input field.
          * When a save name is entered and the "Save" button selected, validate the entered name against existing saved filters to ensure the new name is unique. If it is not, display a warning alert beneath the input field with the text, "Saved filter name must be unique". 
          * Saving the filter name should:
               * Add the new filter to the saved filters list alphabetically
               * Return the user to the "general" saved filter screen and redisplay the individual filters in their previous state
     * Filter Options
          * Selecting the options button for a saved filter should display a standard button dropdown with:
               * Dropdown heading of, "Saved Filter Options"
               * Selections:
                    * Delete
                         * Selecting delete should immediately delete the filter and remove it from the list. [Future enhancement to verify deletion using the global notification bar when ready]
                         * If a saved filter was previously selected and the user deleted that saved filter while editing, clear that saved filter selection but keep the previous individual filter selection states
                    * Set as default
                         * Selecting this option should:
                              * Set the saved filter as the default filter for the accompanying list
                              * Place the success green "(default)" tag to the right of the filter name in the first column
     * Selecting the "Done editing" button at any time should:
          * Return the user to the "general" saved filter screen
          * Redisplay the Advanced Filter Control Bar (SASS placeholder %transition-default to fade in)
          * Redisplay the individual filters in their previous state. Use the default transition (SASS placeholder %transition-default) to both fade in the individual filters and slide them downwards as they appear.
          * Redisplay the bottom "Save as" and "Apply" buttons (SASS placeholder %transition-default to fade in)
          * If there were pending edits when the selection is made, cancel those edits. 
     * After editing, return the user to the full display of the advanced filter panel with the same previous saved filter and individual filter states

## Responsive Behavior
* Edit button
     * In a Medium layout, the Edit/Done editing button should:
          * Move from the top right panel corner to beneath the label/title of the saved filters panel.
          * Have a bottom margin of $margin-sm
* Default indicator
     * In a Medium layout, the "(default)" indicator should move beneath its respective editable field
* In a Small or XSmall layout:
     * Include the save panel as part of the modal that currently displays for the advanced filters
     * Maintain the same basic layout as the desktop panel, scaling the panel to fit the horizontal width of the container
     * Do not display the save panel's apply button, but use the main one at the bottom of the modal also used for individual filters

## Defaults
* Nothing selected in the saved filters select dropdown

## Optional Features
* On initial load and when the "Reset to default" button is selected:
     * Choose a default saved filter on load
     * Load the entire accompanying list unfiltered

## Accessibility
* Color
     * Uses standard EXi color theme
* Keyboard
     * Ensure logical flow through text and controls
* Screen Reader
     * General
          * For the main select dropdown, add an ARIA label of "Choose a saved filter for the accompanying list. Please select the apply button after selecting." 
          * "Apply" button
               * Add sr-only text of " the currently selected saved filter"
     * Saving
          * Just after the text input field label, place a span tag with screen-reader-only text (sr-only class) of, "Enter a name for the new saved filter and then select the Save button. Select the Cancel button to cancel saving."
          * "Set as Default" checkbox
               * Add sr-only text of, " filtering for the accompanying list"
          * "Save" button
               * Add sr-only text of, " as a new saved filter"
          * "Cancel" button
               * Add sr-only text of, " this filter save"
     * Editing
          * Place a span tag with screen-reader-only text (sr-only class) of, "The following is a list of saved filters for the accompanying list. You can rename or delete any saved filters you have created. You can also set any saved filter as the default filtering for the accompanying list."
          * Place an ARIA label just after the name of all pre-loaded saved filters with the text, "Standard EXi filter. Cannot rename or delete".
          * Place scope="col" tags in the two TH cells of the saved filters table
          * The TH heading row should be sr-only
          * "Edit" button
               * Add sr-only text after the button text of " the list of currently saved filters" (Note the space before the text)
          * "(default)" filter tag
               * Add sr-only text of, " filter for the accompanying list"
