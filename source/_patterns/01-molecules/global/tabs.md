## Description
* Tabs are an easy way to organize content by grouping similar information on the same page. This allows content to be viewed in a single container without having to navigate away from that page. 
* They’re like tabbed dividers in a filing cabinet—by clicking a tab, users can easily locate a view of related content. Tabs should be used for alternating between views within the same context, not to navigate to different areas.
* Tabs with related content should be grouped adjacent to each other.
* Tab labels provide clear and concise explanations of the content within. 
	* Tab labels should be short and succinct and adequately describe the content.
	* Keep in mind that at mobile widths, the character length of a title will impact the experience.

* The preference is that a maximum of six tabs may be displayed. This is to maintain an uncluttered UI and reduce cognitive load for users. If an instance necessitates more tabs than this, it is allowed, but the preferred max is six tabs. 
* There can only be one selected tab at a time.
* Tab components are contained within a block.

* **Don’t:** 
 * use tabs when it’s more meaningful for the user to see related content grouped together. Use tabs only when users don't need to see content from multiple tabs simultaneously. If people do need to compare the info behind different tabs, then having to switch back and forth puts an added burden on their short-term memory, increases cognitive load and interaction cost, and lowers usability compared to a design that puts everything on one big page.
 * nest tabs


## Styling
* No background color is given to the tabs here in Pattern Lab. This is due to the fact that our blocks within EXi range in color. The UX Designer may add background color as needed. This is to be seen as a starting point to create the tabs you need.  
* Labels
	* max-width of 180px
	* margin-right: 0.75rem
	* entire tab list should have border-bottom: 2px solid #ddd  on 768px and above

	* The active tab 
 		* Background: #eeeeee
 		* color: #2f70a9
 	* border underneath (via pseudo element), height: 2px, #2f70a9


	* The non-active tab
  		* Color #666666
  		* Background: #ffffff
* Tab Content (main content selected and visible)
	* Should include an h4 as the title of the tab panel
* Container
	* width: 95%;


## Behavior
* 768px and above:
	* Clicking the label of tab will switch the view to that corresponding tab’s content. 
* 768px and below:
	* Clicking/tapping the accordion panel heading/title will open the associated accordion panel to reveal the content below it. Only one panel may be open at a time. 
* By default, (on mobile) when an accordion section is closed the associated arrow glyphicon within the header will be pointed down. When the section is opened, the glyphicon is rotated to point up. 
* On page load, it is optional for the developer to only load the first tab's content. Then when a user clicks on a tab that is not visible on page load, the content of the clicked/non-visible tabs may be loaded dynamically (rather than loading all the tabs' content at one time). Essentially, the developer may program the non-visible tabs to "lazy-load" or load as needed when a user clicks on a tab.
* When a header is activated and opened, the heading title color changes from #666666 to #2f70a9.  
* When a header is activated and opened, there is a "flash" of light blue in the background of the section content when it is opened. 
* The content within the tabs may be paragraphs, links, buttons, a small table, etc. This content container needs to be flexible to contain a variety of elements.   


## Responsive Behavior
* 768px and below the content will be displayed in an accordion-style layout. Above that breakpoint the content will be in a tabbed layout.
* The width of the tab container is set to 95% but does not have a max-width and will remain fluid to reach the width of the containing block. This may be set by the designer and dev if the need requires it. 
* Labels will stack on top of each other if need be to accommodate 


## Defaults
* Six or less tabs are used (see above in the description). 
* No icons are used in the tab labels to save space. 
* Is contained within a block.
* The first tab should be shown on page load


## Optional Features
* More than six tabs may be used (see above in the description).
* Labels will stack on top of each other if need be to accommodate.
* Another tab other than the first tab may be shown on page load


## Accessibility

* **Tabbed UIs** have three parts with specific ARIA role requirements:
	* The tab list, which should have role="tablist"
	* The tabs in that list, which should each be an a role="tab" anchor wrapped in a li role="presentation" list item
	* The tab panels, which display each tab’s content and should each have role="tabpanel"
* **Expected markup:**
	* Selected tab’s anchor has aria-selected="true", all other tabs’ anchors have aria-selected="false"
	* Selected tab’s anchor has tabindex="0", all other tabs have tabindex="-1"
	* Each tab’s anchor has an aria-controls attribute whose value is the id of the associated div role="tabpanel"
	* Each tab panel has an aria-labelledby attribute whose value is the id of its associated a role="tab"
* **Expected keyboard interactions:**
	* Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab
	* Tab key, when focus is before the tab list, moves focus to the selected tab
	* If tab panel contains focusable element(s), TAB key on active tab must move focus to first focusable element in tab panel.
	* Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab
* Use TAB key to enter & exit tablist. Use ARROW keys to change tab selection.
* Selected tab **must** be focusable.
* When focus is on selected tab, RIGHT/LEFT ARROW changes selected tab to next/previous tab in tab list and focus moves to that tab.
* Tab label **must** be announced, for example "Section One".


