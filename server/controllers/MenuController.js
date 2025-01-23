const Menu = require('../db/models/MenuSchema');

module.exports.getMenus = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json({ message: 'get all menu', menu });
  } catch (e) {
    console.log('error finding all menus', e);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports.postMenu = async (req, res) => {
  try {
    const menu = await Menu.create({
      menuName: req.body.menuName,
      description: req.body.description,
    });

    res
      .status(200)
      .json({ message: 'Menu created successfully', menu });
  } catch (e) {
    res.status(500).json({
      message: 'An error occurred while creating the menu',
      error: e.message || e,
    });
  }
};