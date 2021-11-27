var { NotFound } = require('http-errors');
const contactsOperations = require('../../model/contacts');

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.getContactById(id);
  if (!result) {
    throw new NotFound(`id ${id} not found`);
  }
  res.json({
    status: 'succes',
    code: 200,
    data: { result },
  });
};

module.exports = getContactById;