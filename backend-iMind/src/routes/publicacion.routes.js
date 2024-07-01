import { Router } from "express";
import { methods as publicacionController } from "./../controllers/publicacion.controller";

const router = Router();

router.get("/", publicacionController.getPublicaciones);
router.get("/:publicacion_id", publicacionController.getPublicacion);
router.post("/", publicacionController.addPublicaciones);
router.delete("/:publicacion_id", publicacionController.deletePublicacion);
router.put("/:publicacion_id", publicacionController.updatePublicacion);

export default router;
