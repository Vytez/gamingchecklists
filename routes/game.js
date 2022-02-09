const Router = require('express-promise-router')

const db = require('../db')

const router = new Router()

module.exports = router

router.get('/:gameId', async(req, res) =>{
    const { gameId } = req.params
    const { rows } = await db.query('SELECT * FROM games WHERE gameId = $1', [id])
    res.send(rows[0])
})