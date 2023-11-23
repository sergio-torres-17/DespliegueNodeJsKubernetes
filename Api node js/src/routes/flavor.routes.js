
import { Router } from "express";
import { getFlavors , insertFlavor, updateFlavor, deleteFlavor} from "../controllers/flavor.controller.js";

const router = Router()

router.get('/api/flavor',getFlavors)

router.post('/api/flavor',insertFlavor)

router.put('/api/flavor', updateFlavor)

router.delete('/api/flavor', deleteFlavor)
export default router