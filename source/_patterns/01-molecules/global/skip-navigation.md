## Description
- The Skip Navigation component is a selectable navigation menu at the top of the page which allows users, typically those using assistive technologies such as screen readers, to skip over the repeated main navigation elements of a page and jump straight to the beginning of the main content. They may also choose to jump to a specific section within the page from a set of page outline links. 
- It should be the first content item on every page.
- The page sections are defined from H1 headings down to H3. 
- The page sections are dynamically generated on page load by a JavaScript that reads the section headings in the page content. 

## Styling 
- Main Button
  - Default style button
  - Hidden off-screen until it receives focus
  - Slide into view from the top edge of the screen using a .5 second transition 
  - Have text of, "Skip to…" 
  - Have a dropdown menu when selected
- Dropdown Menu
  - Absolutely positioned in the top left corner of the viewport
  - Standard button dropdown menu styling for the background, border and padding
  - Overall fixed width of 25rem
  - Menu text should be truncated with an ellipsis after it reaches the width of the dropdown menu
  - Section Headings
    - Bold (font weight 700)
    - Text size of 1.6rem
    - Default dark text color
  - Dropdown Selection Items
    - Default text size
    - Default text color
    - Styling should be applied at the A tag level

## Behavior
- The tab key should reveal the "Skip to…" dropdown button by sliding in from the top edge of the screen.
- Selecting the button with either the mouse or keyboard should slide the button back offscreen at the top page edge and display a dropdown menu with two sections:
  - Skip To
    - Contains link to Main Content
  - Page Outline
    - Contains in-page anchor links to main content sections of the page based on H1 - H3 headings
    - The links should show the heading level on the left in the format, "h1:"

## Responsive Behavior
- N/A

## Defaults
- N/A

## Optional Features
- N/A

## Accessibility
### Keyboard
- Main button should be tabbable and selectable
- Standard keyboard controls for accessing and navigating a dropdown menu widget
  - Tab focuses the button control
  - Enter/Spacebar selects the button control, opens the dropdown menu and places focus on the first link, "Main Content"
  - Esc closes the dropdown menu and places focus back on the button control
  - Up/down arrow moves the selection from one link to the next while the dropdown menu is open

### Contrast
- Standard contrast ratio for buttons and links

### Screen Reader
- Button Control
  - Read the button text when it receives focus
  - Announce the open or closed state of the dropdown menu using aria-expanded=true/false when the button is selected
  - Use aria-haspopup="true" to identify menu functionality
- Dropdown Menu
  - Include aria-label text of, "Skip To and Page Outline"
  - List Section Labels
    - Use LI tags with a role of, "separator"
  - List Links
    - Use LI tags with a role of, "presentation"
