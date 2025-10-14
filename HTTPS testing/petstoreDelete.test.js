// dependencies

const request = require('supertest');

// petstore url

const url = 'https://petstore.swagger.io/v2';

// petstore'i special-key
const apiKey = 'special-key';


// DELETE Method

      request(url)
      .delete('/pet/3232')
      .set('api_key', apiKey)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });