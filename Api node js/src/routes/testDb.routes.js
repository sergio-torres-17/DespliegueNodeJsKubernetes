import { Router } from "express";
import { pool } from "../db.js";

const router = Router()

router.get('/api/echo', async (req, res)=>{
    if(!pool) res.send({status: "Failure"})
    res.send({status: "The service is Up!"})
})
export default router;