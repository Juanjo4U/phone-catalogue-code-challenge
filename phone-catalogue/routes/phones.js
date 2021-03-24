var express = require('express');
var router = express.Router();
const phones = require('../utils/phones.json');

router.get('/', function (req, res, next) {
    setTimeout(() => {
        res.send(phones);
    }, 1000);
});

router.get('/:id', function (req, res, nex) {
    const id = req.params.id;
    if (id !== undefined) {
        const phone = phones.find(phone => phone.id == id);
        if (phone) res.send(phone);
        else res.status(404).send('there is no any phone with that id');
    } else res.status(500).send('Something broke!');
})

module.exports = router;