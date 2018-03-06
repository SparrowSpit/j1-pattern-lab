## Description
- The File Input component allows the user to select a file from a user’s file system.  


## Styling
- This component uses default browser styling.


## Behavior
- The user may activate the input by clicking/tapping the input or by using the spacebar to activate it. 
- Then single or multiple files may be chosen by the user. 
- If one file is chosen, the file name will be shown beside the input button.
- If multiple files are chosen, the quantity of files will be shown beside the input button. 


## Responsive Behavior
- n/a


## Defaults
- The default is to only allow single files chosen at a time.
- Should include a label and a file input.
- The label will appear above the input as a default. 


## Optional Features
- The label may be placed to either side as needed to suit the design.  
- It is optional to allow for multiple files to be uploaded at a time. 
- The accept attribute may be specified to provide user agents with a hint of what file types will be accepted. Which file types are accepted is at the discretion of the UX at the time of the specific design and need to be defined in the code. 
- May be set to disabled



## Accessibility
- Include a label with the File Input component.
- When the input has focus, the user may use the spacebar key to activate the File Input and then choose a file. 
- Always include a unique ID for the input field
- Always include a label that points to the input field's ID
- If a visible label does not work in a given context, add the "sr-only" class to the label tag to visually hide it but still make it readable by screen readers.
     - Consider adding additional screen-reader-only text to a label's text to give additional info to screen reader users. Example: "Name" might make sense to sighted users, but it may be helpful to screen reader users to add "Name(s of system users)" where the text in parentheses is only for screen readers.
- If hint text is included, it should be part of the label text (while still visually differentiated) to ensure it gets read in context with the label text.





