const { User } = require('../../models');

const getCurrent = async (req, res) => {
  const { subscription, email } = req.user;
  res.json({
    status: 'succes',
    code: 200,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = getCurrent;