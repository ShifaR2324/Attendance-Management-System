const db = require("../config/db");

const getAllAttendance = (callback) => {
  db.query("SELECT * FROM students", callback);
};

const addAttendance = (data, callback) => {
  const sql =
    "INSERT INTO students (name, department, attendance, date) VALUES (?, ?, ?, ?)";
  db.query(
    sql,
    [data.name, data.department, data.attendance, data.date],
    callback
  );
};

module.exports = {
  getAllAttendance,
  addAttendance,updateAttendance,deleteAttendance
};
const updateAttendance = (id, data, callback) => {
  const sql =
    "UPDATE students SET name=?, department=?, attendance=?, date=? WHERE id=?";
  db.query(
    sql,
    [data.name, data.department, data.attendance, data.date, id],
    callback
  );
};

const deleteAttendance = (id, callback) => {
  db.query("DELETE FROM students WHERE id=?", [id], callback);
};