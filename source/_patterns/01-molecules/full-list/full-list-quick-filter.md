## Description
- The Full List Quick Filter allows a user to quickly utilize pre-defined filters within a full list to narrow down results.
- The Quick Filter is used when some filtering is needed, but the Advanced Filter is overkill. 
- Multiple filters can be applied at once or one at a time.
- If more than 5 filters are needed, use the advanced filter instead.
- Filters can be applied as defaults or based on where the user is navigating from as needed. 

## Styling
- Use the styling that is defined by the shared sub-component, the [Multi-select Dropdown] (http://vmowlallie.jenzabar.net/alliebs3/templates/master-templates/exi-pattern-lab-sass/public/?p=molecules-multiselect-dropdown).
- Text label of, "Quick Filters".
- Add an indicator of the number of results that a given filter will yield by using the format, " (XX)" to the right of a quick filter name where XX is the number of results. 
- The component should be located in the top left corner of the Full List Control Bar area, just above the [Viewing Indicator] (http://vmowlallie.jenzabar.net/alliebs3/templates/master-templates/exi-pattern-lab-sass/public/?p=molecules-full-list-viewing-indicator). If there is also a Keyword Filter, it should stack below that component.
- At Medium width and above (> 768px), the filter should have a max width of 50%.

## Behavior
- Standard Multi-select Dropdown behavior for selecting an option within the dropdown.
- When a quick filter is selected, immediately refresh the full list and display only those filtered results.
- When a quick filter is deselected, immediately refresh the full list and display updated results without that filtering.
- Immediately update the Viewing Indicator to show the updated results total within the full list when filtering and unfiltering.

## Responsive Behavior
- At Small width and below (< 768px), the filter should have a width of 100%.
- Standard Multi-select Dropdown [link] behavior.

## Defaults
- No filters selected 

## Optional Features
- Allow default filter(s) to be applied on page load.
- Allow filters to be applied contextually depending on where the user is coming to the page from. 

## Accessibility
- Use Multi-select Dropdown component accessibility
- Ensure a text label is used to apply focus to the input field.
Ensure keyboard and screen reader flow from previous component and into the following Viewing Indicator