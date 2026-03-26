# 🎬 Movie Recommender App

A personalized movie recommendation web application powered by AI. Tell it your taste, add your favorites — and it'll find your next watch.

🔗 **Live Demo:** [movie-rec0mmender-app.netlify.app](https://movie-rec0mmender-app.netlify.app/)

---

## ✨ Features

- 🤖 **AI-Powered Recommendations** — Uses the Bytez API (LLM) to generate personalized movie suggestions based on your preferences and favorite films
- 🎯 **Taste-Based Matching** — Input your favorite genres, moods, or specific movies and get tailored results
- ⚡ **Fast & Responsive UI** — Built with React.js and clean CSS, optimized for all screen sizes
- 🧩 **Component-Based Architecture** — Modular, maintainable frontend structure

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| React.js | UI framework |
| CSS | Styling & layout |
| Component architecture | Reusable, scalable UI |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js | Runtime environment |
| Express.js | REST API server |
| Bytez API | AI model for movie recommendations |

### Deployment
| Service | Role |
|---------|------|
| Netlify | Frontend hosting |
| Railway | Backend hosting |

---

## 📁 Project Structure

```
movie-recommender/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # App pages/views
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
│
├── server/                  # Express backend
│   ├── routes/              # API routes
│   ├── controllers/         # Request handlers
│   ├── services/            # Bytez API integration
│   └── index.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A [Bytez API](https://bytez.com) key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/movie-recommender.git
cd movie-recommender

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Variables

Create a `.env` file inside the `server/` directory:

```env
BYTEZ_API_KEY=your_api_key_here
PORT=5000
```

### Running Locally

```bash
# Start backend
cd server
npm run dev

# Start frontend (in a new terminal)
cd client
npm run dev
```

---

## 🌐 Deployment

- **Frontend** → Deployed on [Netlify](https://netlify.com) via GitHub integration
- **Backend** → Deployed on [Railway](https://railway.app) with environment variables configured on the platform

---

## 📚 What I Learned

- Integrating a third-party LLM API (Bytez) into a full-stack application
- Building and deploying a Node.js/Express REST API on Railway
- Connecting a React frontend to a live backend across different hosting platforms
- Structuring a real-world full-stack project with clean separation of concerns

---

## 👤 Author

**Abdrahman** — IT Student | Full-Stack Developer in progress  
📍 Borg El Arab Technological University  
🔗 [LinkedIn](https://linkedin.com/in/your-profile) · [GitHub](https://github.com/your-username)

---

> Built as a personal project to practice full-stack development, API integration, and deployment workflows.
