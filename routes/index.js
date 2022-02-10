const games = require('./game')

module.exports = app => {
    app.use('/games', games)
}