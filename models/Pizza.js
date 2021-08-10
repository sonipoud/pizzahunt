const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema ({
    pizzaNmae: {
        type: String
    },
    createdBy: {
        type: String
    },
    cratedAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

const Pizza = model ('Pizza', PizzaSchema);

module.exports = Pizza;
