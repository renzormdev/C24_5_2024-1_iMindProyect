import { getConnection } from "./../database/database";

const getRespuestasPublicacion = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM respuesta_publicacion");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getRespuestaPublicacion = async (req, res) => {
    try {
        const { respuesta_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM respuesta_publicacion WHERE respuesta_id = ?", respuesta_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addRespuestasPublicacion = async (req, res) => {
    try {
        const { publicacion_id, usuario_id, contenido, fecha_creacion } = req.body;

        if (publicacion_id === undefined || usuario_id === undefined || contenido === undefined || fecha_creacion === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const respuestaPublicacion = { publicacion_id, usuario_id, contenido, fecha_creacion };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO respuesta_publicacion SET ?", respuestaPublicacion);

        res.json({ message: "Respuesta Publicacion added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateRespuestaPublicacion = async (req, res) => {
    try {
        const { respuesta_id } = req.params;
        const { publicacion_id, usuario_id, contenido, fecha_creacion } = req.body;

        if (publicacion_id === undefined || usuario_id === undefined || contenido === undefined || fecha_creacion === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE respuesta_publicacion SET publicacion_id = ?, usuario_id = ?, contenido = ?, fecha_creacion = ? WHERE respuesta_id = ?", [publicacion_id, usuario_id, contenido, fecha_creacion, respuesta_id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteRespuestaPublicacion = async (req, res) => {
    try {
        const { respuesta_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM respuesta_publicacion WHERE respuesta_id = ?", respuesta_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getRespuestasPublicacion,
    getRespuestaPublicacion,
    addRespuestasPublicacion,
    updateRespuestaPublicacion,
    deleteRespuestaPublicacion
};
