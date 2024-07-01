import { Router } from "express";
import { methods as tipoUsuarioController } from "./../controllers/tipoUsuario.controller";

const router = Router();

router.get("/", tipoUsuarioController.getTiposUsuario);
router.get("/:tipo_usuario_id", tipoUsuarioController.getTipoUsuario);
router.post("/", tipoUsuarioController.addTiposUsuario);
router.delete("/:tipo_usuario_id", tipoUsuarioController.deleteTipoUsuario);
router.put("/:tipo_usuario_id", tipoUsuarioController.updateTipoUsuario);

export default router;
