const Video = require('../models/Video');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Video.find({})
            .sort({ _id: -1 })
            .then((data) => {
                res.render('main.ejs', {
                    body: 'layouts/index.ejs',
                    data,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
