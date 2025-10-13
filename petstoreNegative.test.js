// dependencies

const request = require('supertest');


// petstore url

const url = 'https://petstore.swagger.io/v2';

// petstore'i special-key
const apiKey = 'special-key';


// Negative test GET Method

request(url)
      .get('/pet/{petId}')
      .query({petId: '-1'})
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });


// Negative test POST Method

 request(url)
      .post('/pet')
      .send({id: 1,  name: [], photoUrls: [], status: ''})
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });

      // Negative test PUT Method

request(url)
      .put('/pet')
      .send({ id: 'a' })
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });

         // Negative test DELETE Method
       request(url)
            .delete('/pet/bla')
            .set('api_key', apiKey)
            .expect('Content-Type', /json/)
            .expect(404)
            .end(function(err, res) {
              if (err) throw err;
              console.log(res.body);
            });

