import { Router } from "express";



const router = Router()


router.get('/', 
    //TODO:Return data
    (req, res) => {
        res.send('get home')
    })


export default router