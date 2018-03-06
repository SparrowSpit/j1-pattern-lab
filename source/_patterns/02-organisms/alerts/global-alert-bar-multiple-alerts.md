## Description
The global alert bar is used to display action oriented and informative messages to the user that occur as the result of actions the user has chosen or the events (exceptions and warnings) that occur. This component is used to deliver one or more messages to the user through a pop up alert style message queue fixed to the bottom of the users display window. The messages delivered to this queue generally don’t have a more appropriate context and shouldn’t be used to display message that result from validation or other actions where the error could be more closely related to the contxt. Messages delivered to the user through the Alert Bar can have a status that indicates the severity of the message.  Danger (red), warning (yellow) or success (green) are chosen according or severity level that needs to be conveyed to the user.


## Styling
- General text color is $color-text-default
- General text size is 1.6rem
- Colors: 
	-- Danger (red): 
		--- Danger (red) bar link color: $color-danger-default
	-- Warning (yellow): 
		--- Warning (orange) bar link color: $color-warning-default
	-- Success (Green): 
		--- Success (green) bar link color: $color-success-default

- Please ensure the entire bar has visibility: hidden when the alert is off-screen (and is not able to be read from a screen reader. Conversely, please ensure the opposite is true ... When the bar is on the screen, the bar needs to have visiblility: visible property applied to it so that a screen reader can be used. 
- Please override Bootstrap’s default link styling and ADD text-decoration: underline to all links in alert bar. Also, all text links within alert bar should be $color-primary-default 
- Padding between all content inside of bar and edge of alert bar is:  $margin-lg  
- Margins
	-- margin-right: $margin-sm on the glyph, between glyphicon and start of text
	-- $margin-sm to the right of the alert border on left and the glyphicon
	-- $margin-xl between end of text and button (if button is there), i.e.: .btn{ margin-left: $margin-xl }
	-- $margin-md above and below the "View all alerts" and "Hide alerts" button in the Alert header

- Box-shadow of bar: box shadow: 0, -4px, 14px rgba(124, 124, 124, .025)
- Use 1.5s for the animation-duration of the sliding-in of alert bar
- The container for the alert-items should have a max-height set to 300px so that if a user accumulates more alerts than fit in that space a scrollbar will be enabled to show them all their alerts. 
- The border beneath the alert header has: 
	-- Background: #eceef1
	-- Height: 4px; 
	-- Margin-bottom: 1.5rem
	-- Width: 100%



## Behavior
[Clarification] since the messages part seems to operate as an accordion type slider, how should the alert bar perform when the accordion link is clicked during it’s collapsed state?  Should it expand one message or expand to all?

- When the alert bar has no Alert Messages, there will be no elements visible on the screen.

- Alert Messages can be added to the Global Alert Bar with the following properties:
	-- Message text that consists of:
		--- A mix of text and HTML
		--- An optional [Popover Control] to display additional information. (Permits the message to be more compact).
		--- Message text should be as short as possible to avoid display problems on mobile devices.
	-- A status to display the message severity:
		--- Danger (Red)
		--- Warning (Yellow)
		--- Success (Green)
	-- Messages are required to have both Message content (Text or HTML) and a status.

- When the first Alert Message is added to the Global Alert Bar:
	-- The message should be displayed in a fixed position at the bottom of the screen, centered.
	-- It will fade in using [insert fade mode here].
	-- It will appear as seen in Figure 1.
	-- The message will remain on the screen until the user dismisses it.

- If the user has not dismissed the first message and a second message is added (Single Item Mode):
	-- The Alert Status Bar will become visible and appear directly above the Alert Message (Figure 2):
		--- It should display the count of messages using the text “You have <blank> alerts”
		--- A Button should also be displayed with the text “View All Alerts”
	-- Hide the older message and the make the second message appear in the space previously occupied by the first.  The message should be added to the top of the list so that they are in chronological when the user chooses to expand the list to view the entire list.

- If the Status Bar is already visible and a new Alert Message is added to the Global Alert Bar:
	-- If the list is currently displaying only a single message (not minimized, not expanded):
		--- Hide the older message and make the second message appear in the space previously occupied by the first. 
	-- If the list is in “Show All mode”:
		--- Add the message to the top of the list. 
		--- If the list becomes longer than the fixed space specified in the styling section, 
			---- Display a scroll bar to permit access to the hidden items.
	-- If the Message List is minimized :
		--- If the new Alert Message is an error message:
			---- Change the Message List to “Single Item Mode” to show only the most recently posted Alert Message.
			---- The Status Bar should still allow the user to select “View All Alerts”
		--- If the Alert Message is not an error message:
			---- Do not change the mode of the Message List.
			---- Continue with the other main steps.
	-- The Alert Message should be added to the top of the list so that they are in chronological order so that newest appears first.
	-- Update the count that is visible in the Status Bar to represent the current count of messages in the system.

- The user can dismiss any visible Alert Message by clicking the Global Close button located on the right of the message.
	-- If the list is currently displaying in “Single Item Mode” (not minimized, not expanded) but there are multiple messages in the message list:
		--- Close the current message.
		--- Keep the Message List in “Single Item Mode” and 
		--- display the next message from the list.
		--- When the last message is closed, hide the Status Bar.
	-- If the alerts list is in “Show All Alerts” mode:
		--- Remove the Alert Message from the list
		--- Remain in “View All Alerts” mode.
- The Message List should have 3 modes:
	-- Hidden – the Alert Message list contains items but the user has chosen to hide them. Do not display any items when the list is in this mode.
	-- Single Item Mode – there are one or more items in the list but only one message is shown (the most recent)
	-- Show All Mode – all of the Alert Messages are displayed in a list using the responsive behavior techniques to handle overflow.
- The Status Bar has 3 modes:
	-- Hidden - It is hidden when the user has zero or 1 messages.
	-- Expanded – When more than 1 alert messages and the user has clicked the “View All Alerts” button.  
		--- This causes the list of alerts to become visible to the user. 
		--- The “View All Alerts” button should be changed to “Hide Alerts” allowing the user to minimize the alerts list.
	-- Collapsed – When more than 1 alert message and the user has clicked the “Hide Alerts” button and no messages are visible to the user.  
		--- At this time the “Hide Alerts” button should be toggled back to the “View All Alerts” button. 
			---- The list will remain minimized until the user clicks the “View All Alerts” button.
		--- If a message is added with the error status while the Status Bar is minimized:
			---- Place the Message list in “Single Item Mode” 



## Responsive Behavior
- If there is a button displayed within the message, the button will stack beneath the text. This should stack when the screen is 1024px/64rem and below. Be careful to allow for space beneath the button so that the button does not butt up against the edge of the screen. 

- Take note to ensure that all clickable elements (global close button, default button if it’s included) all have at least 44x44px touchable real estate on medium-sized @screen-md-min or  992px / 16px = 62rem  screens and below. 


## Defaults
- n/a


## Optional Features
- There are three different possible alert categories: danger (red), warning (yellow) or success (green)
- Possible default button can be included as necessary for actionable purpose


## Accessibility
- See predefined popover spec
- See previous spec for global close button. Please be sure to use aria-label=”close”
- Please ensure you can tab through the necessary links and/or buttons within bar.
- Use aria-live=”polite” on the bar
- See predefined spec for glyph icons. Please be sure to use aria-hidden=true on the glyphicon


