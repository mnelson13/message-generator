# Message Generator

### Link to Deployed Project:
* https://mnelson13.github.io/message-generator/

### Instructions/Features:
* A hotel message application where you can create customizable message templates for your guests.
* Click on the link provided above to open the app.
* Select your company from the 'Hotels' dropdown selection and the guest you would like to send a message to from the 'Guests' dropdown selection.
* Once you have selected a hotel and a guest, template messages customized with your selections will display on the page!
* The greeting in the messages will automatically update based on the current time of day (Good morning vs Good afternoon vs Good evening).
* You can change your hotel and/or guest selections as needed.
* Once you have finalized your selections, click the 'SEND' button of the message of your choice to "send" that message to your guest.
![](sendMessage.gif)

* If you would like to add a new message template, use the form provided at the bottom of the page.
    * Type in any message that you would like!
    * You can use placeholders in your message that will automatically be populated with the corrisponding information ({guest}, {hotel}, {greeting}, {room}). You do not need to use all placeholders if you do not wish to, or you can use multiples of any placeholders.
    * Click 'SUBMIT' to add the template to the page.
    * You can still change your guest and/or hotel selection as needed and your new template will adjust as well!
![](newTemplate.gif)

### Design:
* When designing the user interface, I wanted a clean and simple design that would not have too much clutter or be too confusing for the user.
* The app starts with only 'Hotel' and 'Guest' selection fields, and only when both are selected will the message templates and custom message form appear on the page (this was a simple way to avoid displaying incomplete messages, as well as keep the user from accidentally sending an incomplete message).
* Modals (rather than alerts) are used to confirm when a message has been "sent".

### Languages:
* The main language used in the app is React.
    * React Components/Classes allow for easily rendering elements dynamically, which comes in handy when building messages from a template json file.
* JavaScript is also used, both within and outside the React Components.
    * JavaScript functions/methods execute most of the logic for the app.
    * JavaScript Class is used to create Form objects to select the hotel and guest.
* Materialize combined with some minor CSS are used to style the app.

### Processes to Verify Quality of Program:
* Breaking down the app into small pieces/components and using console.logs/tests when building to be able to easily pinpoint and fix bugs.
* Testing the finished app thoroughly to try to find and fix edge cases (i.e. using a certain placeholder multiple times when creating a new message).

### Future Directions
* If given more time, I would look into a way to be able to actually send a message to a given cell phone number. 
    * Right now, the app does not actually send any messages, but rather alerts that a certain message has been "sent" to a guest.
* Adding a database so that guests, hotels, and templates could be saved, added, updated, and deleted.
* Another feature to add would be User Authentication.
    * With User Authentication, a user could log in and save custom messages to their account, as well as add guests.