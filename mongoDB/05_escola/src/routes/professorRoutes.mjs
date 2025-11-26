import { Router } from "express";
import {
  getProfessores,
  getProfessor,
  createProfessor,
  updateProfessor,
  deleteProfessor,
} from "../controllers/professorController.mjs";
import { autenticarToken } from "../midlewares/authMiddleware.mjs";

const router = Router();

router.use(autenticarToken);

router.get("/", getProfessores);
router.get("/:id", getProfessor);
router.post("/", createProfessor);
router.put("/:id", updateProfessor);
router.delete("/:id", deleteProfessor);

export default router;
