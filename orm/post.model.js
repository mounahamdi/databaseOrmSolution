// Define and export the sequelize model that represents the table posts.

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("posts", {
      id:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true,autoIncrement:true},
      title:{type:DataTypes.STRING,allowNull:false},
      body:{type:DataTypes.STRING,allowNull:false},
      users_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        }
      }
    },{createdAt:false,
      updatedAt:false});
  
    return Post;
  };