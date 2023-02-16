// import the database connection
const conn = require("../index.js");

module.exports = {
    // a function which fetches all the posts
      getAll: function () {
        const sql=`SELECT * FROM posts`
        conn.query(sql, function (error, results) {
          callback(error, results);
        });
      },
      //a function that retrieves one post record based on the provided id.
      getOne: function(id,callback) {
        const sql = `SELECT * FROM users WHERE id=?`
        conn.query(sql, [id] , function (error, results, fields) {
        callback(error, results);
      });
      },
      // a function that can be used to insert a post into the database
      add: function (id,title,body,userId,callback) {
        const sql = `INSERT INTO users (id,title,name,user_id) VALUES (?,?,?,?)`
        conn.query(sql, [[id],[title],[body],[userId]], function (error, results) {
        callback(error, results);
      });
      } 
    };