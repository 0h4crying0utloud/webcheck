
/**
 * Goolge Functions provide the following params:
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

const ejs = require('ejs');
const fetch = require('node-fetch'); 

exports.webcheck = (req, res) => {
  let pages = ['http://cars.com', 'test2', 'test3'];
  let html = ejs.render('<%- include(\'views/layout\', pages); %>', {pages: pages}, {filename: 'true'});
  res.status(200).send(html);
};      

exports.proxyPage = (req, res) => {
  return fetch(decodeURI(req.query.url))
  .then(fres => fres.text())
  .then(html => res.status(200).send(html))
  .catch(e => {
    console.log(e);
    res.status(500).send('sorry!');
  })
};  


