const { isValidObjectId } = require('mongoose');
const cocktailModel = require('../models/cocktail.model');

const getAll = (req, res, next) => {
  const { offset = 0, limit = 10 } = req.query;
  let cocktails;
  cocktailModel
    .find()
    .limit(limit)
    .skip(limit * offset)
    .sort({ createdAt: -1 })
    .lean()
    .then((cocktailsData) => {
      cocktails = cocktailsData;
      return cocktailModel.countDocuments();
    })
    .then((countCocktail) => {
      res
        .status(200)
        .json({
          results: cocktails,
          page: +offset,
          maxPage: Math.floor(countCocktail / +limit),
        });
    })
    .catch(next);
};
const getOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error('Error: Invalid mongo ID');
    }
    cocktailModel
      .findById(id)
      .then((cocktail) => {
        res.status(200).json(cocktail);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};
const create = (req, res, next) => {
  const {
    ingredientAndMeasure,
    idDrink,
    strDrink,
    strCategory,
    strIBA,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    dateModified,
  } = req.body;
  console.log(req.body);
  cocktailModel
    .create({
      ingredientAndMeasure,
      idDrink,
      strDrink,
      strCategory,
      strIBA,
      strAlcoholic,
      strGlass,
      strInstructions,
      strDrinkThumb,
      dateModified,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
};
const updateOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error('Error: Invalid mongo ID');
    }
    const {
      ingredientAndMeasure,
      idDrink,
      strDrink,
      strCategory,
      strIBA,
      strAlcoholic,
      strGlass,
      strInstructions,
      strDrinkThumb,
      dateModified,
    } = req.body;

    cocktailModel
      .findByIdAndUpdate(id, {
        ingredientAndMeasure,
        idDrink,
        strDrink,
        strCategory,
        strIBA,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        dateModified,
      })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};
const deleteOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error('Error: Invalid mongo ID');
    }
    cocktailModel
      .findByIdAndDelete(id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
};
