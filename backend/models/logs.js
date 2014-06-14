module.exports = function(sequelize, Sequelize) {
  var Logs = sequelize.define('logs', {
    id: Sequelize.BIGINT,
    logged_at: Sequelize.DATE,
    route_id: Sequelize.STRING,
    user_id: Sequelize.BIGINT,
    server_elapsed_miliseconds: Sequelize.DECIMAL,
    comments: Sequelize.STRING
  }, 
  {
    freezeTableName:true,
    tableName: 'logs',
    timestamps: false
  })

  return Logs
}