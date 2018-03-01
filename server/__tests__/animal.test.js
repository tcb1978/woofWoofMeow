// const request = require('supertest');
// const animal = require('../controllers/animals_controller');
// const server = require('../index');

// const myAnimal = {
//     "animal_id": 1,
//     "animal_name": "Animal1",
//     "breed": "breed",
//     "age": "5",
//     "weight": "5",
//     "sex": "Male",
//     "animal_avatar": "https://s3-us-west-1.amazonaws.com/woof-woof-meow/dog.jpeg",
//     "animal_about_message": "Good Boy",
//     "user_id": 1
// }

// const petowner_id = 1

// describe('Test', () => {
//     test("getOne() should return an animal object.", () => {
//         return request(server).get(`/animal/${petowner_id}`).then(response => {
//             expect(response.statusCode).toBe(200)
//         })
//     })
// })

const request = require('supertest');
const app = require('../app.js')
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})
