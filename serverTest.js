const express = require('express')
const app = express()
const fetch = require('node-fetch'); 

app.get('/testProxy', (req, res) => {
    return fetch(decodeURI(req.query.url))
    .then(fres => fres.text())
    .then(html => res.status(200).send(html))
    .catch(e => {
      console.log(e);
      res.status(500).send('sorry!');
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

