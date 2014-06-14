module.exports = function(sequelize, Sequelize) {
  var Place = sequelize.define('place', {
    id: Sequelize.BIGINT,
    name: Sequelize.STRING,
    street_address1: Sequelize.STRING,
    street_address2: Sequelize.STRING,
    zip: Sequelize.INTEGER,
    state: Sequelize.STRING,
    yelp_biz_id: Sequelize.STRING,
    lat: Sequelize.DECIMAL,
    lng: Sequelize.DECIMAL
  }, 
  {
    freezeTableName:true,
    tableName: 'place',
    timestamps: false
  })

  return Place
}