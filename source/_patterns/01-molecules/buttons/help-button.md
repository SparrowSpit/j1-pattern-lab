## Description
- Use the Help Button to navigate a user to a help topic that is contextual to the current content section.
- This component is actually a styled A tag link and not a true button. True buttons should be used for on-screen actions and not navigation. 
- This component should NOT have a role of button applied. 

## Styling
- The only visual element should be a filled circle with a knock-out question mark icon (glyphicon-question-sign).
- Use Text Only button styling (atom-button atom-button--text mol-help-button)
- The icon should be standard link blue.
- The icon should be set to 50% opacity and transition to 100% opacity on hover.
- The exact positioning should be determined per use case. 

## Behavior
- When selected, the user should be taken to contextual help.

## Responsive Behavior
- N/A

## Defaults
- Text Only button styling

## Optional Features
- N/A

## Accessibility
- Follow all guidelines for the base [button atom] (http://www.google.com)
- Be sure to include screen-reader-only text (using sr-only class) of, "Help for this section".
