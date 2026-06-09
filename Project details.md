# Attendance Management System

## 1. Problem Statement

Managing student attendance manually is time-consuming and prone to errors. Traditional attendance registers make it difficult to maintain accurate records, generate reports, and track student attendance efficiently. The Attendance Management System aims to automate attendance tracking, improve accuracy, and provide easy access to attendance information.

---

## 2. Project Objectives

### Primary Objectives
- Automate the attendance recording process.
- Maintain accurate attendance records.
- Reduce manual errors in attendance management.
- Generate attendance reports efficiently.
- Provide secure access to attendance data.

### Secondary Objectives
- Improve productivity for teachers and administrators.
- Enable quick retrieval of attendance information.
- Support student attendance tracking and analysis.
- Provide a user-friendly interface.
- Enhance transparency in attendance management.

---

## 3. Module List

### 1. User Management
#### Features
- User Registration
- User Login
- User Logout
- Role-Based Access Control

### 2. Student Management
#### Features
- Add Student Details
- Update Student Information
- Delete Student Records
- View Student List

### 3. Attendance Management
#### Features
- Mark Attendance
- Edit Attendance Records
- View Attendance History
- Search Attendance Records

### 4. Report Management
#### Features
- Generate Attendance Reports
- View Monthly Reports
- Student-wise Attendance Reports
- Download Reports

### 5. Dashboard
#### Features
- Attendance Overview
- Total Students Count
- Present/Absent Statistics
- Quick Access to Modules

---

## 4. Table List

### User
| Column Name | Data Type |
|------------|-----------|
| user_id | INT |
| username | VARCHAR(50) |
| password | VARCHAR(255) |
| role | VARCHAR(20) |

### Student
| Column Name | Data Type |
|------------|-----------|
| student_id | INT |
| student_name | VARCHAR(100) |
| department | VARCHAR(50) |
| year | INT |
| email | VARCHAR(100) |

### Attendance
| Column Name | Data Type |
|------------|-----------|
| attendance_id | INT |
| student_id | INT |
| attendance_date | DATE |
| status | VARCHAR(10) |

### Report
| Column Name | Data Type |
|------------|-----------|
| report_id | INT |
| generated_date | DATE |
| report_type | VARCHAR(50) |
| generated_by | INT |

---

## 5. Technologies Used

- HTML
- CSS
- JavaScript
- PHP
- MySQL
- Git & GitHub

---

## 6. Expected Outcome

The Attendance Management System will provide an efficient, accurate, and secure method for managing student attendance, reducing manual work and improving record management.
