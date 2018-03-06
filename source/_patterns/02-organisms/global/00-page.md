## Description
* The page organism is the underlying framework for all pages in EXi.
* The main sections are: 
    * Skip Navigation 
    * The global header area
    * The page header area
    * The banner/alert area
    * The main page body and/or blocks area
    * The page footer area

## Styling
* N/A

## Behavior
* When using the page body organism within the page structure, there is no need to use a div within the row tag to define a column. 
* When using blocks or more than one panel container, use DIV tags with "col-" classes to define the column structure.  

## Responsive Behavior
* The margins of the MAIN section should be: 
  * Above 1200px: 0 auto 
  * Above 992px: 0 2.4rem 
  * Below 992px: 0 .8rem 
* When defining more than one column, ensure the columns collapse to a single column below 768px. 

## Defaults
* N/A

## Optional Features
* N/A

## Accessibility
* Skip Navigation
    * Uses the Skipto plugin to dynamically build an outline of all main page sections using landmarks and section headings
* Landmarks
    * Global Header
        * HEADER tag as outer container
            * HEADER tag automatically gives the role of "banner"
            * Aria-label="Global Navigation, Search and User Settings"
        * The global header should use the H1 heading
        * The global NAV, global search and user settings sections should go within this header tag
    * Page Header
        * SECTION tag as outer container
            * Role="region"
            * Aria-label="Page-Level Header and Navigation"
            * Also contains:
                * HEADER tag that contains
                    * H2 page title
                    * Glyphicon or image
                    * Any secondary information
                    * Page-level NAV options dropdown
                    * Page-specific actions button group (bookmark/pin/message/task)
    * Banner/Alert Section
        * Role="region"
        * Aria-label="Banners and Alerts"
        * Contains any banners or alerts to be displayed on the page.
    * MAIN
        * Contains all main content, including both full page body layouts and individual blocks, such as for a hub page.
        * Serves as the main landing link for the skip navigation link
        * Heading should start at the H3 level to semantically follow the H1 and H2 headings in the global and page header sections.
        * Aria-label="Main Content"
    * FOOTER
        * The common global EXi footer
