Folder screenshots näitab API Testimine tarkvaraga 'Insomnia' ja Swagger


petstore.test.js GET POST PUT DELETE meetodid olemas, tekkib error sest korraga teeme teeme ID, uuendame ID ja deletime ID korraga, aga see töötab

petstoreNegative.test.js kontrollib kas input on sobilik API jaoks, aga enamus negative test case'id returnivad 500 mitte 405 nagu API's ettenähtud.

petstoreEdgeCase.test.js kontrollib kui ülemeelitada API't liigselt intergere või stringidega.