## Description
- Use the Create Button whenever the user will be creating a brand new element within the system, such as an entity.
- Do not use the create button to simply add something to a list of existing items.  

## Styling
- The button text should follow the format, "Create [text]", where [text] is a very short descriptor of the type of element being created.
- A filled circle with a knock-out plus sign (glyphicon-plus-sign) as the first element in the button text area.
- Place a single character space between the plus sign icon and button text.
- Use Success button styling (atom-button atom-button--success mol-create-button)

## Behavior
- When selected, the system navigates to a new page or modal where a new element can be created.

## Responsive Behavior
- N/A

## Defaults
- Success button styling

## Optional Features
- N/A

## Accessibility
- Follow all guidelines for the base [button atom] (http://www.google.com)
- Hide the plus sign glyphicon using aria-hidden="true"
