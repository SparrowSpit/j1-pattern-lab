## Description
- The advanced filter toggle opens and closes a set of filter criteria that can be applied to a data set.  It helps users get access to relevant filters, as they need them, but allows them to also utilize the full screen real estate available to view the data set returned.  It also gives the user a count of the records they are viewing and the number of filters applied.

## Styling
- The filter toggle should consist of the glyphicon-filter bootstrap glyphicon and text, displayed together as a link.  It should also include muted text.

## Behavior
- The text in the link should either display “No filters applied” or display a count of the number of filters that have been applied. [format for number count text?]
- The muted text under the link text should display [# of entity type results] + [the entity type name (locations, GL accounts, events, as examples)]
- When the link is selected it should open or close the advanced filter

## Responsive Behavior
- When the link is selected in medium (>= 992 px) or large (>=1200 px) viewports then slide the filter criteria in from it’s off canvas location to the left of the viewport.
- When the link is selected in the small (>=768 px) or extra small (< 768 px) viewports then open the filter criteria in a modal.

## Defaults
- The filter toggle should be able to load a set of default filters when the page is first loaded.

## Optional Features
- N/A

## Accessibility
- Advanced filter toggle should have an aria label of, “Click to toggle filter display”. This should NOT be changed. 

## Variables to be Defined
- Entity type name