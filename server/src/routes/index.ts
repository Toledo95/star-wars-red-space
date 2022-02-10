import { Router } from "express";
import * as controller from "../controllers";

const router = Router();

router.get("/", controller.index);
router.get("/star-wars", controller.getAll);
router.get("/star-wars/:id", controller.getCharacter);

export default router;
