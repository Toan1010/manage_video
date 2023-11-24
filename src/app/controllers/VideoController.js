const Video = require('../models/Video');
const { mongooseToObject } = require('../../util/mongoose');

class VideoController {
    index(req, res, next) {
        Video.findOne({ slug: req.params.slug })
            .then((item) => {
                res.render('main.ejs', {
                    body: 'layouts/show',
                    item: mongooseToObject(item),
                });
            })
            .catch(next);
    }

    operation(req, res, next) {
        Video.find({})
            .sort({ _id: -1 })
            .then((data) => {
                res.render('main.ejs', {
                    body: 'layouts/vOperation.ejs',
                    data,
                });
            })
            .catch(next);
    }

    editItem(req, res, next) {
        Video.findOne({ _id: req.params.slug })
            .then((item) => {
                res.render('main.ejs', {
                    body: 'layouts/edit.ejs',
                    item: mongooseToObject(item),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('main.ejs', { body: 'layouts/create' });
    }

    store(req, res, next) {
        // console.log(req);
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const video = new Video(req.body);
        video
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    update(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Video.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .then(() => console.log(req.params.id))
            .catch(next);
    }

    delete(req, res, next) {
        Video.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/video/edit'))
            .catch(next);
    }
}

module.exports = new VideoController();
