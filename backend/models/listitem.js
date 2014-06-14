module.exports = function(sequelize, Sequelize) {
  var ListItem = sequelize.define('list_item', {
    id: Sequelize.BIGINT,
    place_id: Sequelize.BIGINT,
    list_id: Sequelize.BIGINT
  }, 
  {
    freezeTableName:true,
    tableName: 'list_item',
    timestamps: false
  })

  return ListItem
}