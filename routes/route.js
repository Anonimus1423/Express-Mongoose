// Importing router
import { Router } from "express";

// Init router
const router = Router()

// Index
router.get('/', async (req, res) => 
{
    res.render("Index", 
    {

    })
})

export default router;