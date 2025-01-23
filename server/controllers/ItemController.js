const Item = require('../db/models/ItemSchema');

module.exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({ message: 'get all items', items });
    } catch (e) {
        console.log('error finding all items', e);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.postItem = async (req, res) => {
    try {
        const item = await Item.create({
            itemName: req.body.itemName,
            description: req.body.description,
            price: req.body.price,
        });
        res.status(200).json({ message: 'Menu created successfully', item });
    } catch (e) {
        res.status(500).json({
            message: 'An error occurred while creating the item',
            error: e.message || e,
        });
    }
};
