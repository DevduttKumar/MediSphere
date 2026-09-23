-- schema.sql
CREATE DATABASE MediSphere;
GO

USE MediSphere;
GO

-- 1. Hospitals Table
CREATE TABLE HOSPITAL (
    hospital_id VARCHAR(10) PRIMARY KEY,
    hospital_name VARCHAR(100) NOT NULL,
    location VARCHAR(200) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    pincode INT NOT NULL,
    contact_num VARCHAR(20) NOT NULL
);

-- 2. Users Table
CREATE TABLE USERS (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT GETDATE()
);

-- 3. Appointments Table
CREATE TABLE APPOINTMENT (
    appointment_id INT IDENTITY(1,1) PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    preferred_date DATE NOT NULL,
    department VARCHAR(50) NOT NULL,
    message NVARCHAR(MAX),
    hospital_id VARCHAR(10) NULL,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (hospital_id) REFERENCES HOSPITAL(hospital_id)
);

-- 4. Medicine Table
CREATE TABLE MEDICINE (
    medicine_id VARCHAR(10) PRIMARY KEY,
    medicine_name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    dosage VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    mfg VARCHAR(100) NOT NULL,
    in_stock BIT NOT NULL DEFAULT 1,
    description VARCHAR(255) NULL
);

-- Sample Data
INSERT INTO HOSPITAL (hospital_id, hospital_name, location, city, state, pincode, contact_num)
VALUES 
('HSP001', 'Max Super Speciality Hospital', '1 2 Press Enclave Marg, Saket', 'Delhi', 'Delhi', 110017, '+91 11 2651 5050'),
('HSP002', 'Fortis Hospital', 'Mulund Goregaon Link Rd', 'Mumbai', 'Maharashtra', 400078, '+91 22 6799 4444'),
('HSP003', 'Medanta Hospital', 'Sector 16', 'Lucknow', 'Uttar Pradesh', 226030, '+91 522 4505050'),
('HSP004', 'Apollo Hospitals', 'Jubilee Hills', 'Hyderabad', 'Telangana', 500033, '+91 40 2360 7777'),
('HSP005', 'AIIMS', 'Ansari Nagar', 'Delhi', 'Delhi', 110029, '+91 11 2658 8500');

INSERT INTO MEDICINE (medicine_id, medicine_name, category, dosage, price, mfg, in_stock, description)
VALUES
('MED001', 'Paracetamol 650mg', 'Analgesic / Antipyretic', '650mg Oral Tablet', 35.00, 'GlaxoSmithKline', 1, 'Fast relief for mild-to-moderate fever and headaches.'),
('MED002', 'Amoxicillin 500mg', 'Antibacterial / Antibiotic', '500mg Capsule', 115.50, 'Pfizer', 1, 'Broad-spectrum antibiotic used to treat bacterial infections.'),
('MED003', 'Cetirizine 10mg', 'Antihistamine / Allergy', '10mg Film-coated Tablet', 48.00, 'Sun Pharma', 1, 'Relieves allergic symptoms like watery eyes and runny nose.'),
('MED004', 'Ibuprofen 400mg', 'NSAID / Pain Relief', '400mg Oral Tablet', 62.00, 'Dr. Reddy', 1, 'Anti-inflammatory medicine for arthritis and body pain.'),
('MED005', 'Metformin 500mg', 'Antidiabetic', '500mg Sustained Release', 85.00, 'Cipla', 0, 'First-line medication for type 2 diabetes glycemic control.'),
('MED006', 'Azithromycin 500mg', 'Macrolide Antibiotic', '500mg Oral Tablet', 140.00, 'Mankind Pharma', 1, 'Effective for respiratory, sinus, and skin infections.'),
('MED007', 'Omeprazole 20mg', 'Proton Pump Inhibitor', '20mg Delayed-Release Capsule', 75.00, 'Zydus Cadila', 1, 'Decreases the amount of acid produced in the stomach.'),
('MED008', 'Atorvastatin 10mg', 'Cholesterol / Statin', '10mg Oral Tablet', 120.00, 'Lupin Labs', 1, 'Lowers LDL cholesterol and cardiovascular risk.'),
('MED009', 'Pantoprazole 40mg', 'Gastrointestinal Support', '40mg Gastro-Resistant', 92.00, 'Alkem Labs', 1, 'Treatment for gastroesophageal reflux disease and heartburn.'),
('MED010', 'Vitamin C + Zinc 500mg', 'Nutritional Supplement', 'Chewable Tablet', 60.00, 'Abbott Healthcare', 1, 'Immunity booster supporting cellular health and recovery.');