const exp = require('express');
const app = exp()
const Sequelize = require("sequelize");
const does_table = require('./acces_data_tables')
const ResClass = require('./classes/home')
// const does_table = require('../acces_data_tables')

const obj = new ResClass()
// const port = process.env.PORT || 5555;

app.use(exp.json());
app.set('views', 'views');
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);

app.use('/', require('./routes/home'))
app.use('/create_do',require('./routes/create_do'))

app.get('/api/data', async (req, res) => {
    let total_data = await does_table.findAll()
    res.json({"do_data":total_data})
})

app.get('/del/:name', async (req, res) => {
    let { name } = req.params
    let Data_res = name.replace('_', ' ').slice(1, name.length)
    await does_table.destroy({ where: { name: Data_res } })
    res.render('home.hbs')
})


app.listen(app.get('port'))
