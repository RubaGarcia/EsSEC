import { Router } from "express";



const router = Router()

router.get('/', (req, res) => {
    res.send('Digital Kit General')
})

router.post('/', (req, res) => {
    res.send('Digital Kit Post')
})


export default router