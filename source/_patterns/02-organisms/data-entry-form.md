## Description
* An HTML form that contains interactive controls to submit information. 
* This is meant to be a *starting point* for UX designers and developers to build their forms from. *It is a structure/skeleton* and not meant to exhibit every future combination of elements possible. 
* Sections of the form are divided with the fieldset element and utilize a legend element as the header of each section. 
* The entire form should be contained within a form element. 
* Sections of the form are divided with the fieldset element and utilize a legend element as the header of each section. 
* The native form elements of input, textarea, select, input type=”checkbox”, and input type=”radio” may receive disabled, checked and checked/disabled attributes and styling. 
* Vertically stack labels and inputs with the exception of radios, checkboxes and textareas. 
* _Validation errors_ alert the user when the form contains invalid information. 
* _Required field label:_ Mark required fields with a red asterisk. If all fields in the form are mandatory, this isn't necessary.
* _Disabled fields:_ Show disabled fields if users need to know what controls might be available to them.
* Wrap labels and controls in .form-group to add spacing.
* _UX Note:_ When users access a form, it can be daunting to be shown a large number of fields that need to be filled out. The threshold for when a form is considered too long depends on the audience and the context. There are various techniques for lessening the impact of long forms (at the discretion of UX). 
_For longer forms:_
	* The focused task pattern shows a multi-step approach that can be used to spread form fields across more than one screen or by using the Tab component. Make sure each screen shows fields that logically belong together and that move users forward through the larger form in a step-by-step manner. This pattern is also good for saving progress through a form along the way. However, it is helpful to make sure users know their status along the way.
	* The form may require being broken up between tabs to help the user not be overwhelmed by seeing so many input fields on page load. A form can reveal more content as users go through the form and uses its fields and controls. This technique can be used when it is not necessary to see all controls unless users have made specific decisions (for example, if they ticked a particular checkbox additional information would be revealed).
* The native form elements of input, textarea, select, input type=”checkbox”, and input type=”radio” may receive disabled, checked and checked/disabled attributes and styling. 




## Styling
* See the different form elements, buttons, validation errors, etc. specs for styling.
* The panel can be coded to include one, two, three or four columns within it.  
* The entire form should—ideally—include an h3 (.form-title) to give context to the form’s purpose
* .panel 
	* border: 1px solid $color-branding-background-tertiary
	* border-radius: 4px
* .panel-body has a max-width of 1000px and width of 85%
* Group releated elements within the HTML5 `<section>` tag. These have a class of .form-section applied to them which applies a margin-bottom: 5rem
* Each section should—ideally—include an h4 with a class of form-section--title to introduce the section. (This isn’t necessary, but a good idea.)
* There is a horizontal rule applied to the bottom of each section using the :after pseudo element. 
	* .org-data-entry-form .form-section:after
		* border-bottom: 2px solid $color-branding-background-tertiary 

* Various button options may be used, e.g. Save, Save and Continue, etc. These Save buttons will be position: fixed on the right side of the form. Currently there styles are: 
	* Position: fixed
	* Top: 50px; 
	* Right: 10%
	* Z-index: 600
* .form-control has a margin-bottom: 1.4rem 
* the .form-section--wrapper wrap the interior each section's elements. They have a max-width of 640px.


## Behavior
* See the different form elements’ specs for behavior
* Sections of the form are divided with the fieldset element and utilize a legend element as the header of each section. 
* Wrap labels and controls in .form-group to add spacing. 
* Use validation and error messages to indicate when a form or field submission fails or requires additional information to be shown. A validation message (validation bar) appears below the affected input form group. 
* If there are save buttons or save and continue then those will need to be programmed accordingly. The default is to have a save button but various button options may be uses, e.g. "Save" "Save and Continue" etc as the design dictates. 
* The native form elements of input, textarea, select, input type=”checkbox”, and input type=”radio” may receive disabled, checked and checked/disabled attributes and styling. To do this, add the disabled attribute to the input element and give it a class of disabled. 
* If  a "Save" button is combined with a second action button like "Save and Finish Later", etc that will be contained and fixed to the right of the form, stack the buttons on top of each other (an example of this is done on the Wizard component in Pattern Lab).  




## Responsive Behavior
* See included elements’ specs for their responsive behavior. 
* Ideally, 768px screen width and below the select and text inputs will be at 100% (of container) width. This styling may be adjusted as needed depending on what the design requires. Flexibility is key. 


## Defaults
* Labels: have the styling of font-weight: bold by default 
* Includes a Save button 
* The form may contain 
	* inputs, radio buttons, selects, checkboxes, date pickers, toggle, buttons, validations 
	* Disabled, checked, and checked/disabled fields 
	* Character limits on text inputs and text areas 



## Optional Features
* May contain a “Save and add another” button option or other button options, "Save and continue", "Save and finish later" etc. 
* May contain various combinations of form elements.  



## Accessibility
* The first field should receive focus by default.  
* If the field is invalid and displays an error message, the <input> element should have an aria-describedbyattribute that references the id of the error message. This configuration allows screen readers to read the associated error message when the invalid field is focused. 



