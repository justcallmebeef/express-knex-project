const express = require('express') 
const app = express()
const queries = require('./queries')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.listen(port, console.log(`listening on port ${port}`))