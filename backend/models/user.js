module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    id: Sequelize.BIGINT,
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    last_name: Sequelize.STRING,
    first_name: Sequelize.STRING,
    password: Sequelize.STRING,
    created_on : Sequelize.DATE,
    last_login: Sequelize.DATE
  }, 
  {
    freezeTableName:true,
    tableName: 'user',
    timestamps: false
  })

  return User
}