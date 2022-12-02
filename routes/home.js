const exp = require('express');
const ResClass = require('../classes/home')
const does_table = require('../acces_data_tables')

const obj = new ResClass()
const routers = exp.Router()
// routers.set('views', 'views');
// routers.set('view engine', 'hbs');
routers.use(exp.json());
routers.use(exp.urlencoded())

routers.route('')
    .get((req,res)=>{
        res.render('home.hbs')
    })
    .post((req, res) =>{
        does_table.create(req.body).then((result) => {
            res.redirect('/home')
        }).catch((Errors) => {
            res.json({ err: Errors })
        });
    })
module.exports = routers