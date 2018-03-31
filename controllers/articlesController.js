const db = require('../models');
module.exports = {
  findAll: function (req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(err => res.status(422).json)
  },
  create: function (req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url,
      date: new Date()
    };
    // Grab every document in the Articles collection
    db.Article.create(article)
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(err => res.status(422).json)
  },
  delete: function (req, res) {
    console.log("im hit", req.params.id)
    db.Article
      .remove({ _id: req.params.id })
      .then(function (article) {
        db.Article.find({})
          .then(function (dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle);
          })
          .catch(err => res.status(422).json)
      })
      .catch( err => res.status(422).json)
  }
}