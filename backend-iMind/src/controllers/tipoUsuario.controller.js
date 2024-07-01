import { getConnection } from "./../database/database";

const getTiposUsuario = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipo_usuario");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getTipoUsuario = async (req, res) => {
    try {
        const { tipo_usuario_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipo_usuario WHERE tipo_usuario_id = ?", tipo_usuario_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addTiposUsuario = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        if (nombre === undefined || descripcion === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const tipoUsuario = { nombre, descripcion };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tipo_usuario SET ?", tipoUsuario);

        res.json({ message: "Tipo de Usuario added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateTipoUsuario = async (req, res) => {
    try {
        const { tipo_usuario_id } = req.params;
        const { nombre, descripcion } = req.body;

        if (nombre === undefined || descripcion === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE tipo_usuario SET nombre = ?, descripcion = ? WHERE tipo_usuario_id = ?", [nombre, descripcion, tipo_usuario_id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteTipoUsuario = async (req, res) => {
    try {
        const { tipo_usuario_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM tipo_usuario WHERE tipo_usuario_id = ?", tipo_usuario_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getTiposUsuario,
    getTipoUsuario,
    addTiposUsuario,
    updateTipoUsuario,
    deleteTipoUsuario
};
