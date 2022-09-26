const router = require('express').Router();
const validateToken = require('../middleware/validateToken.middleware');

const {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
} = require('../controller/cocktail.controller');
/**
 * GET
 */
router.get('/', getAll);
router.get('/:id',validateToken, getOne);

/**
 * POST
 */
router.post('/', create);

/**
 * PUT
 */
router.put('/:id', updateOne);

/**
 * DELETE
 */
router.delete('/:id', deleteOne);

module.exports = router;
