## Developer Notes
- Get a non-context copy of only the title dropdown code at [title-dropdown-core](http://vmowlallie.jenzabar.net/alliebs3/templates/master-templates/exi-pattern-lab-sass/public/?p=molecules-title-dropdown-core)

## Description
- The title dropdown component (formerly the table title dropdown) is a dropdown button [link] that is styled to fit within the heading of a page body or block.
- The component’s purpose is to allow for switching between views of data within the page of block containing the title dropdown. An example would be showing different data columns within a full list for the same set of items.

## Styling
- The page or block heading in which the title dropdown sits does not have any changes.
- Button
     - Button Group (outer container)
          - Display: Block
          - Margin: $margin-sm 0 $margin-sm $margin-md
          - Padding: 0
          - Line-height: 1

     - Buttons (inside button dropdown)
          - Text
               - Color: $color-text-light
               - Size: $text-size-lg
          - Margin: 0
          - Padding: $padding-sm $padding-md
          - Hover/Focus/Active
               - Transition: %transition-default
               - Color: $color-text-dark
     - Dropdown section (No changes from standard button dropdown)
          - Standard section heading and link/button options

## Behavior
- Functionality should be the same as a standard button dropdown.
- Clicking the page block “title” should display the component’s dropdown section.
- Selecting an option from the dropdown section should change the data view within the accompanying page or block.

## Responsive Behavior
- N/A

## Defaults
- N/A

## Optional Features
- N/A

## Accessibility
- The dropdown should inherit its accessibility from the standard button dropdown component with the following additions.
- Contrast
     - The button title text should have sufficient contrast from the page or block title heading background behind it.