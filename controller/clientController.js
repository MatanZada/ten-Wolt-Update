const res = require('express/lib/response');
const Client = require('../models/client');

const addClient = (name, adress, isVip, phone) => {
    return new Promise((resolve, reject) => {
        const client = new Client({
            name,
            adress,
            isVip,
            phone
        })
        client.save((err, clientData) => {
            clientData ? resolve(clientData) : reject(err)
        })
    })
}

const findAllClient = () => {
    return new Promise((resolve, reject) => {
        let findClient = Client.find((err, client) => {
            findClient = new Client();
            client ? resolve(client) : reject(err);
        })
    })
}
const findClientByID = (_id, updateClient) => {
    return new Promise((resolve, reject) => {
        Client.findByIdAndUpdate(_id, updateClient)
            .then((client) => resolve(client))
            .catch((err) => reject(err));
    });
}

module.exports = {
    addClient,
    findAllClient,
    findClientByID
}