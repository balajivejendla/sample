import request from 'supertest';
import { app } from './backend_server.js'; // Ensure path is correct

describe('POST /hi', () => {
    it('should return 200 for valid data', async () => {
        const res = await request(app)
            .post('/hi')
            .send({ key: 'value' });

        expect(res.statusCode).toEqual(200);
        // If you use res.json("Good"), it might be in res.body
        // If it fails, try expect(res.text).toBe('"Good"')
        expect(res.body).toBe('Good');
    });

    it('should return 400 for empty body', async () => {
        const res = await request(app)
            .post('/hi')
            .send({});

        expect(res.statusCode).toEqual(400);
        // Checking if your error message also matches
        expect(res.body.msg).toBe("Error not good");
    });
});