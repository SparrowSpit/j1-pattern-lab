## Description
* Accordions are a list of headers that can be clicked to hide or reveal additional content.
* Use an accordion when information needs to be displayed in a small space.
* Tabs with related content should be grouped adjacent to each other.
* Accordion headers provide clear and concise explanations of the content within. Accordion headers should be short and succinct and adequately describe the content.
* Multiple accordion panels may be selected and open at the same time.
* Accordion components are contained within a block.
* _UX Note:_ Less content is not always good. More content is not always good. Like a certain fairy-tale character, we’ve got to get it just right.
* _Don’t:_ 
	* If visitors need to see most or all of the information on a page. Use well-formatted text instead.
	* If there is not enough content to warrant condensing. Accordions increase cognitive load and interaction cost, as users have to make decisions about what headers to click on.
* Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
* Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)
* Styling is minimal on this component. The main reason for this is to allow UX to design within the accordion as needed. Since this component is contained within a block, and some blocks have background colors while others do not, you may add more color to this as needed. Use this as is, or simply utilize its structure to build off of.  


## Styling
* Labels
	* The active accordion heading 
		* Background: #eeeeee
		* color: #2f70a9, $color-text-link
	* The non-active tab
		* Color #666666
		* Background: #ffffff
* Accordion panel content (when content is selected and visible)
	* By default, includes an h4 as the title of the opened accordion panel content  
	* Quick flash of animation to bring attention to the user what content is new. The color used is a light blue, #e8f1f9.
* Entire Accordion component container
	* Margin-bottom: 2rem


## Behavior
* The headers of the accordion can be clicked/activated to hide or reveal additional content. 
* By activating the accordion heading, the associated accordion panel will reveal the content within.
* When a header is activated and opened, the heading title color changes from #666666 to #2f70a9. 
* When a header is activated and opened, there is a "flash" of light blue in the background of the section content when it is opened.  
* By default, when an accordion section is closed the associated arrow glyphicon within the header will be pointed down. When the section is opened, the arrow glyphicon is rotated to point up. 
* The content within the section may be paragraphs, links, buttons, a small table, etc. This content container needs to be flexible to contain a variety of elements.  



## Responsive Behavior
* The component will respond to fill the size of its parent.

## Defaults
* At least three accordion sections are used. 
* The accordion is contained within a block.
* Includes an H4 heading
* All accordion panels are closed upon page load
* By default, none of the accordion sections are open but this may be changed as needed. _UX Note:_ It would be preferred that if a section needed to be open on page load that it would be the first accordion section.  Again, this may be changed as needed but think of the accordion on a smaller screen and what content the user will see first.  


## Optional Features
* The first accordion panel may be programmed to initially be open on page load
* One or multiple accordion sections may be opened on page load if needed.  



## Accessibility
* _Expected markup:_
	* Selected accordion headings (span[role=”button”]) has:
		* aria-expanded="true", unopened accordion tabs have aria-expanded="false". 
		* Data-title=”select to hide”
	* All accordion headings have tabindex="0"
	* Each accordion heading has an id whose value corresponds with the div (.tabpanel) below it that has a corellative aria-labelledby attribute.
	* This div (.tabpanel) also has a role=”group” 
* _Expected keyboard interactions:_
	* Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab
	* Tab key, when focus is before the tab list, moves focus to the selected tab
	* If accordion tab panel contains focusable element(s), TAB key on active tab must move focus to first focusable element in tab panel.
	* Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab
* Selected accordion heading must be focusable.
* Accordion heading must be announced, for example "Section One".
* If an accordion section is closed, screenreaders should not read links, buttons, etc. within the section.  

