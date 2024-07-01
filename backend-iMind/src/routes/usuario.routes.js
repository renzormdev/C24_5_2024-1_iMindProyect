import { Router } from "express";
import { methods as usuarioController } from "./../controllers/usuario.controller";

const router = Router();

router.get("/", usuarioController.getUsuarios);
router.get("/:usuario_id", usuarioController.getUsuario);
router.post("/", usuarioController.addUsuarios);
router.delete("/:usuario_id", usuarioController.deleteUsuario);
router.put("/:usuario_id", usuarioController.updateUsuario);

export default router;
