var Sequelize = require('sequelize'),
    sequelize = new Sequelize('LAM', 'root', '');

//All the models
var models = [
  'Admin',
  'Itinerary',
  'ItineraryItem',
  'List',
  'ListItem',
  'Logs',
  'Place',
  'User',
  'UserPreferences'
];

models.forEach(function(model) { module.exports[model] = sequelize.import(__dirname + '/' + model); });

// describe relationships
(function(m) {
  m.User.hasMany(m.Itinerary,{ foreignKey: 'user_id' });
  m.User.hasMany(m.List,{ foreignKey: 'user_id' });
  m.User.hasMany(m.Logs);
  m.User.hasMany(m.Admin);
  m.User.hasOne(m.UserPreferences);
  m.Itinerary.hasMany(m.ItineraryItem);
  m.Itinerary.belongsTo(m.User,{ foreignKey: 'user_id' });
  m.ItineraryItem.hasOne(m.Place);
  m.ItineraryItem.belongsTo(m.Itinerary);
  m.Place.belongsTo(m.ListItem);
  m.Place.belongsTo(m.ItineraryItem);
  m.ListItem.belongsTo(m.List,{ foreignKey: 'list_id' });
  m.ListItem.hasOne(m.Place);
  m.List.hasMany(m.ListItem,{ foreignKey: 'list_id' });
  m.List.belongsTo(m.User,{ foreignKey: 'user_id' });
  m.Admin.belongsTo(m.User);
  m.UserPreferences.belongsTo(m.User);
  m.Logs.belongsTo(m.User);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
