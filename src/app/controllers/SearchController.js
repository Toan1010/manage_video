const Video = require('../models/Video');
const { mongooseToObject } = require('../../util/mongoose');

class SearchController {
    index(req, res, next) {
        let key = req.params.slug;
        Video.find({ name: { $regex: key } })
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

module.exports = new SearchController();
