const { Contact } = require('../../models');

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id }).populate(
    'owner',
    '_id email subscription',
  );
  res.json({
    status: 'succes',
    code: 200,
    data: { result: contacts },
  });
};

module.exports = listContacts;
