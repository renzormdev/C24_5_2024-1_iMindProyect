import { getConnection } from "./../database/database";

const getPublicaciones = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM publicacion");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPublicacion = async (req, res) => {
    try {
        const { publicacion_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM publicacion WHERE publicacion_id = ?", publicacion_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addPublicaciones = async (req, res) => {
    try {
        const { usuario_id, tipo_usuario_id, titulo, descripcion, fecha_creacion, multimedia } = req.body;

        if (usuario_id === undefined || tipo_usuario_id === undefined || titulo === undefined || descripcion === undefined || fecha_creacion === undefined || multimedia === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const publicacion = { usuario_id, tipo_usuario_id, titulo, descripcion, fecha_creacion, multimedia };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO publicacion SET ?", publicacion);

        res.json({ message: "Publicacion added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatePublicacion = async (req, res) => {
    try {
        const { publicacion_id } = req.params;
        const { usuario_id, tipo_usuario_id, titulo, descripcion, fecha_creacion, multimedia } = req.body;

        if (usuario_id === undefined || tipo_usuario_id === undefined || titulo === undefined || descripcion === undefined || fecha_creacion === undefined || multimedia === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE publicacion SET usuario_id = ?, tipo_usuario_id = ?, titulo = ?, descripcion = ?, fecha_creacion = ?, multimedia = ? WHERE publicacion_id = ?", [usuario_id, tipo_usuario_id, titulo, descripcion, fecha_creacion, multimedia, publicacion_id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletePublicacion = async (req, res) => {
    try {
        const { publicacion_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM publicacion WHERE publicacion_id = ?", publicacion_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getPublicaciones,
    getPublicacion,
    addPublicaciones,
    updatePublicacion,
    deletePublicacion
};
