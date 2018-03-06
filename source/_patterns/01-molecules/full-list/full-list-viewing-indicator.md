##Description
- The Full List Viewing Indicator provides quick feedback to a user as to the number of viewable results in a given full list based upon current filtering by the Full List Text Filter and/or Full List Quick Filter components. It also communicates the type of item being displayed.
- Add block use description
- This viewing indicator should only be used when the accompanying full list does not also have an advanced filter. In that case, the advanced filter will indicate total results in the Advanced Filter Toggle component.

##Styling
- Default text size
- Color: $color-text-default
- Left-aligned

##Behavior
- The indicator should be located in the bottom left corner of the Full List Control Bar component area. It should appear below the Full List Keyword Filter and Full List Quick Filter components to give all users (including screen-reader-only users) quick feedback as to the results of their filtering. 
- The indicator’s totals and wording can be updated by both the Full List Text Filter and the Full List Quick Filter components, either individually or in conjunction with one another. 
- The wording and totals should refresh automatically after the user finishes typing their filter. This should not require a full page reload. There should be a half-second delay after typing ends before the list is refreshed.
- Total only text format (staying consistent with advanced filter wording)
     - No filtering: "x total [item type]s displayed"
     - Filtering: "x [item type] results displayed"
- Max 5 text format 
     - "x of y [item type]s displayed" (where x is a max of 5 items and y is the total items in the list)

##Responsive Behavior
- Wrap to a new line as needed

##Defaults
- Total only

##Optional Features
- Page vs block mode to change text formatting

##Accessibility
- Keyboard
- N/A
- Screen Readers
- Text should be selectable by a screen reader
- Provide screen-reader-only text of " in the accompanying list" (NOTE space before "in") to provide extra context to screen reader users

