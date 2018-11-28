const express = require('express') 
const app = express()
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    queries.getById(id).then(response => res.send(response))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.listen(port, console.log(`listening on port ${port}`))