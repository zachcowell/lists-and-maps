module.exports = function(sequelize, Sequelize) {
  var Itinerary = sequelize.define('itinerary', {
    id: Sequelize.BIGINT,
    user_id: Sequelize.BIGINT,
    is_public: Sequelize.BOOLEAN,
    is_shared: Sequelize.BOOLEAN,
    is_deleted: Sequelize.BOOLEAN,
    score: Sequelize.INTEGER,
    name: Sequelize.STRING
  }, 
  {
    freezeTableName:true,
    tableName: 'itinerary',
    timestamps: false
  })

  return Itinerary
}