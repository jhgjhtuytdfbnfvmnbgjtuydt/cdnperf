var config = require('./config');


exports.index = function(req, res) {
    res.render('index', {
        bugira: config.bugira || 'TODO',
        ga: config.ga || 'UA-XXXXX-X'
    });
};
