const attendanceModel = require("../models/attendanceModel");

const getAttendance = (req, res) => {
  attendanceModel.getAllAttendance((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

const addAttendance = (req, res) => {
  attendanceModel.addAttendance(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({
      message: "Attendance added successfully"
    });
  });
};

module.exports = {
  getAttendance,
  addAttendance,updateAttendance,deleteAttendance
}
const updateAttendance = (req, res) => {
  attendanceModel.updateAttendance(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Attendance updated successfully" });
  });
};

const deleteAttendance = (req, res) => {
  attendanceModel.deleteAttendance(req.params.id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Attendance deleted successfully" });
  });
};