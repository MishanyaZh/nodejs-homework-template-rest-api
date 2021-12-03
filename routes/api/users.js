const express = require('express');

const { validation, ctrlWrapper, auth } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { joiSignupSchema, joiLoginSchema } = require('../../models/user');

const router = express.Router();
// "/register"
router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
