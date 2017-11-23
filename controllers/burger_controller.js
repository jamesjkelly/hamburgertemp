//  includes models dir
// --------------------
var db = require('../models');
var Burger = db.Burger;
//---------------
// routes exports
//---------------
module.exports = function(app) {
//  root route path
app.get('/', function(request, response) {
    var object = {};
    Burger.findAll({
        where: {
            devoured: false
        }
    }).then(function(result) {
        object.uneatenBurgers = result;
        return;
    }).then(function() {
      return Burger.findAll({
          where: {
              devoured: true
          }
      });
    }).then(function(result) {
        object.eatenBurgers = result;
        return;
    }).then(function() {
        response.render('index', {
            uneatenBurgers: object.uneatenBurgers,
            eatenBurgers: object.eatenBurgers
        }); 
    });
});

// route for burgers
// -----------------
app.get('/api/burgers', function(request, response) {
    Burger.findAll({}).then(function(result) {
        response.json(result);
    });
});
//  new burger 
// -----------
app.post('/', function(request, response) {
    var newBurger = request.body.burger;
    if (newBurger === '') {
        response.redirect('/');
        return;
    }
    // burger create
    // -------------
    Burger.create({
        burger_name: newBurger
    }).then(function() {
        response.redirect('/');
    });
});

// route for api
// -------------
app.get('/api/burgers/:id', function(request, response) {
    Burger.findOne({
        where: {
            id: request.params.id
        }
    }).then(function(data) {
        response.json(data);
    });
});

// burger update
// -------------
app.put('/:id', function(request, response) {
    Burger.update({
        devoured: true
    }, {
        where: {
            id: request.params.id
        }
    }).then(function() {
        response.redirect('/');
    });
});
};
