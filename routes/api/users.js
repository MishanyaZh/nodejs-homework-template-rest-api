const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { joiSignupSchema, joiLoginSchema } = require('../../models/user');

const router = express.Router();

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
// "/register"

module.exports = router;
