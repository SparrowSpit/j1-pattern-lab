## Description
- The list key is a popover that displays all the possible states of the items or rows in a collection. An example would be a full list with rows that need to indicate a success or warning state. Another example would be calendar states.
- The list key helps the user to understand the meanings of different styles or colors within a list.
## Styling
### Main Button
- Style: btn-link
- Size: btn-sm
- Margin & Padding: 0 (non-standard)
- Positioning
     - Top: 0
     - Right: 0
### Popover
- Standard popover styling (included in main.css)
     - Add standard box shadow
- Popover Title
     - Always include, can match activating button text
     - Use H4 tag
     - Include standard [Close button component] (http://vmowlallie.jenzabar.net/alliebs3/templates/master-templates/exi-pattern-lab-sass/public/?p=molecules-close)
- Popover Body
     - Always place text elements within a tag (P, UL/LI, etc.)
     - Key States
          - List Items
               - Text Labels
                    - Size: $text-size-md
                    - Color: $color-text-default
               - State Samples
                    - Size: 1.5rem square
                    - Margin between sample and text label: $margin-md
                    - Backgrounds
                         - Successful: $color-success-background
                         - Warning: $color-warning-background
                         - Danger: $color-danger-background
                         - Past: $color-past-background
                         - Inactive: $gradient-inactive
## Behavior
- Selecting the list key button should display a popover that shows the possible states of the displayed list.
- Possible state styles:
     - Successful
     - Warning
     - Danger
     - Past
     - Inactive
- The key should be static and not change what possible states are displayed because they are not currently displayed in the accompanying list. 
- The popover should stay open and not close when the user selects elsewhere on the screen. The popover can be closed by:
     - Selecting the main activation button a second time
     - Selecting the Close button within the popover itself
- The popover should open to the bottom of the main activation button and have a pointer that points to the button.
## Responsive Behavior
- N/A
## Defaults
- Popover closed
## Optional Features
- Ability to define the text of the possible states for a given list (what does success green mean, etc.)
## Accessibility
### General
- The popover should stay open and not close when the user selects elsewhere on the screen. The popover can be closed by:
     - Selecting the main activation button a second time
     - Selecting the Close button within the popover itself
### Keyboard
     - The main activation button should be focusable by using the Tab key and able to be activated by using the Enter or Space keys
### Screen Reader
     - The user should be able to move backward and forward through the discreet items of the popover as needed (title, close button, body list items, etc.)
     - Close button sr-only descriptive text of, "Close this tooltip"
     - State Samples
          - Hide the state samples using aria-hidden="true"
          - Add additional descriptive sr-only text to the state text labels to help users understand the row state colors and communicate them to others
               - Example: "Success[ - Light green background]"
