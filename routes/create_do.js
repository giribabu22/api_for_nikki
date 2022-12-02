const exp = require('express');
const ResClass = require('../classes/home')
const does_table = require('../acces_data_tables')

const obj = new ResClass()
const routers = exp.Router()

routers.use(exp.json());
routers.use(exp.urlencoded())


routers.route('')
    .get((req, res) => {
        res.render('meeting')
    })
    .post((req, res) => {
        does_table.create(req.body).then((result) => {
            res.redirect('/home')
        }).catch((Errors) => {
            console.log(Errors);
            res.json({ err: Errors.message })
        });
    })

module.exports = routers