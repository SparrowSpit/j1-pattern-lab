## Description
* An HTML form that contains interactive controls to submit information. 
* This is meant to be a starting point for UX designers and developers to build their forms from. It is a structure/skeleton and not meant to exhibit every future combination of elements possible. 
* The entire form should be contained within a form element. 
* When users access a form, it can be daunting to be shown a large number of fields that need to be filled out. The threshold for when a form is considered too long depends on the audience and the context. There are various techniques for lessening the impact of long forms (at the discretion of UX). 
_For longer forms:_
	* The focused task pattern shows a multi-step approach that can be used to spread form fields across more than one screen or by using the Tab component. Make sure each screen shows fields that logically belong together and that move users forward through the larger form in a step-by-step manner. This pattern is also good for saving progress through a form along the way. However, it is helpful to make sure users know their status along the way.
	* The form may require being broken up between tabs to help the user not be overwhelmed by seeing so many input fields on page load. A form can reveal more content as users go through the form and uses its fields and controls. This technique can be used when it is not necessary to see all controls unless users have made specific decisions (for example, if they ticked a particular checkbox additional information would be revealed).
* The native form elements of input, textarea, select, input type=”checkbox”, and input type=”radio” may receive disabled, checked and checked/disabled attributes and styling. 
* Vertically stack labels and inputs with the exception of radios, checkboxes and textareas. 
* _Validation errors_ alert the user when the form contains invalid information. 
* _Required field label:_ Mark required fields with a red asterisk. If all fields in the form are mandatory, this isn't necessary.
* _Disabled fields:_ Show disabled fields if users need to know what controls might be available to them.
* Wrap labels and controls in .form-group to add spacing.



## Styling
* See the different form elements, buttons, validation errors, etc. specs for styling.
* The entire form should—ideally—include an h3 (.form-title) to give context to the form’s purpose
* .panel 
	* border: 1px solid $color-branding-background-tertiary
	* border-radius: 4px
* .panel-body has a max-width of 1000px and width of 85%
* Group releated elements within the HTML5 `<section>` tag. These have a class of .form-section applied to them which applies a margin-bottom: 3rem
* Each section should—ideally—include an h4 with a class of form-section--title to introduce the section. (This isn’t necessary, but a good idea.)
* There is a horizontal rule applied to the bottom of each section using the :after pseudo element. 
	* .org-data-entry-form .form-section:after
		* border-bottom: 2px solid $color-branding-background-tertiary 

* Various button options may be used. These Save buttons will be position: fixed on the right side of the form. Currently there styles are: 
	* Position: fixed
	* Top: 50px; 
	* Right: 10%
	* Z-index: 600
* .form-control has a margin-bottom: 1.4rem 


## Behavior
* See the different form elements’ specs for behavior
* Use validation and error messages to indicate when a form or field submission fails or requires additional information to be shown.



## Responsive Behavior
* 


## Defaults
* 


## Optional Features
* 


## Accessibility
* 
