const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const { User } = require('../../models');

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email in use. User with ${email} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);

  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
