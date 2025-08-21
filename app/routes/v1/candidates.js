const { get } = require('../../controllers/candidates');

module.exports = (router) => {
    router.get('/candidates', get);
}

/**
 * @swagger
 * /v1/candidates:
 *   get:
 *     summary: Get all candidates
 *     tags: [Candidates]
 *     responses:
 *      200:
 *       description: List of candidates
 */
