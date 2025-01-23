const User = require('../db/models/UserSchema');

module.exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ message: 'get all users', user });
  } catch (e) {
    console.log('error finding users', e);
    res.status(500).json({ message: 'error' });
  }
};

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json({ message: '', user });
  } catch (e) {
    res.status(500).json({ message: 'internal error', e });
  }
};
