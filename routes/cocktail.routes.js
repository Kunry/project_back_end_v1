const router = require('express').Router();

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
router.get('/:id', getOne);

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
