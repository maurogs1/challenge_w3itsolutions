// country.test.ts
import { server } from '../src/server';
import { connectToDatabase, disconnectFromDatabase } from '../database/config';
import supertest from 'supertest';

beforeAll(async () => {
  await connectToDatabase();
});

describe('GET /countries,  ', () => {
  test('It should response with a 200 status code', async () => {
    const response = await supertest(server).get('/countries').query({ name: 'india' });
    expect(response.statusCode).toBe(200);
  })
  test('It should response with an element with name India', async () => {
    const response = await supertest(server).get('/countries').query({ name: 'india' });
    expect(response.body.data[0].name).toBe('India');
  }),  
  test('It should response with a percentage of 25.76', async ()=>{
    const response = await supertest(server).get('/countries').query({ name: 'india' });
    let percentage = response.body.data[0].percentage.slice(0,5);
    expect(percentage).toBe("25.76");
  }),
  test('It should response with a 204 status code', async () => {
    const response = await supertest(server).get('/countries').query({ name: 'in' });
    expect(response.statusCode).toBe(204);
  }),
  test('It should response with a 404 status code', async () => {
    const response = await supertest(server).get('/countries').query({ name: 'holaaa' });
    expect(response.statusCode).toBe(404);
  })
 

});

afterAll(async () => {
  await disconnectFromDatabase();
  await new Promise(resolve => server.close(resolve));
});


