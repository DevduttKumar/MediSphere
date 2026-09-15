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

-- Sample Data
INSERT INTO HOSPITAL (hospital_id, hospital_name, location, city, state, pincode, contact_num)
VALUES 
('HSP001', 'Max Super Speciality Hospital', '1 2 Press Enclave Marg, Saket', 'Delhi', 'Delhi', 110017, '+91 11 2651 5050'),
('HSP002', 'Fortis Hospital', 'Mulund Goregaon Link Rd', 'Mumbai', 'Maharashtra', 400078, '+91 22 6799 4444'),
('HSP003', 'Medanta Hospital', 'Sector 16', 'Lucknow', 'Uttar Pradesh', 226030, '+91 522 4505050'),
('HSP004', 'Apollo Hospitals', 'Jubilee Hills', 'Hyderabad', 'Telangana', 500033, '+91 40 2360 7777'),
('HSP005', 'AIIMS', 'Ansari Nagar', 'Delhi', 'Delhi', 110029, '+91 11 2658 8500');