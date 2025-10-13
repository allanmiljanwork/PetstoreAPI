// dependencies

const request = require('supertest');

// petstore url

const url = 'https://petstore.swagger.io/v2';

// petstore'i special-key
const apiKey = 'special-key';

// PUT Method
        
      request(url)
      .put('/pet')
      .send({id: 3232, name: 'allan2', photoUrls: [], status: 'available'})
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });