const authors = require('../controllers/authors.js')

module.exports = function(app){
    app.get('/authors/', (req, res) =>{
        authors.index(req, res);
    })

    app.post('/authors/', (req, res) => {
        authors.create(req, res);
    })

    app.delete('/authors/:id/', (req,res) =>{
        authors.remove(req, res);
    })

    app.get('/authors/:id/', (req, res) =>{
        authors.show(req, res);
    })

    app.put('/authors/:id/', (req, res) =>{
        authors.update(req, res);
    })
}