module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('app_user', {
    id: Sequelize.BIGINT,
    email: Sequelize.STRING,
    facebook_id: Sequelize.BIGINT,
    username: Sequelize.STRING,
    last_name: Sequelize.STRING,
    first_name: Sequelize.STRING,
    password: Sequelize.STRING,
    created_on : Sequelize.DATE,
    last_login: Sequelize.DATE
  }, 
  {
    freezeTableName:true,
    tableName: 'app_user',
    timestamps: false
  })

  return User
}