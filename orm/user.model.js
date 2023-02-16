// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    user_id:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true},
    name:{type:DataTypes.STRING,allowNull:false},
  },{createdAt:false,
    updatedAt:false});

  return User;
};