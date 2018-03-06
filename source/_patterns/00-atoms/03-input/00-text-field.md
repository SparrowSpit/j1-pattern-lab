## Description
- The INPUT tag specifies an input field where the user can enter data. INPUT elements can be used with or without a FORM element to declare input controls that allow users to input data.

## Styling
- The “form-control” class should be used to style this field.

## Behavior
- Clicking within the field should place focus in the field and allow user text input.
- If there is placeholder text in the field as a hint, it should be removed upon entry of the first character. 

## Responsive Behavior
- The field should scale horizontally to fit its parent container.

## Defaults
- No data text pre-filled
- Placeholder hint text as appropriate [always?]

## Optional Features
- N/A

## Accessibility
- CAUTION! To use a text input field, it MUST have an accompanying identifier tag. The default should be a text label that points to the input field's ID. Alternatively, an aria-label may be used within the input tag itself if using a visible text label is not possible or advisable in a given context. There are text input molecules available that already include one or the other. More info on accessible text inputs
- **Variables**
  - id=
  - name=
  - aria-label= (if accompanying label tag is not used)

## X-Tag Variables
- TBD

