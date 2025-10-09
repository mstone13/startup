# Calendar/Planner Site

[My Notes](notes.md)

This site will eventually become a functional calendar app as well as a place to keep multiple to-do lists, perfect for college students juggling multiple classes and assignments. Users will be able to connect with other users and create events with their friends that will appear on both calendars! Users will also be able to connect events to a location using a third-party mapping API.

## 🚀 Specification Deliverable

This startup includes a calendar to add events as well as multiple to-do lists for differing classes. 

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have trouble organizing your assignments and daily events? This site will be your go-to for all your organization efforts. Work with other users to coordinate events, locate your upcoming events, and keep yourself organized!

### Design

The index.html page displays the user login and a table including different times throughout the day--eventually, users will be able to scroll through the entire 24 hour calendar and add events whenever they want. This page also displays notifications from other users and a third-party API to map locations to certain events.

The to-do-list.html page focuses mainly on multiple to-do lists, which the user can name and connect to different classes. They then can add items, assignments, and projects to these lists to stay organized.

The account.html page presents the user's information, such as their username, email, and date of joining the site.

Lastly, the other-users.html page focuses on finding and friending other users. Users will be able to see their friends usernames and events that are common between calendars, granted that both users give permission.


### Key features

- Login, user data collection (gmail)
- Calendar
- To-Do List(s)
- Notifications
- Inter-user communication
- Mapping API

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Four different views, main page/login/display of calendar events, to-do-list, account information, other users/user search
- **CSS** - Complementary color scheme, responsive design, manipulation of colors, etc.
- **React** - Single page application with routing between views, reactive user controls, and state hooks.
- **Service** - Endpoints for authentication, storing/retrieving scores. Third party call to get inspirational quotes.
- **DB/Login** - Stores authentication and scores.
- **WebSocket** - Broadcast user's game notifications.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://simon.cs260.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four different pages. One for each view. `index.html` (Login), `play.html`, `scores.html`, and `about.html`.
- [x] **Proper HTML element usage** - I spent a lot of time learning about elements. I used header, footer, main, nav, img, a, fieldset, input, button, form, and many more.
- [x] **Links** - Links between views.
- [x] **Text** - About page has text.
- [x] **3rd party API placeholder** - About page has a place to display an inspirational quote.
- [x] **Images** - Image is displayed on the about page.
- [x] **Login placeholder** - Placeholder for auth on the login page.
- [x] **DB data placeholder** - High scores displayed on scores page.
- [x] **WebSocket placeholder** - The play page has a text area that will show what other user notifications.


## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **CSS pages** - Four different pages, each complimenting an HTML page. These are used for styling and organizing the basic structure given from the HTML files. 
- [x] **Proper CSS element usage** - I spent a lot of time studying about various CSS elements and practicing on my own time. I have utilized headers, footers, main, nav, button, and more.
- [x] **Navigation Elements** - Links between views. Users can navigate the site with ease.
- [x] - **Window Resizing** - Most if not all of the elements on the pages are subject to window resizing. Future debugging will bring to light any elements that need to be adjusted. 
- [x] - **Proper CSS text content** - Proper amounts of filler text are put inside the elements, font sizing and types have been applied.
- [x] - **Proper CSS images** - Added an image on the main page which will (in the future) display different images depending on the month of the year. This image is also subject to window resizing.

## 🚀 React Phase 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Handles bundling, transpiling, minifying, and HMR.
- [x] **Router** - Used to navigate between Login, Account, To-Do List, and Friends. Clicking the links will change the displayed content without reloading the page.
- [x] **Components** - App, Login, Other_Users, To-Do List, Account components. Each component is connected to a CSS file and has its own HTML structure.
    - [x] **Login** - Included is a mock login box, currently does not have any functionality or reactivity.
    - [x] **Other_Users** - Displays a table with filler 'other users' information, later will allow searching for other users.
    - [x] **To-Do List** - Displays multiple to-do lists for multiple classes
    - [x] **Account** - Displays filler user information (email, username, friends, etc.)
- [x] **Application Logic** - Currently holds no reactivity, not implemented yet. I expect that future edits will include user input, interacting with a backend, and holding user information. 


