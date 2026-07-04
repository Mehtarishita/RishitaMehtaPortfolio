# Portfolio Documentation

Welcome to the documentation for your new full-stack portfolio! This guide will walk you through setting everything up, understanding the architecture, and updating your content over time.

## 📁 Folder Structure & Purpose

The project is structured as a monorepo containing both the frontend (React) and the backend (Node.js).

```text
RishitaMehtaPortfolio/
├── frontend/                  # React 19 + Vite frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── layout/        # Navbar, Footer
│   │   │   ├── sections/      # Hero, About, Projects, etc.
│   │   │   └── ui/            # Buttons, Modals, etc.
│   │   ├── data/              # TS files containing your site's content (e.g., projects.ts)
│   │   ├── utils/             # Helper functions (e.g., tailwind class merger)
│   │   ├── App.tsx            # Main layout and scroll setup
│   │   └── index.css          # Global Tailwind styles & custom animations
│   ├── tailwind.config.js     # Custom theme colors (Deep Purple, Electric Blue)
│   └── package.json           # Frontend dependencies
│
└── backend/                   # Node.js + Express backend
    ├── config/                # Database connection logic
    ├── controllers/           # Business logic (handling contact form, emails)
    ├── models/                # Mongoose database schemas
    ├── routes/                # API endpoints
    ├── server.js              # Entry point for the Express app
    └── package.json           # Backend dependencies
```

---

## 🛠️ Local Setup & Running the Project

### 1. Backend Setup

The backend handles contact form submissions. It validates the data, saves it to a MongoDB database, and sends you an email via Nodemailer.

1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a file named `.env` in the `backend` folder and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_app_password
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the server: `npm run dev`

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `frontend` folder:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the development server: `npm run dev`

---

## 💾 Database Setup (MongoDB Atlas)

To store your contact messages, you need a free MongoDB database.

1. **Create an Account:** Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and sign up.
2. **Create a Cluster:** Choose the FREE tier (M0) and deploy it.
3. **Database Access (Credentials):** Under "Security" > "Database Access", create a new database user. Remember the username and password.
4. **Network Access (Whitelist IP):** Under "Security" > "Network Access", click "Add IP Address" and choose **"Allow Access from Anywhere" (0.0.0.0/0)**. This is crucial so your deployed Render backend can connect to it.
5. **Get Connection String:** Go back to "Database" > "Connect" > "Connect your application". Copy the connection string. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`
6. Replace `<username>` and `<password>` with your credentials, and paste this entire string into your backend `.env` file as `MONGO_URI`.

---

## 📧 Email Notifications Setup (Nodemailer)

To receive emails when someone fills out your contact form:

1. You cannot use your normal Gmail password. You must use an **App Password**.
2. Go to your Google Account Settings > Security.
3. Enable **2-Step Verification** if it isn't already.
4. Search for **"App Passwords"** in the settings search bar.
5. Create a new app password (name it something like "Portfolio").
6. Copy the generated 16-character password and paste it into your `.env` file as `EMAIL_PASS`. Put your email in `EMAIL_USER`.

---

## ✏️ How to Update Content (Data Files)

Your site is built using a data-driven architecture. This means you **never have to touch the complex React component code** to add new achievements, projects, or experiences.

Everything lives in `frontend/src/data/`.

### Adding a New Project
Open `frontend/src/data/projects.ts` and add a new object to the array:
```typescript
{
  id: "new-project",
  title: "My New Project",
  category: "Web App",
  shortDescription: "A brief one-liner.",
  coverImage: "/images/project-cover.png", // Path to image in the public folder
  techStack: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  // ... fill out the rest of the fields
}
```

*Note: For images, place your `.png` or `.jpg` files inside the `frontend/public/` folder, and reference them like `/image-name.png`.*

### Updating Resume
Drop your PDF file into `frontend/public/` and name it exactly **`resume.pdf`**. It will automatically be linked across the site.

---

## 🚀 Deployment Guide

### Deploying the Backend to Render.com
Render is a great free hosting platform for Node.js apps.

1. Push your entire monorepo code to GitHub.
2. Go to [Render.com](https://render.com), sign in, and click "New" > "Web Service".
3. Connect your GitHub repository.
4. **Settings:**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. **Environment Variables:** Add all the variables from your local backend `.env` file (MONGO_URI, EMAIL_USER, etc.). *Do not set FRONTEND_URL yet, you'll update it later.*
6. Click Deploy. Once live, copy your backend URL (e.g., `https://portfolio-backend.onrender.com`).

### Deploying the Frontend to Vercel
Vercel is the best platform for React/Vite apps.

1. Go to [Vercel.com](https://vercel.com) and sign in.
2. Click "Add New Project" and import your GitHub repository.
3. **Settings:**
   - Root Directory: `frontend`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Environment Variables:** Add `VITE_API_URL` and set it to your deployed Render backend URL + `/api` (e.g., `https://portfolio-backend.onrender.com/api`).
5. Click Deploy.

### Final Step (CORS)
Once your Vercel frontend is live, go back to Render, and update the `FRONTEND_URL` environment variable to match your exact Vercel URL (e.g., `https://rishita-portfolio.vercel.app`). This fixes CORS errors and allows your frontend to talk to your backend securely.

---

## 🎨 Customizing the Theme

If you ever want to change the deep purple and blue theme:
1. Open `frontend/tailwind.config.js`.
2. Edit the hex codes under `theme.extend.colors`.
3. Open `frontend/src/index.css` and update the HSL values at the top to match your new hex codes (these are used for specific opacity calculations).

Enjoy your new portfolio!
