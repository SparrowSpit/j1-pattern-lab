## Description
- A time input component 
- Utilizing JQuery UI time picker 
- this time input is the developer version #3


## Styling
- Add padding-xxs (3px) to the left of the .ui-timepicker-list li so that there is a total of 8px padding on those elements


## Behavior
- Should be allowed to select a time from the dropdown that provides selections of time in increments of 5, 10, 15, 30 or 60 minutes. 
- User should be able to manually input the time
- It should be optional where the first value of the select may be blank or have a value. 
- The default for this component is to have the input be empty (not show a value on page load). 
- There are use cases where times in the past will need to be disabled so the user cannot select them.
- If a time is unavailable then it should be muted color should say “n/a”. This “n/a” helps to not rely on the muted color to show that the time is unavailable (more accessible friendly). 
- Default time value options should be 12:00am to 11:30pm.
- Default intervals is 30 mins.
- Clear on Keypress option to allow for clearing of the entire time input when a user has their cursor within an input that holds a time value and hits the delete key
- Input needs default value on page load and option to change, documented here
- Input needs to be able to autocomplete, i.e. a user types in 2pm and it completes with 2:00pm. This autocomplete needs to be the default.
- Force round of manually input values should be default. If the user types in a value that isn’t represented in the options, it should force round to the nearest available value. 
- Please alert the user if they’ve entered an incorrect time format, i.e. 45677890. In that case, show the error underneath the



## Responsive Behavior
- Nothing should change due to changes in screen size


## Defaults
- Default time value options should be 12:00am to 11:30pm.
- Default interval should be 30 mins. 
- Include autocomplete, i.e. if a user types 2pm it should complete with 2:00pm
- Force round of the manually input values
- Do not include a zero in front of 1:00, 2:00, etc. (rather than 01:00, 02:00, etc.)
- Use “am” instead of “a.m.” or “PM” and with a space between the last integer and the “am”. i.e., 12:00 am




## Optional Features
- It should be optional where the first value may be blank or have a value. The default for this is to have a value. 
- There are use cases where times in the past will need to be disabled so the user cannot select them.
- Sometimes the current time to the nearest rounded interval will need to populate the input field on load (i.e. an event time input field set to the nearest half hour of the current time)



## Accessibility
- the user should be able to tab through the inputs
- The time value options need to be able to be read through a screenreader. Add arial-label=”” with the relevant time added inbetween the apostrophes.
- If there is not a visible label provided in the design for the time input, add a sr-only label so that screenreaders can tell the user what the label is for. 


