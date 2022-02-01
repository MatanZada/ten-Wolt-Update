const Store = require('../models/store');

const addStore = (name, adress, phone) => {
    return new Promise((resolve, reject) => {
        const store = new Store({
            name,
            adress,
            phone
        })
        store.save((err, storeData) => {
            storeData ? resolve(storeData) : reject(err)
        })
    })
}

const findAllStore = () => {
    return new Promise((resolve, reject) => {
        let findStore = Store.find((err, store) => {
            findStore = new Store();
            store ? resolve(store) : reject(err);
        })
    })
}

const findByName = () => {
    return new Promise((resolve, reject) => {
        Store.find((err, client) => {
            client ? resolve(client) : reject(err);
        })
    })
}

module.exports = {
    addStore,
    findAllStore,
    findByName
}