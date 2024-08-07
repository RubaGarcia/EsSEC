import { Router } from "express";



const router = Router()

router.get('/', (req, res) => {
    res.send('Job General')
})

router.get('/:JobId', (req, res) => {
    res.send('Job with id ' + req.params.JobId)
})


router.post('/:jobId', (req, res) => {
    //toma de parmetros por body el email y el CV
    res.send('Job with id ' + req.params.jobId + ' updated')
})


export default router