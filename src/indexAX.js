const express = require('express')
var cors = require('cors')
const path = require('path')
const app = express()
const db = require('./database.js')

app.use(express.json())
app.use(cors())


app.get('/catalog', (req, res) => {
    db.query("Select * from catalog", function (err, result, fields) {
        if (err) throw err
        res.send(result)
    })
})

app.get('/catalog/filters/:filter', (req, res) => {
    console.log(req.params.filter)
    if (req.params.filter === "all") {
        db.query("Select * from catalog", function (err, result, fields) {
            if (err) throw err
            res.send(result)
        })
    }
    else {
    db.query(`select * from catalog where json_contains(catalog.genre->"$", '["${req.params.filter}"]');`, function (err, result, fields) {
        if (err) throw err
        res.send(result)
    })}

})

app.get('/catalog/:name', (req, res) => {
    db.query(`select * from catalog where name = "${req.params.name}"`, function (err, result, fields) {
        if (err) throw err
        res.send(result)
    })
})

app.use(express.static(path.resolve(__dirname)))

app.listen(3036, () => console.log("server has been started on port 3036"))