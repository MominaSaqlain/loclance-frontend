# loclance-frontend
Frontend for Loclance project built with Next.js. Provides user interface, authentication, and dashboard features connected to backend APIs.
# Loclance Frontend

This is the **frontend** for the Loclance freelancing platform.  
It is built using **Next.js (React framework)** and connects to the backend APIs for authentication, dashboard, job feed, proposals, and leads.  

---

## 🚀 Features
- Modern UI with Next.js + React
- Authentication pages (Login & Register)
- Dashboard with analytics and charts
- Sidebar & Topbar navigation
- Job Feed, Proposals, Leads, and Profile pages
- Integrated with backend API

---

## ⚙️ Tech Stack
- Next.js (React)
- TailwindCSS / Styled Components (for UI)
- Chart.js / Recharts (for dashboard charts)
- Fetch / Axios (for API calls)

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/loclance-frontend.git
   cd loclance-frontend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env.local file in the root and add:

bash
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:5000/api
⚠️ For deployment, replace the URL with your live backend:

ini
Copy
Edit
NEXT_PUBLIC_API_URL=https://loclance-backend.onrender.com/api
Run the development server:

bash
Copy
Edit
npm run dev
Open in browser:

arduino
Copy
Edit
http://localhost:3000
📡 Pages
/login → Login page

/register → Register page

/dashboard → Main dashboard

/jobs → Job feed

/proposals → Proposals

/leads → Leads

/profile → User profile

📌 Notes
This frontend needs the Loclance Backend running on port 5000 (or live backend URL).

For production, make sure to update the .env.local with correct backend API URL.

📜 License
This project is for educational/internship purposes only.

yaml
Copy
Edit

---

⚡ Suggestion:  
- Backend README = APIs & server setup detail.  
- Frontend README = UI features & how to connect to backend.  


---
