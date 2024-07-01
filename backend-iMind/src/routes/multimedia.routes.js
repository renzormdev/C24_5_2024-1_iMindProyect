import { Router } from "express";
import { methods as multimediaController } from "./../controllers/multimedia.controller";

const router = Router();

router.get("/", multimediaController.getMultimedias);
router.get("/:multimedia_id", multimediaController.getMultimedia);
router.post("/", multimediaController.addMultimedias);
router.delete("/:multimedia_id", multimediaController.deleteMultimedia);
router.put("/:multimedia_id", multimediaController.updateMultimedia);

export default router;
