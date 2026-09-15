# MediSphere 🌐🩺

MediSphere is a modern healthcare and hospital networking web application designed to connect patients with clinical services, verified medical centers, pharmacy essentials, and specialist appointments.

---

## 🚀 Features

- **Medical Center Directory:** Search and browse partner hospitals across major cities with full address and contact details.
- **Appointment Scheduling:** Book clinical consultations across multiple departments (Cardiology, Orthopedics, Pediatrics, etc.).
- **User Authentication:** Account sign-up and login with secure credential hashing.
- **Pharmacy & Clinical Services:** Direct directory of verified medications and medical tests.
- **Responsive Dark/Light Theme:** Built-in dynamic theme switcher with glassmorphism aesthetics.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, React Router 7, Vanilla CSS design tokens.
- **Backend:** Python 3, Flask, Flask-CORS, PyODBC.
- **Database:** Microsoft SQL Server (MSSQL).

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Python 3.10+
- Microsoft SQL Server or SQL Server Docker container

---

### 2. Backend Setup

```bash
cd backend

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure Database
# Copy config.example.ini to config.ini and enter your MSSQL credentials
cp config.example.ini config.ini

# Initialize Database Schema (execute schema.sql in your MSSQL instance)
# sqlcmd -S 127.0.0.1,1433 -U sa -P <your_password> -i schema.sql

# Start the Flask API
python app.py
```
> The API will start on `http://127.0.0.1:5000`.

---

### 3. Frontend Setup

```bash
cd frontend

# Install node dependencies
npm install

# Start Vite dev server
npm run dev
```
> The web application will be live at `http://localhost:5173`.

---

## 📄 License
MIT License
