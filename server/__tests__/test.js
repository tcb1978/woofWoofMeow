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

const petowner_id = 1

// describe('Test', () => {
//     test("getOne() should return an animal object.", () => {
//         return request(server).get(`/animal/${petowner_id}`).then(response => {
//             expect(response.statusCode).toBe(200)
//         })
//     })
// })

const request = require('supertest');
const app = require('../index.js')
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get(`/`).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test /get', () => {
    test('It should response the GET method', () => {
        return request(app).get(`/get`).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

// describe('Test the root path', () => {
//     test('It should response the GET method', () => {
//         return request(app).get(`/allusers`).then(response => {
//             expect(response.statusCode).toBe(200)
//         })
//     });
// })

describe('Test /post', () => {
    test('It should response the POST method', () => {
        return request(app).post(`/post`).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test /postmore', () => {
    test('It should response the POST method', () => {
        return request(app).post(`/postmore`).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test /update', () => {
    test('It should response the POST method', () => {
        return request(app).post(`/update`).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test /delete', () => {
    test('It should response the POST method', () => {
        return request(app).post(`/delete`).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})