const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
