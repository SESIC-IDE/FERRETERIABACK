import pool from "../config/db.js";

export const getProductos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
