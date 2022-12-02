const does_table = require('./models/does_table');
// const feedbacks = require('./models/feedbacks');
// const posts = require('./models/posts');
const register = require('./models/register');

const db = require('./db/connection');

db.sync().then((result) => {
}).catch((errors) => {
    resizeBy.send(errors.message)
});

module.exports = does_table
