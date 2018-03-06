## Description
- The wizard is a step-by-step process that allows users to input information in a series of forms in a prescribed order and in which subsequent steps may depend on information entered in previous ones.
- Wizards are best for leading users through complex and/or infrequent tasks. 
- One page of the wizard typically corresponds to one step in the process.
- If a use case calls for a user to be able to jump around to later steps without the need to fill out previous ones, consider using a generic form page instead of the wizard. 
- When a wizard is used within a page, do NOT include the Page Header Toolbar component.
- The wizard organism is made up of the following subcomponents:
  - Page Body organism [link]
  - Progress Trail molecule [link]
  - Wizard Action Button molecule [link]
  - Form Input molecules
- Form input validation should be considered on a per-use basis. The logic for individual use cases should NOT be included as part of the basic wizard organism. 

## Styling
- The wizard class, "org-wizard", gets added to the page body organism DIV tag, as the last class in the series.
- The page header for the page on which the wizard sits should not have a page header toolbar
- The wizard inherits the basic styling of the page body using the "Outside" styling, but does make some additions.
- Separated Styling (Optional)
  - The progress trail should be visually separated into its own area to the left of the main content area that holds the form inputs and action buttons.
  - Use when there are other UI elements on the page that also use a separated style, such as a Full List and an Advanced Filter.
- The main content area is split into three columns:
  - Left column - Progress trail 
    - Set width of 25rem in desktop layouts
    - Heading
      - H4 adjusted to font size of 1.6rem for visual hierarchy
    - Progress Trail molecule
      - Use default component styling
  - Center column - Form 
    - Fluid width
    - Default H4 heading size
    - Form inputs inherit molecular styling
    - Two form inputs may be placed side-by-side by wrapping the pair in a div with the class, "org-wizard--sidebyside"
  - Right column - Action button(s)
    - Set width
    - Button size
    - Positioning
    - Block display width
    - Located after all form fields
## Behavior
- Progression through the wizard using the Action button(s)
- Allow revisiting completed steps using linked text in the progress trail.
- Allow for validation of individual or groups of fields either when a field loses focus or when a wizard action button is selected.
- If certain form inputs are conditional on the selections of others, hide the conditional inputs until they are needed.
- If a user returns to a previously completed step and makes changes that affect a subsequent step that has also been completed, display the Alert bar component with a message indicating which step and what inputs were affected.

## Responsive Behavior
- Left column - Progress trail 
  - In layouts of less than 769px, the progress trail should be 100% width within the page body and should stack vertically on top of the form input area.
- Center column - Form input area
  - Any form inputs that are side-by-side in the desktop layout should stack vertically into a single column
- Right column - Action button(s)
  - Docks in lower right corner of viewport
  - If there is more than one action button, the buttons should be combined into a split button button drop-up with the primary action as the displayed button option and any secondary actions collapsed.

## Defaults
- Default, integrated styling

## Optional Features
- Separated styling for use with layout like Full List/Advanced Filter (see description in the Styling section above)
- Placing pairs of inputs side-by-side within the form area
  - Wrap pairs of fields within a div with the class, "org-wizard--sidebyside". 
- Do not allow users to jump to previous steps

## Accessibility
### General
- Landmarks
  - Progress trail is a SECTION tag with a role of "region" (defined by the subcomponent itself)
  - Form area (org-wizard--col-2) has a role of "form"
  - Being a NAV tag, the action button region has a role of "nav"

### Keyboard
- Keyboard order of page sections:
  - Tabbing through the page should focus first on any completed steps in the progress trail. If no steps are completed yet, tabbing should move directly to the first form input in the wizard. 
  - Tabbing should move in visual order through the form inputs from left to right (if set side-by-side), top to bottom.
  - After the last form input is reached, tabbing should move to the first action button in the third wizard column and should progress through multiple buttons from top to bottom. 

### Contrast
- Standard contrast guidelines for included components

### Screen Reader
- The Progress Trail and form input sections each use an aria-labelledby tag that points to their internal H4 tags for context.
- The action button section uses an aria-label of, "Wizard navigation options".
- Use standard additional screen reader text defined by the Progress Trail molecule to indicate step state to users.
- Place screen-reader-only text of "Form inputs for step x of y - " before the form section title.
- The form action button(s) are located after all form fields in the code to facilitate ease of navigation both for keyboard and screen reader users.
