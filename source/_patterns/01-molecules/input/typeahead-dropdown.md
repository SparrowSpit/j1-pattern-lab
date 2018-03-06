## Description
- The typeahead dropdown allows selection of one or more values from a database source. 
- The main defining characteristic of this dropdown versus the multi-select dropdown is that the typeahead dropdown does not return any results until the user has entered a predefined number of characters (3). This allows the typeahead to handle very large data sets by immediately filtering on the entered characters. This does, however, mean that a user must have some existing knowledge of what they are searching for in order for the typeahead to be useful.
- This component should use the "token input" third-party plugin for its core functionality. 
- The _multi-row option_ allows for additional information to help further distinguish between similar entities quickly and effectively. A single entity is contained by a line of black text as wee as a line of muted gray text. 

## Styling
- Input Field
  - The styling of the initial typeahead input field should match that of the text input field molecule. 
- _Multi-row option_
	- First line of item:
		- Color-text-default; $mineshaft-gray #333
		- Text-size-md
		- Text-weight-default
	- Second line of item
		- Color-text-muted; $boulder-gray #767676
		- Text-size-md
		- Text-weighted-default


## Behavior
- The control should not display any dropdown section until the user enters at least 3 characters. This helps limit the number of results that need to be returned to the user and improves performance on large data sets. 
- Once at least 3 characters are entered in the input field, the dropdown section should display with the following:
  - Up to 10 results.
  - Up to three columns to provide additional information for user accuracy, with 1em  of space between each column. 
  - The ability to indicate either active or inactive results by using text-muted gray.
- If a row of the dropdown section is selected, add that selection as a chip within the input field of the dropdown.
- _Multi-row option_
	- Input uses type ahead and allows users to enter info from either the first or second line.
	- If the text of the first line or second line are wider than the max width, wrap the text to an additional line. 
	- Depending on PM/UX user story requirements allow for all text to display or allow for the use of ellipsis.
	- The input chip will only include the first line of text information.


## Responsive Behavior
- The dropdown portion of the control should automatically size to fit the content within it. It should expand as needed up to a maximum width of 400px.
- _Multi-row_ option
	- The black text and muted grey text will always remain on separate lines. 

## Defaults
- N/A

## Optional Features
- Single selection allowed vs multiple
- Single row and Multi-row

## Accessibility
- Currently does not return any errors, but needs more research to ensure it is handled well by keyboard and screen readers.
- Ensure that there is always either the default text label or an alternate aria-labelled within the input field that refers to the ID of a descriptor for that field elsewhere on the page. 
- If a field is required, include ending sr-only text of, “Required input” in the input’s Label tag. 
- The unordered list that contains the typeahead’s results should include role=”tree”. Also, when the results are visible, it should contain aria-expanded: true (and false when the results are not visible).
- The list items within the results should have role=”treeitem”. 


## Default selection(s)
- Nothing selected