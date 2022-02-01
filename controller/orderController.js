const Order = require('../models/order');

const addOrder = () => {
    return new Promise((resolve, reject) => {
        const order = new Order({
            client,
            store
        })
        order.save((err, orderData) => {
            orderData ? resolve(orderData) : reject(err)
        })
    })
}

const findAllOrder = () => {
    return new Promise((resolve, reject) => {
        let findOrder = Order.find((err, order) => {
            findOrder = new Order(req.body._id);
            order ? resolve(order) : reject(err);
        })
    })
}

const findOrderByID = (_id, updateOrder) => {
    return new Promise((resolve, reject) => {
        Order.findByIdAndUpdate(_id, updateOrder)
            .then((order) => resolve(order))
            .catch((err) => reject(err));

    })
}

module.exports = {
    addOrder,
    findAllOrder,
    findOrderByID
}