import { pool } from "../connect.js";
import moment from "moment/moment.js";
export const postArduino = async (req, res) => {
  try {

    const q = "INSERT INTO desinfectados (fecha, estado) VALUES (?, ?)";
    const value = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const estado = req.body.estado
    const [rows] = await pool.query(q, [value, estado]);
    res.status(200).json(rows);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

export const getArduino = async (req, res) => {
  try {
    const q = "SELECT * FROM desinfectados";
    const [rows] = await pool.query(q);
    res.status(200).json(rows);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};
