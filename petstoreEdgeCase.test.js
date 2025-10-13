// dependencies

const request = require('supertest');


// petstore url

const url = 'https://petstore.swagger.io/v2';

// petstore'i special-key
const apiKey = 'special-key';

// Edge Case test GET Method
request(url)
      .get('/pet/{petId}')
      .query({petId: '9999999999'})
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });

// Edge Case test POST Method

const longName = 'a'.repeat(250000);
const longId = '9999999999'.repeat(10);

 request(url)
      .post('/pet')
      .send({id: longId,  name: longName, photoUrls: [''], status: 'available'})
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });

        // Edge Case test PUT Method
request(url)
      .put('/pet')
      .send({ id: longId, name: longName, photoUrls: [''], status: 'available' })
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });
            // Edge Case test DELETE Method
request(url)
      .delete('/pet/' + longId)
      .set('api_key', apiKey)
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });