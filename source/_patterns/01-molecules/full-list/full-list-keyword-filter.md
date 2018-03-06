## Description 
- The full list keyword filter allows users to quickly filter down list results by entering any free text keywords they desire. Each individually or grouped keywords are their own separate selections as entered that can be removed individually while leaving the other keywords in place.  
- The filtering is applied across all columns in the full list table. This filter is used when only simple filtering is needed and the advanced filter would be overkill.  
- This filter can be used in conjunction with the Full List Quick Filter component (not yet developed). 
- This filter uses the Multi-Select Dropdown component using either the keyword-only entry or dropdown option enabled.  

## Styling 
- The styling should remain the same as the source Multi-Select Dropdown component using the keyword option. 
- The filter should be positioned in the top left corner of the full list control bar area. 
- The Full List Viewing Indicator should be directly below the filter. 

## Behavior 
- The behavior of the dropdown itself should remain the same as for the Multi-Select Dropdown component.  
- Once a keyword selection is entered by selecting enter or picking the typed keyword from the dropdown area of the dropdown, the accompanying full list should automatically update with the new filtering criteria applied. 
- The default filter selection behavior should be to connect terms with AND. 

## Responsive Behavior 
- Apply any responsive behavior from the source component. 

## Defaults 
- Initial ghost text of “Filter these [entity type]s” with color $color-text-muted. 
- No selections entered. 

## Optional Features 
- N/A 

## Accessibility 
- General 
	- Include text label above the filter field (update screenshots above) 
	- Use accessibility features from source component. 
- Contrast 
	- Use accessibility features from source component. 
- Keyboard 
	- Ensure screen reader indexing goes from the page-level help icon to this filter, then from the filter to the next logical item in the full list control bar area. 
	- Use accessibility features from source component. 
- Screen Reader 
	- Use screen reader accomodations from the source Multi-select Dropdown component