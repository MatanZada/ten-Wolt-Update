const express = require("express"),
    app = express()
port = process.env.PORT || 3000;
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const {
    addClient,
    findAllClient,
    findClientByID
} = require('./controller/clientController')

const {
    addStore,
    findAllStore,
    findByName
} = require('./controller/storeController')

const {
    addOrder,
    findAllOrder,
    findOrderByID
} = require('./controller/orderController')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    return res.json({
        hello: "world"
    })
})

mongoose
    .connect("mongodb://0.0.0.0:27017/tenWolt").then(() => {
        app.listen(port, () => {
            console.info(`start server start listening on port http://localhost:${port}`)
        })
    }).catch(err => console.error(err))

app.post('/creating-client', (req, res) => {
    const {
        name,
        adress,
        isVip,
        phone
    } = req.body.data
    addClient(name, adress, isVip, phone)
        .then((client) => res.json(client))
        .catch((err) => res.json(err))
})

app.get('/find-allClients', (req, res) => {
    findAllClient().then((client) => res.json(client)).catch((err) => res.json(err))
})

app.put('/clients/:id', async (req, res, next) => {
    const {
        name,
        adress,
        isVip,
        phone
    } = req.body
    findClientByID(req.body, name, adress, isVip, phone)
        .then((client) => res.json(client))
        .catch(err => res.json(err))
})

app.post('/creating-store', (req, res) => {
    const {
        name,
        adress,
        phone
    } = req.body
    addStore(name, adress, phone)
        .then((store) => res.json(store))
        .catch((err) => res.json(err))
})

app.get('/find-allStore', (req, res) => {
    findAllStore()
        .then((store) => res.json(store))
        .catch((err) => res.json(err))
})

app.get('/store/:name', async (req, res, next) => {
    // console.log(req.body.name);
    findByName(req.body.name)
        .then((store) => res.json(store))
        .catch((err) => res.json(err))
})

app.post('/creating-order', (req, res) => {
    const {
        client,
        store
    } = req.body
    addOrder()
        .then((client, store) => res.json(client, store))
        .catch((err) => res.json(err))
})

app.get('/find-allOrder', (req, res) => {
    findAllOrder()
        .then((client) => res.json(client))
        .catch((err) => res.json(err))
})

app.put('/order/:id', async (req, res, next) => {
    const {
        client,
        store
    } = req.body
    findOrderByID(req.body, client, store)
        .then((order) => res.json(order))
        .catch((err) => res.json(err))

})