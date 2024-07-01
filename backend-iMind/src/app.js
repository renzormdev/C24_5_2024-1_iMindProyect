import express from "express";
import morgan from "morgan";
// Routes
import ejercicioRoutes from "./routes/ejercicio.routes";
import multimediaRoutes from "./routes/multimedia.routes";
import publicacionRoutes from "./routes/publicacion.routes";
import respuestaPublicacionRoutes from "./routes/respuestaPublicacion.routes";
import tipoUsuarioRoutes from "./routes/tipoUsuario.routes";
import usuarioRoutes from "./routes/usuario.routes";

const app = express();

// settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/ejercicios", ejercicioRoutes);
app.use("/api/multimedia", multimediaRoutes);
app.use("/api/publicaciones", publicacionRoutes);
app.use("/api/respuesta_publicacion", respuestaPublicacionRoutes);
app.use("/api/tipo_usuario", tipoUsuarioRoutes);
app.use("/api/usuarios", usuarioRoutes);

export default app;
