## Description
- The default structure of a page header while giving high-level info about an entity page.  
- The page header provides navigation to sub-pages from the hub-options button.  

- It also contains the side navigation which allows the user to do various things like send a message, add a task, etc.   
 

- Contains 
	-- Page glyphicon 
	-- Heading tag (h2) 
	-- Hub options button dropdown 
	-- Side nav (message a colleague button, create a task button, etc.) 
	-- Possibly other links, message badges, lists 



## Styling
- The page header will have a fixed position added to it after user has scrolled down 300px from the page top. The fixed positioning will be removed when the user scrolls back up to 300px from the top of the page. In addition to the fixed position being toggled, these changes occur: 
	-- Reduce font-size of page title on scroll down. Increase when scrolling back to 300px from top of page.  
	-- Reduce size of page glyphicon on scroll down . Increase when scrolling back to 300px from top of page. 
	-- By default, interior content (list items, etc.) that may be present will be given class of org-page-header--int-content and will be hidden on scroll down and shown again on scroll up 
	-- hub options button will remain visible 

- Hub options button: see button dropdown spec 
- Use the default styling for side nav 


.exi-transitional { 

// MAIN COMPONENT BEGIN
.org-page-header { 
    background: $white; 
    position: relative; 
    height: 200px; 
    padding: $padding-xxl $padding-lg $padding-xxl 6.5rem;     
    top: 0; 
    left: 0; 
    right: 0; 
    transition: $transition-defualt ease-in-out; 
    -webkit-transform: translate3d(0, 0, 0); 
    transform : translate3d(0, 0, 0); 
    z-index: 1000; 

@media (min-width: 992px) { 
	padding: $padding-xxl $padding-lg $padding-xxl 8.5rem; 
} 

 

// PAGE TITLE = H2 
.mol-page-title { 
    font-size: 2.5rem; 
	line-height: .95; 
    margin: 0 0 $margin-lg 0; 
    transition: $transition-default ease-in-out; 

	@media (min-width: 992px) { 
		font-size: 2.88rem; 
	} 

} 

// PAGE ICON
.mol-page-header-icon { 
    position: absolute; 
    top: $position-lg; 
    left: $position-lg; 
    width: 3.5rem; 
    height: 3.5rem; 
    font-size: 3.5rem; 
    line-height: 1; 
    transition: $transition-default ease-in-out; 

@media (min-width: 992px) { 
  font-size: 5rem; 
	width: 5rem; 
	height: 5rem; 
}     

} 
 

// HUB OPTIONS BUTTON DROPDOWN 
.mol-button-dropdown { 
    margin: 0; 
} 


// SIDE NAV

.mol-page-toolbar { 
    position: absolute; 
    top: $positioning-xl; 
    right: $positioning-xl; 
} 

} 


// class getting added with jquery to  
// resize on scroll 

.page-header-shrink { 
	position: fixed; 
	height: 96px; 
	padding: $padding-xxl $padding-lg $padding-xxl 6rem; 

 .mol-page-title { 
	font-size: 2.25rem; 
	line-height: .95; 

	@media (min-width: 992px) { 

		font-size: 2.65rem; 
	} 

 } 
 

 .mol-page-header-icon { 
 width: 3.25rem; 
 height: 3.25rem; 
 font-size: 3.25rem; 

 } 

} 
 

// ACCESSIBLE WAY TO HID ELEMENTS
.visually-hidden { /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */ 
    position: absolute !important; 
    height: 1px; width: 1px;  
    overflow: hidden; 
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ 
    clip: rect(1px, 1px, 1px, 1px); 
    transition: 3s ease-in-out; 
} 
} 
- Page title (mol-page-title) note: gets a class added to it to adjust on scroll
- Hub options button
	- See spec for mol-button-dropdown 
- Use the default styling for side nav


## Behavior
n/a


## Responsive Behavior
- Below 992px:  
	-- page glyphicon reduces size 
	-- page title reduces size 
	-- container reduces in padding to the left 


## Defaults
- Contains page icon,  h2 page title and side nav 


## Optional Features
- Links 
- message badges 
- text within .org-page-header--int-content container (text, lists, etc.) 
- hub options button 


## Accessibility
- See button dropdown spec for its accessibility requirements 
- See glyphicon spec for its accessibility requirements 
- For the side nav:  
	-- There is an empty span included with each button’s glyphicon. This empty span has a class="sr-only" and relevant info for the screen reader to read about each button 
- Use role=”group” on the org-page-header--int-content and the mol-page-toolbar 
- Header tag should have aria-label="This page's title and relevant navigation" 
- The interior content of the page header is wrapped in this class org-page-header--int-content which on scroll will get the below class added to it. This class allows for the content to be hidden while still allowing screen readers to be read and tabbed through 
	.visually-hidden { 
	    position: absolute !important;
	    height: 1px; width: 1px; 
	    overflow: hidden;
	    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
	    clip: rect(1px, 1px, 1px, 1px);
	}
