module.exports = function(sequelize, Sequelize) {
  var ItineraryItem = sequelize.define('itinerary_item', {
    id: Sequelize.BIGINT,
    itinerary_id: Sequelize.BIGINT,
    place_id: Sequelize.BIGINT,
    is_deleted: Sequelize.BOOLEAN,
    created_on: Sequelize.DATE
  }, 
  {
    freezeTableName:true,
    tableName: 'itinerary_item',
    timestamps: false
  })

  return ItineraryItem
}