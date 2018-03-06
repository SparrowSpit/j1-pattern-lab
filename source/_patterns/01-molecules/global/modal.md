## Description
- A modal is a sub-element of a main EXi screen. It creates a mode that disables the main window, but keeps it visible with a modal sub-window as a child in front of the main screen. Users must interact with the modal window before they can return to the parent screen. This avoids interrupting the workflow on the main window.
- Modals are typically used to:
     - Quickly gather information pertinent to the current screen without having to leave the page. 
     - Provide a user with additional information that is relevant in the moment, such as a warning of impending action. This is known as "speedbumping". Care should be taken not to overuse modals as cautions, as this can train users to ignore warnings and just click through them without reading. 
- This generic modal component is also used for:
     - Messages
     - Tasks
     - Personal info cards

## Styling
### Modal Shade (dark covering over main screen content)
- Color: #000 (BS default)
- Opacity: 50% (BS default)
- Positioning: Fixed – 0,0,0,0 (BS default)

### Modal Container
- Max Height: 85vh
     - **Even though the modal will scroll vertically to accommodate longer layouts, designers should strive to prevent overloading a modal with more functionality than its intended use.**
- Min Height: 29.5rem
- Open/Close Transition
     - Fade: .3sec ease-out
     - Translate: 0, -25%
- Positioning: Fixed – 0,0,0,0 (BS default)
- Background Color: $color-default-default (currently white)
- Border: $border-default (currently light gray)
- Border Radius: @mixin border-radius
- Box Shadow: box-shadow: 0 5px 15px rgba(0, 0, 0, .5)
- For consistency of layout, modals should use the default Bootstrap size and not the optional "large" or "small" sizes. 

### Modal Heading
- The modal heading should have the following attributes:
     - H3 heading tag
     - Color: $color-text-default
     - Size: $text-size-lg
     - Font weight: $text-weight-semibold
     - Padding: $padding-md
- Close "X" button
     - Use the standardized component, "mol-close" (in lab, but not officially speced).
     - Positioning: 
          - Absolute
          - Top: $positioning-md
          - Right: $positioning-md
- Come up with standard wording practice for consistency

### Modal Body
- Max Height: 
     - calc(85vh – 11rem) 
       overflow-y: auto;
     - Once max height is reached, the body area should scroll vertically with an automatically added scrollbar.
- Min Height: 18.3rem
- Padding: 
     - Top/bottom = 0
     - Left/Right: $padding-md
- For plain, non-heading text, always use paragraph tags.
- Always stack labels at the top left of form fields (default form field behavior)
- No more than two columns should be used beside one another. In mobile, only a single column should be used. 
- Use standardized PL components to build the modal body elements to maintain layout consistency.
- **Body Layout Guidelines**
     - If a modal uses two columns but they need a single heading to describe them together, use a modal top section to allow the heading to flow across both columns and not be confined to only the first column.
     - If two columns are used and a heading is needed for one column, there should generally be a heading for the second column as well, to maintain alignment across the two columns.
     - When two columns are used, the two columns MUST include the classes of modal-col-1 and modal-col-2, respectively. These allow for responsive padding between the columns and individual styling as needed.
     - **Body Layout Elements**
          - Section Heading
               - H4 tag
               - $text-size-md
               - $text-weight-bold
               - Top margin: $margin-md
          - Section Alerts (help hints, warnings)
               - By default, place as first item in the section following the section heading(s). It should span the entire width of the section.
               - If a help hint, the help icon should appear to the bottom left of the heading text (until the help hint component is developed).
          - Section Subtext
               - Used to give quick additional information or context
               - If used as the first item after the modal title, additional section heading text is not needed. If used in a body sub-section, use along with a section H4 heading
               - H5 tag
               - $text-size-xs
               - $text-weight-normal
               - $color-text-muted
          - Sub-headings
               - H5 and H6 level sub-headings area available as needed
          - Body Text
               - Size: $text-size-md
               - Color: $color-text-default
                    - Change color to match feedback state (see Feedback States below)
               - Emphasis: $text-weight-bold
                    - Example: "You are about to make Frederick Matthews an inactive EXi user."
               - Do not use italic text except to indicate an inactive element
               - When the modal is performing an action on a person, always use personal long name format to allow clear identification of the user.
          - Form Inputs
               - Always stack input fields beneath their labels
               - Alert/validation text for input fields (enhancement to input field molecules themselves so the pattern follows the inputs around?)
               - If the modal includes required form input fields, always place the "* Required" indicator component (not yet developed) as the first item in the modal body
               - Lists
                    - Grouping of items
                         - Use a standard UL or OL list (Ul > LI)
                         - Example:
                              - Frank
                              - Joan
                              - Mark
          - "Don’t show again" checkbox
               - By default, place as the last item in the modal body. If modal content dictates a different location, use designer discretion.
### Modal Footer
- Padding: $padding-md
- Text-alignment: Right
- All action/cancel buttons live here
- Cancel button should always be on the far left of the right button grouping
- Action buttons
     - Should be on the far right. 
     - If there is more than one action that can be taken: 
          - A button dropdown is used for multiple possible actions where the primary action could be a 50/50 split. 
          - A split button dropdown is used if there are multiple actions and one of those actions will be the primary action a majority of the time.
          - Come up with standard wording practice for Action buttons (ex. Do we use "Yes, ..." or keep text as short as possible?)
          - When using a modal to create something, use the "create" button component (success green button with circled plus sign glyphicon) as the action button 
- If there is an action button, always include a Cancel button to its left.
- If a modal is purely informational, provide an "OK" button that dismisses the modal and do not include a cancel button.
### Feedback States
- For feedback states, include a glyphicon on the left before the modal title text with a single space between. The glyph should use the following styling:
     - Size: 2.2rem
     - Color: State text color
- Success
     - Modal heading icon: glyphicon-ok-sign
     - Text: $color-success-default
     - Background: $color-success-background
     - Success action button
- Warning
     - Modal heading icon: glyphicon-exclamation-sign
     - Heading: 
     - Text: $color-warning-default
     - Background: $color-warning-background
     - Warning action button
- Danger
     - Modal heading icon: glyphicon-exclamation-sign
     - Text: $color-danger-default
     - Background: $color-danger-background
     - Danger action button

## Behavior
- Modals should always be launched by a user-initiated button click and not an automated, non-user-initiated event to minimize confusion, especially for screen reader users. 
- On launch, the modal should transition with the following to give the appearance of the modal opening from the center of the page toward the user:
     - Opacity: 0 to 1
     - Translate: 0,0
     - Scale: .5 to 1
- Once a modal reaches its maximum height, the body should auto-scroll to allow for more content.
- Initial focus should be on the modal close button to allow keyboard and screen reader users to quickly close the modal if desired.
- Tab indexing should flow logically from the top left to the bottom right action buttons. 
- The modal should not close when a user clicks outside of the modal (Bootstrap default behavior). It should only close when a user selects a close mechanism or action button within the modal itself. This avoids a user accidentally losing entered information without first acting on it. 
- In-modal Selections:
     - Selecting the close button (X) should immediately close the modal and return focus to the previous location in the main window (the button which launched the modal). 
     - Selecting an action button should close the modal and immediately perform the requested action, either within the same main window or on a new page. 
     - The modal should remain open and allow for user interactions within the modal body without interference. 
     - The modal should remain open until the user explicitly chooses to close it by selecting a control which logically needs to close the modal to perform the selected action. It should not close without warning.

## Responsive Behavior
- When using two columns:
     - Stack the right column beneath the left below 575 pixels (Bootstrap col-sm-6).
     - Remove the extra padding between the two columns added by the modal-col-* classes.
- Below 575 pixels:
     - Expand the modal dialog to 100% of the viewport width and scale accordingly. 
     - Margin: 0 (to tighten the spacing around the modal and give more real estate)
     - There should still be .75rem of spacing around the modal to separate it from the edge of the viewport (defined by the modal

## Defaults
- Single column

## Optional Features
- Predefined column layouts described above

## Accessibility
### Overall Pattern
- Keep related content in close proximity to one another for readability. 
- Left-align things unless truly necessary beyond pure aesthetics.
### Contrast
- Use standard components within the modal to maintain sufficient contrast
### Keyboard
- Tab order should flow logically from the top left to the bottom right action buttons. 
### Screen Reader
- The modal title should be read on initial open.
- Initial focus should be on the modal close button to allow keyboard and screen reader users to quickly close the modal if desired.
-  Reading order should flow logically from the top left to the bottom right action buttons. 
- In-modal selections
     - Selecting an action button should close the modal and immediately perform the requested action, either within the same main window or on a new page. 
     - The modal should remain open and allow for user interactions within the modal body without interference. 
     - The modal should remain open until the user explicitly chooses to close it by selecting a control which logically needs to close the modal to perform the selected action. It should not close without warning.
- Focus management
     - When the modal closes and the user stays on the same page, return focus to the previous location in the main window (the button which launched the modal) unless the action performed means the user logically expects to be placed elsewhere on the page. If placed elsewhere, the new location should be immediately identified 
- Trapping focus in the modal until dismissal (BS modal does NOT currently do this)
When a screen reader user moves past the last readable item in the modal (ANY ITEM, not just the ones focusable with the tab key), they should be returned to the top of the modal with a "Loop to top" message and refocused on the initial modal heading title to start through the modal again. Focus should NOT move outside the modal until the user chooses to do so by intentionally closing the modal. 

