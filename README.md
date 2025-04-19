# Node.js-Login-Form-UI-with-Custom-CSS---Project
This project is a simple Node.js-based web application featuring a modern login form UI. The front-end is styled with custom CSS, including a split-screen layout where the left half displays a background image and the right half contains a centered login form. The form is responsive and includes animated transitions for a smooth user experience.

Built to demonstrate basic static file serving in Node.js using Express, this setup is ideal for beginners exploring front-end and Node.js integration.

✅ Node.js + Express backend  

✅ Organized asset structure  

✅ Custom animations and validation scripts  

✅ Fully responsive UI with CSS-only layout

✅ Ideal for beginners exploring Node.js and frontend UI design  

✅ Focuses on static file serving using Express.js  

✅ Responsive design with CSS transitions and minimal JavaScript

---

🖥️ Features

- Built using **Node.js and Express.js**
  
- Responsive login form centered on the screen
  
- Left half shows a full-height background image
  
- Styled using pure CSS (no external frameworks)
  
- Smooth transitions and shadow effects
  
- Ready to deploy or extend with backend logic

---

📂 Project Structure
node-login-ui/ │ ├── node_modules/ # Node.js dependencies │ ├── views/ # UI files and assets │ ├── images/ # Background images │ ├── js/ # Custom JS files │ │ ├── animation.js # UI animations │ │ └── validate.js # Form validation │ ├── styles/ │ │ └── index.css # CSS styles │ └── index.html # Login form UI │ ├── script.js # Main server entry point (Node.js) ├── package.json # Project metadata and dependencies ├── package-lock.json # Lockfile for reproducible builds └── README.md # Project description and usage

	1. Initialize the project:
 
		• Open a terminal or command prompt.
  
		• Create a new directory for your project (optional).
  
			mkdir my-node-project
   
			cd my-node-project
   
		• Run npm init -y to initialize the project with a package.json file.  
  
		    (This will create a package.json file with default settings.)
      
			npm init -y
   
	
	2.  Create a Node.js file:
 
		• Create a JavaScript file for your Node.js app (e.g., app.js).
  
	3. Install Dependencies
 
		• Run the following command to install the express package (for building a web server):
  
			npm install express
   
	4.  Run the Application
 
			node app.js
   
	5.  Install nodemon for automatic restarts:
 
		• Install nodemon globally to automatically restart the server when changes are made to your project files:
  
			npm install -g nodemon
   
	6. Run with nodemon:
 
		• Start project with nodemon to automatically restart the server on file changes:
  
			nodemon app.js


💻 Features

	• Login form with a left-split background image
 
	• Frontend form validation (validate.js)
 
	• Animation effects (animation.js)
 
	• Responsive design using pure CSS
 
	• Clean asset structure for maintainability


🧪 Technologies Used

	• Node.js – backend runtime environment
 
	• Express.js – lightweight web framework to serve static files
 
	• HTML5 – markup for login structure
 
	• CSS3 – for layout, background split, and styling


🛠️ Tech Stack

	• Node.js
 
	• Express.js
 
	• HTML5 + CSS3
 
	• JavaScript (Vanilla)



📝 Customization

	• To change the background image:
 
        Replace bg.jpg inside public/images/ with your preferred image (name it the same or update the CSS).

	• To connect backend login logic:
 
        You can extend the form action and add authentication routes in server.js.

