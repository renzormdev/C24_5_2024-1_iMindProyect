import { getConnection } from "./../database/database";

const getEjercicios = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ejercicio_id, tipo, titulo, descripcion, contenido, fecha_creacion FROM ejercicio");
        console.log(result);
        res.json(result);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }    
};

const getEjercicio = async (req, res)=>{
    try {
        const { ejercicio_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT ejercicio_id, tipo, titulo, descripcion, contenido, fecha_creacion FROM ejercicio WHERE ejercicio_id = ?", ejercicio_id);
        console.log(result);
        res.json(result);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }    
};

const addEjercicios = async (req, res)=>{
    try {
        const { ejercicio_id, tipo, titulo, descripcion, contenido, fecha_creacion } = req.body;
        
        if(ejercicio_id==undefined || tipo==undefined || titulo==undefined || descripcion==undefined || contenido==undefined || fecha_creacion==undefined){
            res.status(400).json({message:"Bad request. Please fill all fields"})
        }

        const ejercicio={ejercicio_id,tipo,titulo,descripcion,contenido,fecha_creacion};
        const connection = await getConnection();
        const result=await connection.query("INSERT INTO ejercicio SET ?", ejercicio);

        res.json({ message: "Ejercicio added"});
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }    
};

const updateEjercicio = async (req, res) => {
    try {
        const { ejercicio_id } = req.params;
        const { tipo, titulo, descripcion, contenido, fecha_creacion } = req.body;

        if (ejercicio_id === undefined || tipo === undefined || titulo === undefined || descripcion === undefined || contenido === undefined || fecha_creacion === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE ejercicio SET tipo = ?, titulo = ?, descripcion = ?, contenido = ?, fecha_creacion = ? WHERE ejercicio_id = ?", [tipo, titulo, descripcion, contenido, fecha_creacion, ejercicio_id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const deleteEjercicio = async (req, res)=>{
    try {
        const { ejercicio_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM ejercicio WHERE ejercicio_id = ?", ejercicio_id);
        console.log(result);
        res.json(result);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }    
};

export const methods = {
    getEjercicios,
    getEjercicio,
    addEjercicios,
    deleteEjercicio,
    updateEjercicio
};