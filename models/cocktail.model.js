const { Schema, model } = require('mongoose');

const cocktailSchema = new Schema(
  {
    ingredientAndMeasure: [
      {
        _id: false,
        strIngredient: { type: String },
        strMeasure: { type: String },
      },
    ],
    idDrink: { type: String },
    strDrink: { type: String },
    strCategory: { type: String },
    strIBA: { type: String },
    strAlcoholic: { type: String, enum: ['Alcoholic', 'Non alcoholic', 'Non Alcoholic', 'Optional alcohol', null]},
    strGlass: { type: String },
    strInstructions: { type: String },
    strDrinkThumb: { type: String },
    dateModified: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const cocktailModel = model('cocktail', cocktailSchema);

module.exports = cocktailModel;