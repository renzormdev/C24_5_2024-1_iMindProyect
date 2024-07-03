import { getConnection } from "./../database/database";

const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuario");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUsuario = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuario WHERE usuario_id = ?", usuario_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addUsuarios = async (req, res) => {
    try {
        const { tipo_usuario_id, nombre, correo, contrasena, fecha_creacion } = req.body;

        if (tipo_usuario_id === undefined || nombre === undefined || correo === undefined || contrasena === undefined || fecha_creacion === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const usuario = { tipo_usuario_id, nombre, correo, contrasena, fecha_creacion };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuario SET ?", usuario);

        res.json({ message: "Usuario added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const { tipo_usuario_id, nombre, correo, contrasena, fecha_creacion } = req.body;

        if (tipo_usuario_id === undefined || nombre === undefined || correo === undefined || contrasena === undefined || fecha_creacion === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all fields" });
        }

        const connection = await getConnection();
        const result = await connection.query("UPDATE usuario SET tipo_usuario_id = ?, nombre = ?, correo = ?, contrasena = ?, fecha_creacion = ? WHERE usuario_id = ?", [tipo_usuario_id, nombre, correo, contrasena, fecha_creacion, usuario_id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuario WHERE usuario_id = ?", usuario_id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const registerUsuario = async (req, res) => {
    const { tipo_usuario_id, nombre, correo, contrasena } = req.body;

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ where: { correo } });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        // Crear el nuevo usuario
        const nuevoUsuario = await Usuario.create({
            tipo_usuario_id,
            nombre,
            correo,
            contrasena: hashedPassword,
            fecha_creacion: new Date()
        });

        res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario', error });
    }
};

export const methods = {
    getUsuarios,
    getUsuario,
    addUsuarios,
    updateUsuario,
    deleteUsuario,
    registerUsuario
};
