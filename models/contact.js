const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    // owner: {
    //   type: SchemaTypes.ObjectId,
    //   ref: 'user',
    // },
  },
  { versionKey: false, timestamps: true },
);

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'uk', 'pl', 'ca', 'org'] },
    })
    .required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
};
