## Description
* The advanced filter organism is designed to allow a user to quickly filter larger data sets down to a desired smaller set using various filter criteria. 
* The organism contains the following pieces:
	* Advanced filter toggle molecule
	* Filter card title
		* The title should change to display the type of entity being displayed and filtered. For example, if people are being filtered, then the title would display “Person Filter”.
	* Close dialog molecule (close “x”)
	* Advanced filter control bar molecule
	* Any combination of molecular advanced filters
		* Each of these filters should have a text label and checkbox to identify and expand/collapse the filter when selected. 

## Styling
* Filter Card
	* Standard styling set by panel molecule
* Filter Card Title
	* H3 heading, font size of 1.3em, black (#000)
* Individual Filter Components
	* If sub-labels are needed for individual filter fields:
		* Font-weight: $text-weight-default (400)
* Apply Button
	* Primary, XS button, right*aligned

## Behavior
* When the advanced filter toggle is selected, show/hide the advanced filter panel.
* When the number of entities being displayed changes, update the advanced filter toggle to reflect that number, on selection of the apply button. 
* When the advanced filter control bar “Clear all” is selected, clear all filters of any selections.
* When the advanced filter control bar “Reset filters” is selected, reset all filters back to their default states, which may include one or more filters being pre*filled and applied on page load.
* Please visit the individual advanced filter molecules for a more detailed description of how each works. 

## Responsive Behavior
* Desktop
	* At M, L and XL breakpoints, display as a left*aligned, toggled filter card with a width of 3 columns.
* Mobile
	* At S and XS breakpoints, display as a toggled modal.
	* The modal should display the same internal layout as the filter card.

## Defaults
* The panel should be hidden on page load with only the toggle displayed.
* All filters should be empty and unchecked.

## Optional Features
* Panel open on page load.
* Default filters applied on page load.

## Accessibility
* Apply button should have an ARIA label of “Apply changed filters to the list”.
* Other accessibility needs are covered by sub-component accessibility features.

## Variables to be Defined
* N/A
