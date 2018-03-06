## Description
- Use the Go To Button to indicate to users that there is a navigable path back to the location they just came from. 
- Default location of the button is the upper left section of the viewport, above the main content area.
- This component is actually a styled A tag link and not a true button. True buttons should be used for on-screen actions and not navigation. 
- This component should NOT have a role of button applied. 

## Styling
- The button text should follow the format, "Go to [text]", where [text] is a very short descriptor of where the user will be taken on selection.
- A right-facing chevron (glyphicon-chevron-right) as the last element in the button text area.
- Place a single character space between the chevron and button text.
- Primary Style
  - Use Primary button styling (atom-button atom-button--primary mol-go-to-button)
- Default Style
  - Use default button styling (atom-button mol-back-to-button)

## Behavior
- On selection, the user should be taken to the indicated new page or area.

## Responsive Behavior
- N/A

## Defaults
- Primary styling

## Optional Features
- Default styling

## Accessibility
- Follow all guidelines for the base [button atom] (http://www.google.com)
- Hide the right-facing chevron glyphicon using aria-hidden="true"
