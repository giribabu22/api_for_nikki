const Sequelize = require("sequelize");

// module.exports = new Sequelize('uttarayan', "uttarayan", 'uttarayan', {
//         host: "db4free.net",
//         port: 3306,
//         dialect: 'mysql',
//         logging: false
// })

// module.exports = new Sequelize('unit_test', "root", 'prem@630', {
//     host: "localhost",
//     dialect: 'mysql',
//     logging: false
// })
    module.exports = new Sequelize('sequelize_crud', "sequelize_crud", 'sequelize_crud', {
        host: "db4free.net",
        port: 3306,
        dialect: 'mysql',
        logging:false
    })