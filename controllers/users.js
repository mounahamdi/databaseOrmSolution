//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const users = require("../database/models/users.js")
const {User} = require("../orm/index.js")
module.exports = {
    //method to fetch all users from the blog database.
    getAllUsers: async function(req, res) {
     //   users.getAll(function(err, results) {
     //       if(err) res.status(500).send(err);
    //        else res.json(results)
    //    })
    var allUsers = await User.findAll()
    res.json(allUsers)
    },
    //method to add a user to the database via the respective model function.
    addUser: function(req, res) {
      //  users.add(req.body.id,req.body.name,function(err,results){
        //    if(err) res.status(500).send(err);
          //  else res.status(201).json(results)
       // })
       User.create(req.body).then((result)=>res.json(result))
    },
    //method to get one user by id.
    getOneUser: function(req, res) {
     //   users.getOne(req.params.id,function(err,results){
      //      if(err) res.status(500).send(err);
      //      else res.status(200).json(results)
      //  })
      User.findByPk(req.params.iduser).then((result)=>res.json(result))
    }
    
}