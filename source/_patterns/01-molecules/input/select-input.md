## Description
* The select input allows selection of one value.  It is used to display short lists of options for selection.
* The select input consists of a text label and an HTML select input tag.

## Styling
* Select input field
	* Border radius: 4px
	* Border: 1px solid #d2d6db
	* Background: white (#ffffff)
	* Box shadow: inset 0 1px 1px rgba(0,0,0,.075)
	* Transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	* On focus
		* Border: 1px solid #66afe9
		* Box shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
	* select input menu
		* Browser-determined

## Behavior
* If the select input field is selected, display a list of predetermined options in the dropdown section.  
* Once focus leaves the field or a selection is made, display that selection in the select input field.

## Responsive Behavior
* N/A

## Defaults
* Default a blank space as the first selection option to allow reset of the select.

## Optional Features
* N/A

## Accessibility
* Always associate a label tag with the select dropdown. The label text should be defined per instance.
* When possible, use optgroup tags to group sections of options in the dropdown for further clarity. Note that the label property in the optgroup tag does NOT replace the main label tag. [More info about select accessibility](http://webaim.org/techniques/forms/controls#select)

## Variables to be Defined
* Label text
* Default option selected
