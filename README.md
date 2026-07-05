<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7C3AED&height=250&section=header&text=Rishita%20Mehta&fontSize=70&fontAlignY=35&desc=Full-Stack%20Engineer%20%7C%20AI%20Enthusiast&descAlignY=55&descAlign=50&fontColor=ffffff" alt="Header" />
  
  <p align="center">
    <strong>A next-generation, high-performance developer portfolio built with modern web technologies.</strong>
  </p>
  
  <p align="center">
    <a href="https://github.com/Mehtarishita/RishitaMehtaPortfolio/stargazers"><img src="https://img.shields.io/github/stars/Mehtarishita/RishitaMehtaPortfolio?color=7C3AED&logo=github&style=for-the-badge" alt="Stars" /></a>
    <a href="https://github.com/Mehtarishita/RishitaMehtaPortfolio/network/members"><img src="https://img.shields.io/github/forks/Mehtarishita/RishitaMehtaPortfolio?color=05b6d4&logo=github&style=for-the-badge" alt="Forks" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  </p>
</div>

---

## ✨ Features

- 🎨 **Premium Glassmorphism UI:** Stunning, modern aesthetic with sleek frosted glass panels and neon glow effects.
- 🚀 **Blazing Fast Performance:** Powered by Vite and React for instant load times and hot module replacement.
- 💫 **Butter-Smooth Animations:** Powered by `framer-motion` and `lenis` for incredibly fluid scroll and reveal animations.
- 📱 **Fully Responsive:** Flawless experience across all devices, from ultra-wide monitors to mobile phones.
- ✉️ **Live Contact Form:** Fully functional backend using Node.js and Nodemailer to instantly send messages directly to your inbox.
- 📄 **Dynamic Sections:** Dedicated showcases for Projects, Achievements, Patents, Smart India Hackathon Case Studies, and more.

## 🛠️ Tech Stack

### Frontend
- **React 18** (UI Library)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lenis** (Smooth Scrolling)
- **Lucide & React Icons** (Iconography)

### Backend
- **Node.js & Express** (Server)
- **Nodemailer** (Email Service)
- **Zod** (Input Validation)
- **CORS** (Cross-Origin Security)

## 🚀 Getting Started

Want to run this portfolio locally? Follow these steps!

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/Mehtarishita/RishitaMehtaPortfolio.git
cd RishitaMehtaPortfolio
```

### 2. Setup the Backend
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory:
```env
# Google App Password setup for email notifications
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
```
Start the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a new terminal window, navigate to the frontend folder, and install dependencies:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```
Start the frontend development server:
```bash
npm run dev
```

### 4. View it live!
Open your browser and navigate to `http://localhost:5173`. Boom! 💥

## 📂 Project Structure

```text
RishitaMehtaPortfolio/
├── backend/                  # Express server for the contact form
│   ├── controllers/          # API logic (Nodemailer)
│   ├── routes/               # API routes
│   ├── .env                  # Backend secrets (Email credentials)
│   └── server.js             # Entry point
│
└── frontend/                 # React UI
    ├── public/               # Static assets (Logos, PDFs)
    ├── src/
    │   ├── components/       # Reusable UI & Layout components
    │   │   ├── sections/     # Main page sections (Hero, About, etc.)
    │   │   ├── ui/           # Modals, Buttons, Backgrounds
    │   │   └── layout/       # Navbar, Footer
    │   ├── data/             # Content data (experience.ts, etc.)
    │   ├── App.tsx           # Main application shell
    │   └── main.tsx          # React DOM render entry
    └── tailwind.config.js    # Tailwind styling configuration
```

## 📬 Contact & Links

- **LinkedIn:** [Rishita Mehta](https://www.linkedin.com/in/rishitamehta29/)
- **GitHub:** [Mehtarishita](https://github.com/Mehtarishita)
- **Email:** rishitamehta298@gmail.com

---

<div align="center">
  <p>Built with ❤️ by Rishita Mehta</p>
</div>
