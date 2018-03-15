## Description
* The advanced filter select input allows selection of one value to filter data sets by.  It is used to display short lists of options for filtering data sets.

## Styling
* The advanced filter select input consists of a checkbox, text label (or accessible equivalent, see accessibility below) and the select dropdown molecule. The styling of each is defined in their respective components.

## Behavior
* If the checkbox is selected, toggle display of the select dropdown molecule.
* The select itself behaves according to the specifications in the select input molecule.

## Responsive Behavior
* The input field should expand horizontally to the width of its parent container.

## Defaults
* Collapsed with an empty filter.

## Optional Features
* Expanded on page load
* Default selected option to be applied on page load.

## Accessibility
* Ensure the checkbox and its text label are associated with one another.
* Always associate a label tag with the select dropdown. Use the sr-only class to hide it from all but screen readers and always use the label text, Make a selection.


## Variables to be Defined
* Expanded on page load
* Default option selected
