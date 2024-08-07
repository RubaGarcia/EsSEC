import { Router } from "express";



const router = Router()


router.get('/', (req, res) => {
    res.send('Projects General')
})


router.get('/:projectId', (req, res) => {
    res.send('Project with id ' + req.params.projectId)
})

export default router