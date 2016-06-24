
    var exports = module.exports = {};
    var User = require('../models/user');

    // /users
    var findAll = function (req, res) {
        User.find({}, function (err, docs) {
            if (err) {
                res.send (err)
            }
            else {
                res.json(docs);        
            }
        });
    }

    // /user/name/{name}
    var findByName = function (req, res) {
        User.find({name: req.params.name}, function (err, docs) {
            if (err) {
                res.send (err)
            }
            else {
                res.json(docs);        
            }
        });
    }

    exports.findAll = findAll;
    exports.findByName = findByName;

    