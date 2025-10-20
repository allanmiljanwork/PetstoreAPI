// dependencies

const request = require('supertest');


// petstore url

const url = 'https://petstore.swagger.io/v2';

// petstore'i special-key
const apiKey = 'special-key';

// Test for 405 response kasutades /pet/{petId}

request(url)
      .put('/pet/1')
      .send({id: 1,  name: [], photoUrls: [], status: ''})
      .set('api_key', apiKey)
      .expect('Content-Type', /xml/)
      .expect(405)
      .end(function(err, res) {
        if (err) throw err;
        console.log("got 405, aga ei update'i Res body?", res.body);
      });
      

      
request(url)
      .patch('/pet/1')
      .send({id: 1,  name: [], photoUrls: [], status: ''})
      .set('api_key', apiKey)
      .expect('Content-Type', /xml/)
      .expect(405)
      .end(function(err, res) {
        if (err) throw err;
        console.log("got 405, aga ei update'i Res body?", res.body);
      });

      // test for 405, kui expect 404

      request(url)
      .put('/pet/1')
      .send({id: 1,  name: [], photoUrls: [], status: ''})
      .set('api_key', apiKey)
      .expect('Content-Type', /xml/)
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });
      

      
request(url)
      .patch('/pet/1')
      .send({id: 1,  name: [], photoUrls: [], status: ''})
      .set('api_key', apiKey)
      .expect('Content-Type', /xml/)
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
      });

      