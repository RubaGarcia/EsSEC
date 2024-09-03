import request from 'supertest';

// Base URL for requests
const baseURL = 'http://localhost:4000';

// Helper function to test GET requests
const testGET = (endpoint, expectedStatus) => {
    it(`${endpoint} - should get ${expectedStatus} ${expectedStatus === 200 ? 'OK' : 'Bad Request'}`, async () => {
        const res = await request(baseURL).get(endpoint);
        expect(res.status).toEqual(expectedStatus);
    });
};

// Helper function to test POST requests
const testPOST = (endpoint, payload, expectedStatus) => {
    it(`${endpoint} - should get ${expectedStatus} ${expectedStatus === 200 ? 'OK' : 'Bad Request'}`, async () => {
        const res = await request(baseURL).post(endpoint).send(payload);
        expect(res.status).toEqual(expectedStatus);
    });
};

describe('GET calls', () => {
    testGET('/api', 200);
    testGET('/api/home', 200);
    testGET('/api/services', 200);
    testGET('/api/services/auditories', 200);
    testGET('/api/services/products', 200);
    testGET('/api/services/manteinance', 200);
    testGET('/api/services/improvement-plans', 200);
    testGET('/api/resources', 200);
    testGET('/api/jobs', 200);
});

describe('POST calls', () => {
    testPOST('/api/', { email: "emailtesting.txu" }, 400);
    testPOST('/api/services/digital-kit', { email: "emailtesting.txu" }, 400);
});


