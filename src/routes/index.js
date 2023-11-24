const VideoRouter = require('./video');
const SearchRouter = require('./search');

const { mongooseToObject } = require('../util/mongoose');
const SiteController = require('../app/controllers/SiteController');

function route(app) {
    app.get('/', SiteController.index);
    app.use('/video', VideoRouter);
    app.use('/search', SearchRouter);
}

module.exports = route;
