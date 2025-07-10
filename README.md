# UniManage – Smart University Web App (Client Side)

🚀 **Live Site:** [https://unimanage.netlify.app](https://unimanage.netlify.app)

UniManage is a smart university platform that connects students, faculty, and admins — streamlining course management, event updates, notices, and academic communication.

---

## 🔍 Features

- 🔐 Secure Authentication (Firebase)
- 📚 Course & Routine Viewer
- 📢 Dynamic Notice Board
- 🗓️ Event Management System
- 🧑‍🏫 Role-based Dashboard Support
- 💳 Join Waitlist Integration
- 💡 Responsive Design (Mobile-First)
- 📈 Pricing Plan Showcase

---

## 🛠️ Tech Stack

- **React** – Frontend Framework
- **React Router DOM** – Client-side Routing
- **Tailwind CSS + DaisyUI** – UI Design
- **Firebase** – Authentication
- **AOS** – Scroll Animations
- **Express + MongoDB** – Backend (see server repo)

---

## 📁 Folder Structure

```

src/
├── assets/           # Logos, images
├── components/       # Shared components like Navbar, Footer, SectionTitle
├── pages/            # Main page components (About, Features, Pricing, etc.)
├── App.jsx           # App entry point with routes
└── main.jsx          # ReactDOM root render

````

---

## 🔗 Backend Repository

👉 [unimanage-server-side](https://github.com/Ahammad204/unimanage-server-side)

---

## 🧪 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Ahammad204/unimanage-client-side.git
cd unimanage-client-side
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env` file:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_msg_sender_id
VITE_APP_ID=your_app_id
VITE_SERVER_URL=http://localhost:5000  # or your hosted backend
```

### 4. Run the Project

```bash
npm run dev
```


## 👨‍💻 Developer

**Name:** Kazi Ahammad Ullah
**Role:** Frontend Developer

---


