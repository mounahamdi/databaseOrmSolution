//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const posts = require("../database/models/posts.js")
const {Post} = require("../orm/index.js")

module.exports = {
    //method to fetch all posts from the blog database.
    getAllPosts: function(req, res) {
      //  posts.getAll(function(err, results) {
        //    if(err) res.status(500).send(err);
          //  else res.json(results)
        //})
        Post.findAll().then((result)=>res.json(result))
    },
    //method to get one post by id.
    getOnePost: function(req, res) {
       // posts.getOne(req.params.id,function(err,results){
         //   if(err) res.status(500).send(err);
           // else res.status(200).json(results)
        //})
        Post.findByPk(req.params.idpost).then((result)=>res.json(result))
    },
    //method to add a post to the database via the respective model function.
    addPost: function(req, res) {
      //  posts.add(req.body.id,req.body.title,req.body.body,req.body.userId,function(err,results){
        //    if(err) res.status(500).send(err);
          //  else res.status(201).json(results)
        //})
        Post.create(req.body).then((result)=>res.json(result))
    }

}