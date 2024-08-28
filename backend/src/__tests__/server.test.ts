import request from 'supertest'


describe('GET calls', () => {

    /**
     * /api/home
     * /api/projects
     * /api/services
     * /api/services/auditories
     * /api/services/products
     * /api/services/manteinance
     * /api/services/improvement-plans
     * /api/services/digital-kit
     * /api/resources
     * /api/jobs
     */


    it('Layout - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api')
        expect(res.status).toEqual(200)
    })

    it('Home - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/home')
        expect(res.status).toEqual(200)
    })
    it('Services - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/services')
        expect(res.status).toEqual(200)
    })

    it('Services - Auditories - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/services/auditories')
        expect(res.status).toEqual(200)
    })

    it('Services - Products - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/services/products')
        expect(res.status).toEqual(200)
    })

    it('Services - Maintenance - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/services/manteinance')
        expect(res.status).toEqual(200)
    })

    it('Services - Improvement Plans - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/services/improvement-plans')
        expect(res.status).toEqual(200)
    })

    it('Resources - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/resources')
        expect(res.status).toEqual(200)
    })

    it('Jobs - should get 200 OK', async () => {
        const res = await request('http://localhost:4000').get('/api/jobs')
        expect(res.status).toEqual(200)
    })

})