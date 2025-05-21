# 📦 Price List & Terms Web Application

A fully responsive, multilingual web application with a dynamic price list and a terms page. Built using **React + Vite** for the frontend and **Fastify + Sequelize** for the backend. It uses **PostgreSQL** (hosted on Supabase) and is deployed on **Vercel** (frontend) and **Render** (backend).

---

## 🔗 Live Demo

* **Frontend - Price List Page**: [https://sow1.vercel.app/](https://sow1.vercel.app/)
* **Frontend - Terms Page**: [https://sow1.vercel.app/terms](https://sow1.vercel.app/terms)
* **Backend API**: [https://backend-price-list.onrender.com](https://backend-price-list.onrender.com)

---

## 💠 Tech Stack

### Frontend:

* **React 19**
* **Vite**
* **Material UI (MUI)**
* **React Icons**
* **React Router DOM (v7)**
* **Fully Responsive Layout**
* **Language Switcher (English & Svenska)**

### Backend:

* **Fastify**
* **Sequelize**
* **PostgreSQL** (via [Supabase](https://supabase.com/))
* **CORS**
* **Hosted on Render**

---

## ✨ Features

### ✅ **1. Price List Page**

**URL**: `/`

* Displays a list of products with:

  * Article Number
  * In Price
  * Final Price
  * Unit
  * Stock Info
  * Description
  * Product/Service category
* Supports **inline editing** and **instant updates** via PUT requests.
* Data fetched dynamically from backend (`/products` route).
* Fully **responsive UI**:

  * **Large screens** show all columns.
  * **Small screens** hide less relevant info and toggle the sidebar with a hamburger menu.

### ✅ **2. Terms Page**

**URL**: `/terms`

* Displays language-specific **Terms & Conditions** from the backend.
* Supports **dynamic language switcher** (English 🇬🇧 / Svenska 🇸🇪).
* Content is fetched via the `/terms/:lang` endpoint from backend.
* Also includes responsive design and clean UI presentation.

---

## 📆 Backend API

**Base URL**: [https://backend-price-list.onrender.com](https://backend-price-list.onrender.com)

### Routes:

| Method | Route              | Description                                        |
| ------ | ------------------ | -------------------------------------------------- |
| GET    | `/products`        | Fetch all products                                 |
| PUT    | `/products/:id`    | Update a specific product                          |
| GET    | `/terms/:language` | Fetch terms content by language (e.g., `eg`, `sv`) |

---

## 📓 Environment Variables

For local development, create a `.env` file and use the following (example):

```env
DB_HOST=db.wtiampzsiqwrbblrbkiq.supabase.co
DB_PORT=5432
DB_USER=postgres
DB_PASS=12345678
DB_NAME=postgres
```

---

## 📁 Project Structure

```
.
├── backend_price_list/
│   └── index.js              # Fastify backend logic
│   └── package.json
├── price_list/
│   └── src/
│       └── Pages/
│           └── Pricelist.jsx
│           └── Terms.jsx
│   └── App.js
│   └── package.json
│   └── vercel.json           # Needed for client-side routing on Vercel
```

---

## ⚙️ Deployment Details

| Layer    | Platform | URL                                                                                |
| -------- | -------- | ---------------------------------------------------------------------------------- |
| Frontend | Vercel   | [https://sow1.vercel.app](https://sow1.vercel.app)                                 |
| Backend  | Render   | [https://backend-price-list.onrender.com](https://backend-price-list.onrender.com) |
| Database | Supabase | PostgreSQL (hosted)                                                                |

---

## 🧪 Scripts

### Frontend

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build production version |
| `npm run preview` | Preview built project    |
| `npm run lint`    | Run linter               |

### Backend

| Command     | Description        |
| ----------- | ------------------ |
| `npm start` | Run Fastify server |

---

## 📄 License

This project is licensed under the MIT License.
