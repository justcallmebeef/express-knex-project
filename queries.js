const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('students')
    },

    getById(id) {
        return database('students').where('id', id)
        // Below does the same thing
        // return database('students').where({id: id}).first() 
        // return database.select().from('students').where('id', id)
    }
}