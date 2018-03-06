## Description
- Popovers add small overlays of content to an existing display. 
- They house secondary information that supports the primary information in the display. 
- UX Note: Please be mindful of how much content you are displaying in the popover. Popovers are meant for smaller chunks of content. Ask yourself, “Do I have so much content that it would be better served to use a modal for this instead?” 
- This documentation is for a “standard” popover as well as a warning popover and can be built on for other components as needed. This does not cover all instances of popovers but is meant to be a foundation for popover components.

## Styling
### Outer Container
- Size
     - Min-width: 16rem
     - Max-width: 32rem
- Margin
     - Arrow side: 1.2rem ($margin-md)
     - Other sides: 0
- Padding: 0
- Background: $color-branding-background-second
- Border: %border-default

### Directional Arrow
- Width: 1rem
- Color: $color-branding-background-second
- Border color: $color-border-default

### Popover Heading
- Title text: $text-size-lg (Always use H3 heading tag)
- Margin: 0
- Padding: $padding-sm
- Background: None
- Border: None
     - Close button
          - Standard component styling
          - Positioning
               - Top: $positioning-xxs
               - Right: $positioning-xxs

### Popover Body
- Margin: 0
- Padding: $padding-sm
- Text size: $text-md

### Lists
ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

 li {
     margin: 0 0 $margin-sm 0;
     padding: 0;
 }

}

### Warning Popover Styles
popover.alert{ 
           padding: $padding-sm

#### Warning title
 .alert-popover-title {
     color: $color-warning-default;
     font-size: $text-size-lg;
     display: inline-block;
 }

### Warning close same as standard popover
      .mol-close {
          position: absolute;
          top: $positioning-xxs;
          right: $positioning-xxs;
      }

### Warning glyphicon
      .glyphicon-exclamation-sign {
          color: $color-warning-default;
          font-size: $text-size-lg;
          margin-right: $margin-sm;
      }

### Warning body
      .alert-popover-content {
          color: $color-warning-default;
          display: block;
      }            
}



## Behavior
- Popovers should be opened using a button UI element.
- More than one popover may be open at a time.
- Selecting the trigger button should open the popover to the top, bottom, left or right of the button, depending on the optional direction indicated. 
- The popover should be absolutely positioned with the coordinates being determined by JavaScript based on the location of the triggering button and the direction of opening.

### Popover Heading
- Popovers should always have a title for clarity.
- They should use the close button molecule in all cases.

### Popover Body
- Popovers can contain:
     - Text
     - Links
     - Unordered or ordered lists
     - Buttons
- Popovers should NOT contain:
     - Form inputs
     - Excessive content
     - In these cases, use a modal or separate page instead
- Selecting the close button in a popover should immediately close the popover and return cursor focus to the triggering button.
- The popover should remain open until either the triggering button or the internal close button is selected.

## Responsive Behavior
- Popovers should be located and set to open (top, bottom, left, or right) so they do not open outside of viewport boundaries. 

## Defaults
- Popover opens to the bottom.

## Optional Features
- Open top, bottom, left or right.



## Accessibility
### Overall Pattern
- The popover’s role should be a dialog (role=”dialog”)
- Trigger display of the popover using a button UI element.
- The triggering button should have text that indicates that it toggles the popover, not just opens it.
- The rendered popover code should appear directly after its triggering button in the code so that the content is logically ordered and easily accessed. 

### Contrast
- Ensure contrast between background colors and any interior content has sufficient contrast.

### Keyboard
- Users should be able to set focus on the triggering element for the popover.
- Once the popover is displayed, focus should be immediately placed on the popover's close button to allow users to quickly exit the popover if so desired.
- Once the popover is displayed, tabbing flow should be: 
     - Triggering button
     - Popover close button
     - Any focusable elements in the popover body
     - The next focusable element outside the popover

### Screen Reader
- Once the popover is displayed using the triggering button:
     - Use role=”dialog” on container of popover content
     - Read the popover's title
     - Set focus on the popover's close button
- The user should then be able to either tab through the focusable elements in the popover or move through each element individually to have them read. 
- Popover close button
     - Provide screen-reader-only text of, “Close this popover”, with class=”sr-only”.

