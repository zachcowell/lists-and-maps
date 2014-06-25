module.exports = function(sequelize, Sequelize) {
  var UserPreferences = sequelize.define('user_preferences', {
    //id: Sequelize.BIGINT,
    user_id: Sequelize.BIGINT,
    receive_emails: Sequelize.BOOLEAN,
    gps_services: Sequelize.BOOLEAN,
    public_profile: Sequelize.BOOLEAN
  }, 
  {
    freezeTableName:true,
    tableName: 'user_preferences',
    timestamps: false
  })

  return UserPreferences
}