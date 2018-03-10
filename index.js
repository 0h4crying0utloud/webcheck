
/**
 * Goolge Functions provide the following params:
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

// assumes POST
// are these express based objects? (appear to be)
exports.webcheck = (req, res) => {
    let name = req.body.name;  
    res.status(200).send(`Hello ${name || 'World'}!`);
  };  