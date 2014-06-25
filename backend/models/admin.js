module.exports = function(sequelize, Sequelize) {
  var Admin = sequelize.define('admin', {
    //id: Sequelize.BIGINT,
    user_id: Sequelize.BIGINT
  }, 
  {
    freezeTableName:true,
    tableName: 'admin',
    timestamps: false
  })

  return Admin
}