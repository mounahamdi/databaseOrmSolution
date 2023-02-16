const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: 'localhost',
    dialect: 'mysql'
  });

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user.model.js')(sequelize,DataTypes)
db.Post = require('./post.model.js')(sequelize,DataTypes)
db.Comment = //require the comment model
db.User.hasMany(db.Post,{foreignKey:"users_user_id"})
db.Post.belongsTo(db.User,{as:"users",foreignKey:"users_user_id"})

module.exports = db;
