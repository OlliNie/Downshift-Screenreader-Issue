# DOWNSHIFT BUG

Screen reader is unable to read contents of a drop down menu.

## EXPECTED BEHAVIOIR

Regardless of browser, screen reader is able to read contents of a dropdown menu.

## OBSERVED BEHAVIOR

With Chrome browser Version 84.0.4147.105, voice over is unable to read the contents of a Downshift dropdown menu if the toggleButton is used to open up the dropdown. Using the down arrow while focus is on the input element however does allow the screen reader to function properly.

NVDA is also unable to read the contents of a dropdown menu if opened using the toggle button.

## EXPECTED BEHAVIOR

Screen reader is able to read contents of a dropdown menu regardless of if it was opened using a down arrow key event or a onClick event of the toggleButton

## HOW TO REPEAT THIS ISSUE

1. Clone this Create React App
2. NPM run start
