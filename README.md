Project Overview

This is a simple interactive drawing application built using React and HTML Canvas.
The application allows users to place dots inside a drawing box. Each dot connects to the previous one with a line and every four dots form a closed square.

The app also includes:

A Reset feature to clear the drawing

A popup warning when users click outside the drawing area


Setup and Installation Instructions
Follow these steps to run the project locally:

Check Node.js and npm Installation

 React requires Node.js and npm to be installed.
 Check if they are already installed by running:
    node -v
    npm -v
 Install Node.js and npm (If Not Installed)
  npm install
 Create a New React Application
   npx create-react-app meeraq-assignment
 Navigate to the Project Directory
  cd meeraq-assignment
Start the Development Server
  npm start
Once the server starts successfully, open your browser and go to:
 http://localhost:3000
To stop the running development server, press:
 ctrl+c
 

Application Architecture

The application follows a simple and clean component-based architecture.

File Structure

src/
components/
DrawingBoard.jsx  
 Controls.jsx  
 styles/
DrawingBoard.css  
 App.jsx  
 index.js  
 README.md
 

 components/

This folder contains all the reusable UI components of the application.

 DrawingBoard.jsx

This is the core component of the application.

Responsible for rendering the HTML canvas
Handles all drawing logic:
Placing dots,
Connecting dots with lines,
Closing a square after every four dots,
Detects clicks outside the drawing area and shows a popup message,
Keeps drawing logic independent from the reset logic,
In short, this file controls how the user interacts with the drawing area.

 Controls.jsx

This component handles the Reset button.
Displays the Reset button only when needed
Calls the reset handler passed from App.jsx
Stops event propagation to ensure clicking Reset does not trigger the popup
This separation keeps the UI clean and avoids mixing drawing logic with control logic.

 styles/

This folder contains all styling related to the drawing area.

 DrawingBoard.css

This file controls the visual appearance of the application.
Styles the drawing box (border, size, cursor),
Positions the popup message correctly inside the drawing area,
Ensures the application is touch-friendly and responsive on mobile devices,
All layout-related decisions are kept here so that styling and logic remain separate.

 App.jsx

This is the main controller component of the application.
Acts as the parent component
Manages global state such as:
When to show the Reset button
When to reset the drawing board
Uses a React key to re-mount the DrawingBoard component, which guarantees a clean canvas reset
Passes necessary callbacks to child components
This file connects all parts of the app together without containing drawing logic itself.

 index.js

This is the entry point of the React application.
Attaches the React app to the HTML DOM
Renders the App component inside the root element
This file is usually minimal and rarely changes.

 README.md

  This README is written to help any new developer or reviewer understand the application without needing prior context.
  It acts as a starting guide for anyone who wants to run, modify, or review the project.
  It explains the project structure and responsibilities of each file, making navigation easier.
  It serves as a reference document for future maintenance or enhancements.


    Additional Features Implemented

A popup message is displayed when the user clicks or taps outside the drawing area, helping guide correct interaction.
The popup message does not appear when clicking the Reset button, ensuring a smooth user experience.
A Reset option is provided to clear the drawing and start fresh.
The Reset button appears only after the first dot is placed, keeping the interface clean and intuitive.
The application is fully responsive, adapting to different screen sizes.
Multiple squares can be drawn continuously without refreshing the page.


Create a Repository on GitHub

Go to https://github.com
Click New Repository
Repository name
Choose Public or Private
Click Create Repository
You will get a repository URL like:
https://github.com/username/repository-name.git

 Run Project Locally
  Before pushing code, make sure the project runs successfully on your system.
  npm start

 Initialize Git in Local Project
  Open the project folder in VS Code and open terminal.
   git init
   This converts the project into a Git repository.
   
  Check Project Status
   git status
   Shows:
   Untracked files
   Modified files
   Deleted files

 Add all project files:
    git add .

Commit the Code
 git commit -m "Initial commit"

Connect Local Repo to GitHub
Add GitHub repository as remote:

git remote add origin https://github.com/username/repository-name.git



 Push Code to GitHub

Rename branch and push:

git branch -M main
git push -u origin main

Code will now appear on GitHub
