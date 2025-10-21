# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)


## HTML Notes

Initial changes were made to the index.html and to_do_list.html files. I also renamed the files in order to better recognize which files had which purpose. I learned how to change the background color of just the header/main body. 
- Using an input type allows users to change the text on the site. This is important for when users want to change the name of their to-do lists (the purpose is to have to-do lists for multiple classes). 
- <button> creates a button. I have added a placeholder button in the account.html file that will allow users to create an account if they don't already have one.
- Image display: <img src="photo" alt="photo name" width="500" height="600"
- To declare a page as HTML: !DOCTYPE html (goes at top of page)
- Other HTML Tags:
  - p = Paragraph
  - ol = Ordered List (each list item starts with the li tag)
  - ul = Unordered List (each list item starts with the li tag)
  - h1-h6 = First Level Heading, Second Level Heading, ..., Sixth Level Heading
  - script = used to embed inline JavaScript, such as console.log("message")

## Midterm Notes
- *Terminal Commands*
  - cd: change directory
  - mkdir: make directory
  - mv: rename file
  - chmod: update permission (use sudo to run as admin)
  - ./filename: to run a file
  - rm: remove a file
  - ls: show all files in a folder, list files
  - -la: lists all files, including hidden ones
  - pwd: display path of current working directory
  - vim: launches Vim text editor. Allows for navigation and executing commands to open/edit files, navigate through text (using h, j, k, l), insert and modify text, etc.
  - nano: opens a menu of commands to open/create files, save, exit, paste, etc. Much more simple and intuitive than vim.
  - man: a Unix-like command-line utility used to display the manual pages for commands, subroutines, and files, providing detailed documentation. Used by typing man followed by a command (ex. man ls), which will display the information on a command's syntax, options, and examples.
  - ssh: used to establish a secure, encrypted connection to a remote server. It provides a way to access and manage remote systems through a command-line interface. (ex. ssh -i path/to/your/key.pem ubuntu@domainname.click). Used to create a remote shell session. 
  - ps: output currently running processes
  - wget: used to retrieve files from the internet. To download a single file, use wget followed by the URL of a file. 
  - sudo: allows authorized users to execute commands with the privledges of another user. Enables users to perform administrative tasks that require higher permissions than their standard user account.
 
- *Link Tag*
  - Defines the relationship between the current document and an external resource.
  - Most often used to link to external style sheets or to add a favicon to a website.
  - The element itself is an empty element, it contains attributes only.
  - Example: <link rel="stylesheet" href="styles.css" (>)
  - Connects html files to css files, css files to other css files, etc.
 
- *Div Tag*
  - Defines a division or a section in an HTML document
  - Used as a container for HTML elements (which are then styled w/ CSS or manipulated with JavaScript
  - Styled by using a class or id attribute

- *#title vs .grid*
  - #title: ID selector. Used in CSS files to specify elements that are to be edited. Has higher specificity than a class selector (will overrule the class selector if there is a conflicting rule on the same element). Styles a single element declared with an attribute (id="foo")
  - .grid: Class selector. Can be applied to any number of elements on a page, including multiple elements within a CSS grid layout. Includes multiplicity--an html element can have multiple classes applied to it at the same time, allowing you to combine different sets of styles. Styles all elements with an attribute (class="foo").
 
- *Padding vs Margin*
  - Padding: used to generate space around an element's content, inside of any defined borders. Ex. Padding-{top/bottom/right/left}. Properties include length (specifies a padding in px, pt, cm, etc.), % (specifies a padding in % of the width of the containing element), and inherit (specifies that the padding should be inherited from the parent element). Creates space inside an element, between its content and its border.
  - Margin: used to create space around elements outside of any defined borders. They define the distance between an element's border and the surrounding elements. Ex. Margin-{top/bottom/right/left}. Properties include auto (the browser calculates the margin), length (specifies a margin in px, pt, cm, etc.), % (specifies a margin in px, pt, cm, etc.), and inherit (should be inherited from parent element). Creates space outside an element's border, separating it from other elements.
 
- *Flex*

- *Arrow Function*
  - Before: let myFunction = function(a, b) {return a * b}
  - After: let myFunction = (a, b) => a * b;
  - Offer a concise syntax for writing function expressions.

- *Map function*
  - A higher-order function that applies a given function to each element of an array (or other iterable) and returns a new array containing the results. The original array remains unchanged. Map() will not execute the function for empty elements.

- *getElementById function*
  - Returns an element with a specified value
  - Returns null if the element does not exist.
  - Provides a direct and efficient way to target a specific element without needing to traverse the DOM tree
  - Once accessed, various actions can be used to manipulate the element (ex. element.style.color = 'blue'). This is done within the same page, usually inside a <script> block. Also, you can attach event handlers to an element using addEventListener(). Different functions on one element can be created with addEventListener (ex. element.addEventListener("click", myFunction), element.addEventListener("mouseover", SecondFunction). Remember that these only work after the element had been specified by getElementById (ex. const element = document.getElementById("myBtn")).

- *JavaScript # Selector*

- *Document Object Model*
  - An object representation of the HTML elements that the browswer uses to render the display. The brosder also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
  - For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.
  - The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.
  - Allows you to inject entire blocks of HTML innto an element (ensure it cannot be manipulated by a user), and supports the ability to attach an event listener function (addEventListener).
 
- *HTML <span> Tag*
  - An inline container used to mark up a part of a text, or a part of a document.
  - Easily styled by CSS or manipulated with JavaScript using the class or id attribute.
  - Much like the <div> element, but <div> is a block-level element and <span> is an inline element.
  - ex: <p My mother has <span style="color:blue">blue</span(>) eyes.(</p)
  - By default, the HTML span element has a default CSS display property value of 'inline'.

- *CSS Box Model*
  - Four Parts: content, padding, borders, margins
  - Explanation of parts (from innermost part to outermost part):
    - Content: the content of the box, where text and images appear.
    - Padding: clears and area around the content. The padding is transparent.
    - Border: a border that goes around the padding and content.
    - Margin: clears and area outside the border. The margin is transparent.
   
- *JavaScript Syntax*
  - If: Use if to specify a code block to be executed, if a specified condition is true (ex. if (condition) {// code to execute if the condition is true })
  - Else: Use else to specify a code block to be executed, if the same condition is false (ex. else { //code to execute is the condition is false })
  - Switch: Use switch to specify many alternative code blocks to be executed (ex. switch(expression) {case x: //code block// break; case y: //code block// break; default: //code block//})
  - For: can execute a block of code a number of times. They are fundamental for tasks like performing an action multiple times. (ex. for (let i = 0; i < 5; i++) { //code here ;})
  - While: Loops through a block of code as long as a specified condition is true (ex. while (i < 10) { text += "The number is " + i; i++; })
 
- *JavaScript Object*
  - ex. const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; A JavaScript object with four properties. You can also create an empty object, then add the properties later (const person = {}; person.firstName = "John:;). So, yes, new properties can be added to javascript objects after they have already been initialized.
 
- *JavaScript Object Notation (JSON)*
  - a plain text format for storing and transporting data, makes it possible to store JavaScript objects as text.
  - similar to the syntax for creating JavaScript objects. Written clearly as name/value pairs, just like JavaScript object properties, but requires double quotes unlike JavaScript names. 
  - Used to send, receive, and store data
  - Ex. '{"name":"John", "age":30, "car":null}'
  - Syntactically identical to the code for creating JavaScript objects
 
- *URL breakdown*
  - Top-level Domain: last segment of a domain name, located to the far right of the final dot (ex. .com, .org, .net)
  - Subdomain: the prefix added to the root domain, separated by a dot, to organize a website into separate sections. (ex. in banana.fruit.bozo.click, the subdomain is fruit.bozo.click, and the nested subdomain is banana.fruit.bozo.click, a lower level within fruit.bozo.click)
  - Root Domain: the main address of a website, consisting of the second-level domain and the TLD. (ex. in blog.example.com, the root domain is example.com)
  - A web certificate is necessary to use HTTPS, which is required to establish a trusted and encrypted connection between a server and a user's browser.
 
- *IP Addresses*
  - Port 80: for unencrypted web traffic (HTTP). Transmits unencrypted data for web browsing.
  - Port 443: for secure, encrypted web traffic. Transmits encrypted web traffic to protect data during transmission.
  - Port 22: For secure remote access using the Secure Shell (SSH) protocol. Creates a secure, encrypted connection for remote access to a server or network device.
  - DNS A record: used to map a domain or subdomain to a specific IPv4 address.
 
- *Promise*
  - A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
  - Always in one of these states:
      - Pending: initial state, neither fulfilled nor rejected
      - Fulfilled: meaning that the operation was completed successfully
      - Rejected: meaning that the operation failed
