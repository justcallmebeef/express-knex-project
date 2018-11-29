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
    let id = req.params.id
    queries.getById(id).then(response => res.send(response))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.delete('/:id', (req, res) => {
    let id = req.params.id
    queries.deleteStudent(id)
    .then(res.status(204).send('done'))
})

app.put('/:id', (req, res) => {
    let id = req.params.id
    let body = req.body 
    console.log(body)
    queries.updateStudent(id, body).then(data => res.json(data))
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'data not found' }})
})
 
 app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
})

app.listen(port, console.log(`listening on port ${port}`))