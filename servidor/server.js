const express = require('express')
const nedb =require('nedb')
const bodyParser = require('body-parser')
const db = nedb({filena,e: './database.db', autoload: true})

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.get('/books', (req, res) =>{
    res.json({
        success:true
    })
})

app.post('/books', (req, res) => {
    res.json(req,body)
})

app.listen(3000, () =>{
    console.log('servidor executado com sucesso na porta 3000.')
})