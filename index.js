
/**
 * Goolge Functions provide the following params:
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

var ejs = require('ejs');

exports.webcheck = (req, res) => {
  let people = ['test1', 'test2', 'test3'];
  let html = ejs.render('<%- include(\'views/layout\', people); %>', {people: people}, {filename: 'true'});
  res.status(200).send(html);
};  