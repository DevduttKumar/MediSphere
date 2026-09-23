from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_db_connection

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def index():
    return jsonify({
        "status": "online",
        "service": "MediSphere Backend API",
        "frontend_url": "http://localhost:5173",
        "api_endpoints": [
            "/api/hospitals",
            "/api/pharmacy",
            "/api/appointments",
            "/api/auth/signup",
            "/api/auth/login"
        ]
    })

@app.route('/api/hospitals', methods=['GET'])
def get_hospitals():
    search = request.args.get('search', '').strip()
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection error"}), 500

    cursor = conn.cursor()
    if search:
        cursor.execute(
            """
            SELECT hospital_id, hospital_name, location, city, state, pincode, contact_num 
            FROM HOSPITAL 
            WHERE LOWER(hospital_name) LIKE ? OR LOWER(city) LIKE ?
            """,
            (f"%{search.lower()}%", f"%{search.lower()}%")
        )
    else:
        cursor.execute("SELECT hospital_id, hospital_name, location, city, state, pincode, contact_num FROM HOSPITAL")
    
    cols = [c[0] for c in cursor.description]
    hospitals = [dict(zip(cols, r)) for r in cursor.fetchall()]
    conn.close()
    return jsonify(hospitals)

@app.route('/api/pharmacy', methods=['GET'])
def get_pharmacy():
    search = request.args.get('search', '').strip()
    category = request.args.get('category', '').strip()
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection error"}), 500

    cursor = conn.cursor()
    query = "SELECT medicine_id, medicine_name, category, dosage, price, mfg, in_stock, description FROM MEDICINE WHERE 1=1"
    params = []

    if search:
        query += " AND (LOWER(medicine_name) LIKE ? OR LOWER(category) LIKE ? OR LOWER(mfg) LIKE ?)"
        term = f"%{search.lower()}%"
        params.extend([term, term, term])

    if category and category.lower() != "all":
        query += " AND LOWER(category) LIKE ?"
        params.append(f"%{category.lower()}%")

    cursor.execute(query, params)
    cols = [c[0] for c in cursor.description]
    medicines = []
    for r in cursor.fetchall():
        row_dict = dict(zip(cols, r))
        row_dict['price'] = float(row_dict['price'])
        row_dict['in_stock'] = bool(row_dict['in_stock'])
        medicines.append(row_dict)
    conn.close()
    return jsonify(medicines)

@app.route('/api/appointments', methods=['POST'])
def book_appointment():
    data = request.get_json() or {}
    required = ["name", "email", "phone", "date", "department"]
    if not all(data.get(k) for k in required):
        return jsonify({"error": "Missing required fields"}), 400

    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection error"}), 500

    try:
        cursor = conn.cursor()
        cursor.execute(
            """
            INSERT INTO APPOINTMENT (patient_name, email, phone, preferred_date, department, message, hospital_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (data['name'], data['email'], data['phone'], data['date'], data['department'], data.get('message', ''), data.get('hospital_id'))
        )
        conn.commit()
        return jsonify({"message": "Appointment booked successfully!"}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()

@app.route('/api/auth/signup', methods=['POST'])
def signup():
    data = request.get_json() or {}
    name = data.get("name", "User")
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection error"}), 500

    cursor = conn.cursor()
    cursor.execute("SELECT user_id FROM USERS WHERE email = ?", (email,))
    if cursor.fetchone():
        conn.close()
        return jsonify({"error": "Email already registered"}), 409

    hashed_pw = generate_password_hash(password)
    cursor.execute(
        "INSERT INTO USERS (full_name, email, password_hash) VALUES (?, ?, ?)",
        (name, email, hashed_pw)
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "Account created successfully!", "user": {"email": email, "name": name}}), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection error"}), 500

    cursor = conn.cursor()
    cursor.execute("SELECT user_id, full_name, email, password_hash FROM USERS WHERE email = ?", (email,))
    row = cursor.fetchone()
    conn.close()

    if not row or not check_password_hash(row.password_hash, password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify({"message": "Login successful!", "user": {"email": row.email, "name": row.full_name}}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)