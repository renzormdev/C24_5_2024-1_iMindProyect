import { getConnection } from "./../database/database";

const getMultimedias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM multimedia");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getMultimedia = async (req, res) => {
    try {
        const { multimedia_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM multimedia WHERE multimedia_id = ?", multimedia_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addMultimedias = async (req, res) => {
    try {
        const { usuario_id, publicacion_id, tipo, titulo, descripcion, contenido, fecha_creacion, duracion, formato } = req.body;

        if (usuario_id === undefined || publicacion_id === undefined || tipo === undefined || titulo === undefined || descripcion === undefined || contenido === undefined || fecha_creacion === undefined || duracion === undefined || formato === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const multimedia = { usuario_id, publicacion_id, tipo, titulo, descripcion, contenido, fecha_creacion, duracion, formato };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO multimedia SET ?", multimedia);

        res.json({ message: "Multimedia added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateMultimedia = async (req, res) => {
    try {
        const { multimedia_id } = req.params;
        const { usuario_id, publicacion_id, tipo, titulo, descripcion, contenido, fecha_creacion, duracion, formato } = req.body;

        if (usuario_id === undefined || publicacion_id === undefined || tipo === undefined || titulo === undefined || descripcion === undefined || contenido === undefined || fecha_creacion === undefined || duracion === undefined || formato === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE multimedia SET usuario_id = ?, publicacion_id = ?, tipo = ?, titulo = ?, descripcion = ?, contenido = ?, fecha_creacion = ?, duracion = ?, formato = ? WHERE multimedia_id = ?", [usuario_id, publicacion_id, tipo, titulo, descripcion, contenido, fecha_creacion, duracion, formato, multimedia_id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteMultimedia = async (req, res) => {
    try {
        const { multimedia_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM multimedia WHERE multimedia_id = ?", multimedia_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getMultimedias,
    getMultimedia,
    addMultimedias,
    updateMultimedia,
    deleteMultimedia
};
