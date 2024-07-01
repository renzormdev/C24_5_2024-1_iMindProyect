import { Router, response } from "express";
import { methods as ejercicioController } from "./../controllers/ejercicio.controller"

const router=Router();

router.get("/", ejercicioController.getEjercicios);
router.get("/:ejercicio_id", ejercicioController.getEjercicios);
router.post("/", ejercicioController.addEjercicios);
router.delete("/:ejercicio_id", ejercicioController.deleteEjercicio);
router.put("/:ejercicio_id", ejercicioController.updateEjercicio);



export default router;