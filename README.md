Harry Potter Explorer

A small React application built to browse characters and spells from the public Harry Potter API.
The project demonstrates routing, API requests, state management, and UI structure with reusable components.

Features

Characters page with a list of characters (name, house, and image).

Character details page with extended information.

Spells page displaying spell name and description.

Sidebar navigation.

Loading and error handling states.

Clean component structure and reusable API layer.

Tech Stack
Tool	Purpose
React	UI rendering
React Router v6	Client-side routing
CSS Modules	Component-level styling
Fetch API	HTTP requests
Vite	Fast development build tool
Project Structure
src/
  api/
    characters.js
    spells.js
  components/
    Sidebar/
  pages/
    Characters/
    CharacterDetails/
    Spells/
  router/
    AppRouter.jsx
  App.jsx
  main.jsx
  index.css

Setup & Run
# Install dependencies
npm install

# Start development server
npm run dev


The app will be running at:

http://localhost:5173

Notes

Data is fetched from:
https://hp-api.onrender.com/api/characters
https://hp-api.onrender.com/api/spells

No UI framework was used. Styling is implemented using regular CSS / CSS Modules.