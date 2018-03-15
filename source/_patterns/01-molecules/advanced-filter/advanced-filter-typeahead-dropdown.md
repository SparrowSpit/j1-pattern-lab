## Description
* The Advanced Filter Typeahead Dropdown contains the same basic functionality as the [Typeahead Dropdown]( ?p=molecules-typeahead-dropdown), but is paired with a selection checkbox and text label to allow it to be activated or deactivated to be used within the advanced filter organism. 

* *Multi-row Enhancement* 
	* This enhancement allows for additional information to help further distinguish between similar entities quickly and effectively. A single entity is contained by a line of black text as wee as a line of muted gray text. 

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

* *Multi-row Enhancement* 
	* Dropdown text
		* First line of item:
			* Color-text-default; $mineshaft-gray #333
			* Text-size-md
			* Text-weight-default
		* Second line of item
			* Color-text-muted; $boulder-gray #767676
			* Text-size-md
			* Text-weighted-default


## Behavior
- If the checkbox is selected or deselected, toggle the display of the [Typeahead Dropdown]( ?p=molecules-typeahead-dropdown) molecule. If the checkbox is unchecked, maintain all current selections in the dropdown if reselected.
- When displayed, the behavior of the Typeahead Dropdown should behave as described in its specific documentation.

* *Multi-row Enhancement* 
	* Refer to type-ahead dropdown for behavior
	* Input uses type ahead and allows users to enter info from either the first or second line.
	* If the text of the first line or second line are wider than the max width, wrap the text to an additional line. 
	* Depending on PM/UX user story requirements allow for all text to display or allow for the use of ellipsis.
	* The input chip will only include the first line of text information.


## Responsive Behavior
- The filter input field should scale horizontally to fit within the parent filter panel.

* *Multi-row Enhancement* 
	* The black text and muted grey text will always remain on separate lines. 

## Defaults
- Blank, nothing selected

## Optional Features
- Pre-filled selections
- Default text label or alternate field descriptor elsewhere on the page. 

## Accessibility
- The checkbox should always have an associated label with descriptive text.
- The label for the checkbox should be clickable to allow selection/deselection of the checkbox.

* *Multi-Row Enhancement*
	* Ensure that there is always either the default text label or an alternate aria-labelled within the input field that refers to the ID of a descriptor for that field elsewhere on the page. 
	* If a field is required, include ending sr-only text of, “Required input” in the input’s Label tag. 
	* The unordered list that contains the typeahead’s results should include role=”tree”. Also, when the results are visible, it should contain aria-expanded: true (and false when the results are not visible).
	* The list items within the results should have role=”treeitem”. 

