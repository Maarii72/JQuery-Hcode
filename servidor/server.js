const express = require('express')

const app = express()

app.get('/books', (req, res) =>{
    res.json({
        success:true
    })
})

app.listen(3000, () =>{
    console.log('servidor executado com sucesso na porta 3000.')
})