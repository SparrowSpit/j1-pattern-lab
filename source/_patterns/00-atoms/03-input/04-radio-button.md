## Description
- Use radio buttons when you want a user to select a single option from a list of visible options.
- Includes a concise, descriptive label so that users clearly know the purpose of the radio button(s).
- Try to avoid a large number of items—use a select input instead if this is the case. 
- Radio buttons should always be used with an associated label.
- Radio buttons should be part of a list that include at least two or more choices (utilizing a radio button for a  single choice may not be proper).
- Radio button groups should always be grouped using a fieldset



## Styling


	label {
		margin-bottom: 0.5rem;
	}

	[type="radio"]:checked,
	[type="radio"]:not(:checked) {
		// move original radio buttons off screen
	    position: absolute;
	    left: -9999px;
	    opacity: 0;
	}


	[type="radio"]:checked + label,
	[type="radio"]:not(:checked) + label
	{
	    position: relative;
	    padding-left: 28px;
	    cursor: pointer;
	    line-height: 20px;
	    display: inline-block;
	    color: #666;
	}

	[type="radio"]:checked + label:before,
	[type="radio"]:not(:checked) + label:before {
	    content: '';
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 18px;
	    height: 18px;
	    border: 3px solid #444444;
	    border-radius: 100%;
	    background: #fff;
	}

	[type="radio"]:checked + label:after,
	[type="radio"]:not(:checked) + label:after {
	    content: '';
	    width: 12px;
	    height: 12px;
	    background: #3FA4EF;
	    position: absolute;
	    top: 3px;
	    left: 3px;
	    border-radius: 100%;
	    -webkit-transition: all 0.2s ease;
	    transition: all 0.2s ease;
	}

	[type="radio"]:not(:checked) + label:after {
	    opacity: 0;
	    -webkit-transform: scale(0);
	    transform: scale(0);
	}

	[type="radio"]:checked + label:after {
	    opacity: 1;
	    -webkit-transform: scale(1);
	    transform: scale(1);
	}

	// DISABLED STATE
	[type="radio"]:not(:checked)+label.disabled:before {
		background: #D3D3D3;
		border: 3px solid #BCBDBF;
	}

	// RADIO GROUP 
	legend {
		font-weight: bold;
	}


## Behavior
- Users should be able to select the Radio Button by clicking on the input directly or by clicking on its label.


## Responsive Behavior
- n/a


## Defaults
- The label should appear inline with the radio button
- The default label has a font-weight of bold.



## Optional Features
- If necessary the label may appear above or beside the radio button
- May be set to disabled (add “disabled” attribute to the input and label element; add “disabled” class to label)




## Accessibility
- The user should be able to navigate to a radio button list and the radio buttons may be selected by the arrow keys. 
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.
- If hint text is included, it should be part of the label text (while still visually differentiated) to ensure it gets read in context with the label text.



