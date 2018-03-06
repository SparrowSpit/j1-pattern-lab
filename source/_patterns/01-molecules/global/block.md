## Description
- The block molecule is a page container that contains a logical section of that page's content. 
- It is used to hold content that gives users a quick insight into the data they care about by giving either very specific or higher-level data that users care about most.
- There are three sections that make up the block: 
  - Heading 
  - Body
  - Footer (optional)
- This molecule contains the following component molecules by default. Other components may be added for specific use cases.
  - Help Button (mol-help-button)
- Placing the help button within the heading section allows for consistent location of the icon regardless of what other components or content are placed beside it.
- Multiple blocks may be used per page. 
- Blocks may be used within the Page Body organism.

## Styling
* Must always include a block heading and body
* Block footer is optional
* Inner objects should have no top margin/padding. Bottom margin/padding should be used to create space between inner components.
* All parts of the component (heading, body, footer) are relatively positioned to allow for absolute positioning of elements within them.
* The component should always be contained within the MAIN tag of the page.
* Place each new logical section within the block body in its own ROW tag. 
* One or two columns may be used within the block to format content. 
* Outer Container
  * Margin: 0 0 $margin-xl 0
  * Padding: 0 (padding is provided by the inner heading/body/footer sub-parts)
  * Background: None
* Heading
  * Default Style
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
  * Light Style (add to block by adding 'light' class along with the org-block class in the SECTION tag)
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
* Body
  * Margin: 0
  * Padding: $padding-md $padding-lg 0 $padding-lg
  * Background: $color-default-default
  * Border Radius: 0 0 $border-radius-default $border-radius-default
  * Border: #border-default
  * Available Section Headings
    * Always use H3 for block heading title
    * For block body section, use H4, H5, and H6
  * Section text
    * Use P tag, do not place text within body without a surrounding tag
    * Color: $color-text-dark
    * Size: $text-size-md
    * Margin: 0 0 $margin-md 0
    * Padding: 0
  * Inner Columns
    * When using two columns, set the column widths to col-sm-6.
* Footer
  * Margin: $margin-neg-xxs 0 0 0
  * Padding: 0 $padding-lg $padding-lg $padding-lg
  * Text-align: Right
  * Background: $color-default-default
  * Border: $border-default on right, bottom and left. No border on top.
* Box Shadow: None

## Responsive Behavior
* Above 992px
  * Max width of 50%
  * If two blocks in two columns, left block has a right margin of 2.4rem
  * If block has two inner columns, they are set to 50% width
* Above 768px
  * Inner columns stack and become 100% width
* Above 512px
  * Blocks stack and become 100% width
  * Inner columns return to 50% width to take advantage of increased available horizontal viewport area
* Below 512px
  * Inner columns stack and become 100% width

## Defaults
* Filled block header style
* One inner block body column
* No block footer

## Optional Features
* "Light" header style
* Two inner body columns
* Block footer

## Accessibility
* Contrast
  * Heading
    * Ensure the heading text has sufficient contrast against the background
* Keyboard
  * Users should be able to logically move through the main page component and any sub-components using only the keyboard.
  * Selectable items should receive tab focus
* Screen Reader
  * Unique ID in the block heading H3 tag. This will be used by the block's outer section tag aria-labelledby attribute to identify and describe the block's function.
