const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
