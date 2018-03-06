## Description
- The pagination component is used to allow quick and easy movement through a long data set that is broken down into pages. Users should be able to easily move from one page to the next and also be able to jump to the beginning or end of a list with minimal effort. 

## Styling
- All buttons except the "Show all/Show 15" button should be regular buttons using the button molecule with the default button style and button "small" size.  
- The separating ellipses and current page indicator should use button classes to be styled consistently with their surrounding buttons but should be ordinary divs since they offer no interaction.  
	- Ellipses  
		- Styled as link buttons  
		- Color: $color-text-muted 
	- Current page indicator 
		- Styled as a primary button

## Behavior
- Prev Page/Next Page buttons 
	- Text "Prev" and "Next" 
	- Selecting the previous button should move to the previous page in the list.  
	- Selecting the next button should move to the next page in the list.  
	- When the previous or next page is selected, the page number in the current page indicator section should be immediately updated to show the current list page.   
	- If the first or last page of the list is being displayed, the corresponding prev/next button should be disabled. 
- First Page Button 
	- Text of "1" 
	- Selecting the first page button should move to the first page of the list. If the list is on the first page, the first page button should be disabled.  
- Last Page Button 
	- Text of "x" where x is the number of the last page in the list 
	- Selecting the last page button should move to the last page of the list. If the list is on the last page, the last page button should be disabled.  
- Current Page Indicator 
	- Indicate the current page by showing the current page number with preceding text of, "Page " (NOTE space after "Page"). 
- Separating Ellipses 
	- Display an ellipsis icon with the following to visually separate the current page area from the first and last page button controls: 
		- Not a button 
		- Icon: (glyphicon-option-horizontal) 
		- Color: $color-text-muted 
		- Vertically centered with surrounding button text 
- Show All/Show 15 Button 
	- Selecting the Show all button should:  
		- Display all rows in the list. (Should we disable this above a certain number of rows?) 
		- Change the Show all button text to "Show 15" 
	- Selecting the Show 15 button should:  
		- Paginate the rows in the list to pages of 15. 
		- Change the Show 15 button text to "Show all"

## Responsive Behavior
- For viewports less than 768px (Bootstrap hidden-xs class): 
	- Hide the "Show all" button

## Defaults
- N/A

## Optional Features
- N/A

## Accessibility
- Contrast 
	- Use standard button and text colors 
- Keyboard 
	- Each button should be accessible using only the keyboard by tabbing  
- Screen Reader 
	- General 
		- Place an ARIA label on the containing div of "List pagination controls" for clear identification of the component's purpose 
	- Separating Ellipses 
		- Use the aria-hidden tag to hide the ellipses from screen readers since they are presentational only. 
	- Current Page Indicator 
		- Add screen-reader-only text of "Current list page – " before the visible indicator text of, "Page x". This gives extra context to screen reader users as to what page they are currently on. 
	- Buttons 
		- Previous Page 
			- Span tag with screen-reader-only text of, "ious list page". This should be read as "Previous list page" instead of just "Prev" and provides the screen reader user with additional context. 
		- First Page Button 
			- Span tag with screen-reader-only text of, "First page - List page " (NOTE space after "page"). This should be read as "First page - List page 1" instead of just "1" and provides the screen reader user with additional context. 
		- Last Page Button 
			- Add a span tag before the button page number text with screen-reader-only text of, "Last page – List page " (NOTE blank space after "page") so a screen reader user will have more context (Read as: "Last page - List page 3" instead of only "3") 
		- Next Page Button 
			- Add a span tag after the button text with screen-reader-only text of " list page" (NOTE blank space before "list") so a screen reader user will have more context (Read as: "Next list page" instead of only "Next")