Video Stream React App

A modern Video Streaming Web Application built using React.js, allowing users to browse and watch videos with a smooth and interactive UI.

🚀 Features
🔐 User Authentication (Login System)
🎥 Video Streaming Player
📂 Browse Videos from Backend
❤️ Add to Favorites (Global State)
⚡ Fast and Responsive UI
🔄 Single Page Application (SPA)
🛡️ Protected Routes
🛠️ Tech Stack
Frontend: React.js
State Management: Redux
Routing: React Router
Styling: CSS / SCSS
HTTP Client: Axios
📁 Project Structure
video-stream-react/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/rushi0612/video-stream-react.git
cd video-stream-react
2️⃣ Install Dependencies
npm install
3️⃣ Configure Backend Server

Go to:

src/ipConfig.js

Update the backend server URL:

const serverIp = "localhost:4000";
export default serverIp;
4️⃣ Run the Application
npm start

App will run on:

http://localhost:3000
🔗 Backend Requirement

This frontend requires a backend server to function properly.

Make sure backend is running on the configured IP and port
Backend handles:
Authentication
Video data APIs
Streaming endpoints
📸 Screens
🔑 Login Page
🏠 Home Page (Video List)
▶️ Video Player Page
❌ 404 Page
📌 How It Works
User logs in using credentials
Fetches videos from backend API
Displays videos on homepage
User can play videos in player view
Favorites are managed using Redux global state
🧠 Learning Outcomes
React Component Architecture
State Management using Redux
API Integration using Axios
Protected Routing
Building a Streaming UI
🚀 Future Improvements
🔍 Search Functionality
💬 Comments Section
📺 Live Streaming Support
🌐 Deployment (AWS / Vercel)
📱 Mobile Optimization
🤝 Contributing

Contributions are welcome!

Fork the repository
Create a new branch
Commit your changes
Push and create a PR

👨‍💻 Author

Rushikesh Patil

GitHub: https://github.com/rushi0612
