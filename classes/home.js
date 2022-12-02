const does_table = require('../acces_data_tables')
// const Knex = require('knex')

class ResClass{
    // regis_POST(req,res) {
    //     register.create(req.body).then((result) => {
    //         res.json({ message: 'added successfully' })
    //     }).catch((Errors) => {
    //         res.json({ err: Errors })
    //     });
    // }

    create_do_POST(req, res) {
        console.log();

        does_table.create(req.body).then((result) => {
            res.redirect('/home')
        }).catch((Errors) => {
            res.json({err:Errors})
        });
    }
}

module.exports = ResClass