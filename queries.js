const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('students')
    },

    getById(id) {
        return database('students').where({id: id}).first() 
        // Below does the same thing - I used .first() because it returns an object vs. an id
        // return database('students').where('id', id)
        // return database.select().from('students').where('id', id)
    }
}