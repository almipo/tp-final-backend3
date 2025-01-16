import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js'; 

// Test para obtener una lista de adopciones
describe('GET /api/adoptions', () => {
  it('should return a list of adoptions', async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('status').eql('success');
  });
});

// Test para obtener los detalles de una adopción
describe('GET /api/adoptions/:aid', () => {
  it('should return details of a specific adoption', async () => {
    const adoptionId = '6789157cdd9a11d6e9568f9d'; // Reemplaza por un ID de adopción válida
    const res = await request(app).get(`/api/adoptions/${adoptionId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('status').eql('success');
    expect(res.body.payload).to.have.property('_id', adoptionId);
  });
});

// Test para crear una adopción
describe('POST /api/adoptions/:uid/:pid', () => {
  it('should create a new adoption', async () => {
    const userId = '6750bbbdf679d2158166d34f'; // Reemplaza por un ID de usuario válida
    const petId = '6750bbbdf679d2158166d34b'; // Reemplaza por un ID de mascota válida
    const res = await request(app).post(`/api/adoptions/${userId}/${petId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('status').eql('success');
    expect(res.body.message).to.equal('Pet adopted');
  });
});
