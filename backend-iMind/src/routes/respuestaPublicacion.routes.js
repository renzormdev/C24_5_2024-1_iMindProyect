import { Router } from "express";
import { methods as respuestaPublicacionController } from "./../controllers/respuestaPublicacion.controller";

const router = Router();

router.get("/", respuestaPublicacionController.getRespuestasPublicacion);
router.get("/:respuesta_id", respuestaPublicacionController.getRespuestaPublicacion);
router.post("/", respuestaPublicacionController.addRespuestasPublicacion);
router.delete("/:respuesta_id", respuestaPublicacionController.deleteRespuestaPublicacion);
router.put("/:respuesta_id", respuestaPublicacionController.updateRespuestaPublicacion);

export default router;
