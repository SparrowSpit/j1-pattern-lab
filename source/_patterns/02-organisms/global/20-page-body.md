## Description
* The page body organism is the main panel on a page that contains the bulk of that page's content. 
* It is used as a content wrapper for other components such as full lists, wizards, etc. 
* There are three sections that make up the page body: 
  * Header 
  * Body
  * Footer (optional)
* This organism contains the following component molecules by default. Other components may be added for specific use cases.
  * Help Button (mol-help-button)
    * Placing the help button within the heading section allows for consistent location of the icon regardless of what other components or content are placed beside it.
* Only use one page body per page. If multiple content sections are needed, use the block organism instead.

## Styling
* Must always include a panel heading and panel body
* Panel footer is optional
* Inner objects should have no top margin/padding. Bottom margin/padding should be used to create space between inner components.
* The component should always be contained within the MAIN tag of the page.
* All parts of the component (heading, body, footer) are relatively positioned to allow for absolute positioning of elements within them.
* Place each new logical section within the body in its own ROW tag.
* Outer Container
  * Margin: 0 0 $margin-xl 0
  * Padding: 0 (padding is provided by the inner heading/body/footer sub-parts)
  * Background: None
* Heading
  * Default Style
     * Margin: 0
     * Padding: $padding-md 4rem 0 $padding-lg
     * Title Text
       * H3 Heading
         * Color: $color-text-dark
         * Size: $text-size-xxl
    * Background: $color-default-default
    * Border: %border-default
    * Help Button 
      * Position: Absolute
      * Top: 0
      * Right: 0
  * Filled Style
    * Margin: 0
    * Padding: $padding-sm 4rem $padding-sm $padding-lg
    * Title Text
      * H3 Heading
        * Color: $color-text-light
        * Size: $text-size-xxl
    * Background: $color-branding-header
    * Border: None
    * Help Button 
      * Position: Absolute
      * Top: 0
      * Right: 0
      * Color: $color-text-light
  * Outside Heading Style 
    * Margin: 0
    * Padding: 0 4rem $padding-md 0
    * Title Text
      * H3 Heading
        * Color: $color-text-dark
        * Size: $text-size-xxl
    * Background: None
    * Border: None
    * Help Button 
      * Position: Absolute
      * Top: $positioning-neg-xs
      * Right: $positioning-neg-md
* Body
  * Margin: 0
  * Padding: $padding-lg $padding-lg 0 $padding-lg
  * Background: $color-default-default
  * Border Radius: 0 0 $border-radius-default $border-radius-default
  * Border: #border-default
  * Available Section Headings
    * Always use H3 for page body heading title
    * For body section, use H4, H5, and H6
  * Section text
    * Use P tag, do not place text within body without a surrounding tag
    * Color: $color-text-dark
    * Size: $text-size-md
    * Margin: 0 0 $margin-md 0
    * Padding: 0
* Footer
  * Margin: $margin-neg-xxs 0 0 0
  * Padding: 0 $padding-lg $padding-lg $padding-lg
  * Text-align: Right
  * Background: $color-default-default
  * Border: $border-default on right, bottom and left. No border on top.
  * Box Shadow: None

## Behavior
* N/A 

## Responsive Behavior
* Liquid scaling within the viewport
* If using two columns, stack the columns below 992px

## Defaults
* Default styling (described above)

## Optional Features
* Filled heading (described above)
* Outer heading (described above)
* Footer
* Multiple columns (current pattern is two) 
* Unique ID in the page heading (to be used by other components using aria-describedby)

## Accessibility
* Contrast
  * Heading
    * Ensure the heading text has sufficient contrast against the background
* Keyboard
  * Users should be able to logically move through the main page component and any sub-components using only the keyboard.
  * Selectable items should receive tab focus
* Screen Reader
  * Individual items should be navigable by screen readers. There should be no text or inputs that cannot be accessed and read aloud by a screen reader. 
  * The main page body component and all sub-components should flow logically for the user.
  * Sections within the organism should start with an H3 heading, to semantically follow the H1 and H2 headings of the Global header and page header sections.
  * Ensure optional availability of an ID in the page heading so it can be referred to as needed by other components using aria-describedby.
