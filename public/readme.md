Project Overview

This is a simple interactive drawing application built using React and HTML Canvas.
The application allows users to place dots inside a drawing box. Each dot connects to the previous one with a line, and every four dots form a closed square.

The app also includes:

A Reset feature to clear the drawing

A popup warning when users click outside the drawing area

Mobile and touch support, making it usable on phones and tablets

The project was developed with clarity, usability, and clean architecture in mind.

⚙️ Setup and Installation Instructions

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone <your-repository-url>

2️⃣ Navigate to the project folder
cd <project-folder-name>

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm start

5️⃣ Open in browser

The application will be available at:

http://localhost:3000

🏗️ Application Architecture

The application follows a simple and clean component-based architecture.

📁 File Structure
src/
│
├── components/
│   ├── DrawingBoard.jsx   // Canvas drawing logic
│   └── Controls.jsx       // Reset button
│
├── styles/
│   └── DrawingBoard.css   // Styling for canvas and popup
│
├── App.jsx                // Main app logic
├── index.js               // Entry point
└── README.md

🧠 Component Responsibilities
🔹 App.jsx

Acts as the main controller

Manages:

Reset logic using key re-mounting

Visibility of the Reset button

Passes callbacks to child components

🔹 DrawingBoard.jsx

Handles all canvas drawing logic

Responsibilities:

Drawing dots and connecting lines

Closing a square after 4 points

Showing popup when clicking outside the drawing box

Supporting mouse and touch interactions

Uses React hooks:

useRef for canvas access

useState for tracking points and popup state

useEffect for canvas setup and event listeners

🔹 Controls.jsx

Contains the Reset button

Uses stopPropagation() to prevent popup from appearing when Reset is clicked

✨ Additional Features & Enhancements
✅ Popup Validation

A popup appears when the user clicks outside the drawing area

Popup does not appear when clicking the Reset button

Popup automatically disappears after 2 seconds

✅ Reset Functionality

Reset clears the canvas completely

Implemented using component re-mounting (key prop)

Ensures a clean reset without manual canvas clearing

✅ Mobile Responsiveness

Canvas width adapts to screen size

Touch support using onTouchStart

Mobile-friendly CSS using touch-action: manipulation

Works on:

Mobile phones

Tablets / iPad

Desktop browsers

✅ Clean UX

Cursor changes for precision

Clear drawing boundaries

Reset button appears only after first interaction
