## Description
- A button is a clickable/selectable element that allows a user to initiate an action. It can be used within forms or anywhere in a document where interaction is needed. 
- The HTML BUTTON tag should be used by default. The A tag can be used alternatively so long as it has a role of "button" defined and the appropriate classes are applied.
- Buttons (whether they are a BUTTON tag or an A tag) should be used for on-page actions and not for navigation. Use a regular A tag for navigation.

## Styling
- Button text should have only the first word in the string capitalized, i.e. "Button text"
- Use base class of "atom-button"
- Default (class: atom-button)
  - Text: Default size
  - Background: White
  - Border: 1px solid gray
  - Margin: 0
  - Padding: .8rem 1.2rem
  - Transition: .3sec
  - Hover: Darken 5%
- Primary (classes: atom-button atom-button--primary)
  - Background: Blue ($color-primary-default)
  - Border: 1px solid transparent
  - Hover: Darken 15%
- Success (classes: atom-button atom-button--success)
  - Background: Green ($color-success-default)
  - Border: 1px solid transparent
  - Hover: Darken 15%
- Warning (classes: atom-button atom-button--warning)
  - Background: Blue ($color-primary-default)
  - Border: 1px solid transparent
  - Hover: Darken 15%
- Danger (classes: atom-button atom-button--danger)
  - Background: Blue ($color-primary-default)
  - Border: 1px solid transparent
  - Hover: Darken 15%
- Text Only (classes: atom-button atom-button--text)
  - Background: Blue ($color-primary-default)
  - Border: 1px solid transparent
  - Hover: Darken 15%
### Disabled
- For BUTTON tag, apply using "disabled" attribute
- For A tag, apply using "disabled" class
- Default style
  - Text: Lighten 30%
  - Background: 40% opacity
  - Cursor: not-allowed
- All other styles (Primary, success, etc.)
  - Text: Darken 10%
  - Background: 60% opacity
  - Cursor: not-allowed
### Sizing
- XSmall
  - Text: 1.2rem 
  - Padding: .1rem .5rem
- Small
  - Text: 1.2 rem
  - Padding: .5rem 1.2rem
- Large
  - Text: 1.8rem
  - Padding: 1.2rem 1.6rem

## Behavior
- N/A

## Responsive Behavior
- N/A

## Defaults
- Default styling

## Optional Features
- Primary
- Text
- Success
- Warning
- Danger
- Disabled
- Xsmall, Small, Large size

## Accessibility
### General
- Focusable
- Use either:
  - A BUTTON tag
  - An A tag with role="button"

### Color
- For text against background colors, ensure a contrast ratio of at least 4.5:1.
- Disabled buttons have no minimum contrast requirement (Success Criterion 1.4.3 Contrast - Minimum).

### Keyboard
- Focusable using tab only

### Screen Reader
- All text should be read aloud by the screen reader.
- Consider using additional screen-reader-only text (sr-only class) as needed for clarification. 
- If a button contains an item such as a glyphicon that is purely decorative or informationally redundant in nature, it should be hidden from screen readers using aria-hidden="true".
