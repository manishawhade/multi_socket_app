Multi Socket App

This project is a React.js-based frontend application designed to handle multiple WebSocket connections efficiently. It includes a basic authentication flow and a dynamic interface to interact with real-time data streams via WebSockets.

🚀 Features

Login Functionality
Users can log in using a secure form. Upon successful authentication, a token is received and stored via Context API and LocalStorage to maintain session persistence across refreshes.

Persistent Authentication
Auth state is managed globally using React's Context API and is preserved with LocalStorage, ensuring a seamless user experience.

Webhook Component
After login, users can access the Webhook component, which enables:

Establishing multiple WebSocket connections

Continuously pulling real-time data from different endpoints

Managing and displaying socket data in a clean, responsive UI

🛠️ Tech Stack
Frontend: React.js

State Management: Context API

Authentication Storage: LocalStorage

Real-time Communication: WebSockets


📦 Project Structure

src/

├── components/

│   ├── Login.jsx

│   └── Webhook.jsx

├── context/

│   └── Context.jsx

├── App.jsx

└── index.jsx

