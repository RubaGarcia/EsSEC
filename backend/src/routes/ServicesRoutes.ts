import { Router } from "express";



const router = Router()


router.get('/', (req, res) => {
    res.send('Services General');
});

router.get('/auditories', (req, res) => {
    res.send('Auditories');
});

router.get('/products', (req, res) => {
    res.send('Products');
});

router.get('/manteinance', (req, res) => {
    res.send('Manteinance');
});

router.get('/improvement-plans', (req, res) => {
    res.send('Improvement Plans');
});




export default router