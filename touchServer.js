var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
// body-parser middleware for handling request variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'bazzinga',
        database : 'TouchIdStudy',
        charset  : 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);

var StudyData = Bookshelf.Model.extend({
  tableName: 'studyData'
});

var StudyDataCollection = Bookshelf.Collection.extend({
  model: StudyData
});

router.route('/getDump')
  .get(function (req, res){
    StudyDataCollection.forge()
    .fetch()
    .then(function(collection){
      res.json({error: false, data: collection.toJSON()});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });

  router.route('/save')
  .post(function(req, res){
    console.log('@@@',req);
    var token = req.body.token;
    if(token == "bazzinga") {
      StudyData.forge({
      user_id:req.body.userId,
      app_id: req.body.appId,
      action_id: req.body.actionId,
      study_id: req.body.studyId,
      time_taken: req.body.time,
      is_password: req.body.isPassword
    })
    .save()
    .then(function(data){
        res.json({error: false, data: {message: "Success"}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  }else {
      res.json({error: true, data:{message: 'Invalid Token'}});
  }
}); //End of post
app.use('/api', router);
app.get('/', function(req, res){
  res.sendFile('TouchID-Server/main.html');
});
app.listen(3000, function() {
  console.log("✔ Express server listening on port %d in %s mode", 3000, app.get('env'));
});
