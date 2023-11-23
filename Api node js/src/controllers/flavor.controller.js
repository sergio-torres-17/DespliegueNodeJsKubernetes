import { pool } from "../db.js";

export const getFlavors = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM flavors')
        if (rows.length == 0) {
            res.json({ description: "No has Rows" })
        } else {
            res.json(rows)
        }
    } catch (error) {
        var response = {
            "Status": "Error",
            "Obj": error
        }
        res.json(response)
    }

}

export const insertFlavor = async (req, res) => {
    const { name, quantity } = req.body
    const [rows] = await pool.query('INSERT INTO flavors(name, quantity_kg_stock) VALUES(?, ?)', [name, quantity])
    console.log(req.body);
    res.json(rows)
}
export const updateFlavor = async (req, res) => {
    const { name, newQuantity } = req.body
    const [rows] = await pool.query('UPDATE flavors SET quantity_kg_stock = ? WHERE name = ?', [newQuantity, name])
    res.json({ affectedRows: rows.affectedRows })
}

export const deleteFlavor = async (req, res) => {
    const { name } = req.body
    const [rows] = await pool.query('DELETE FROM flavors WHERE Name = ?', [name])

    if (rows.affectedRows > 0) {
        res.json({ Message: 'The flavor was deleted successfully' })
    } else {
        res.json({ Message: 'The flavor was not found! :(' })
    }
}