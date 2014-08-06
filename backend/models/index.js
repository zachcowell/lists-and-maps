var Sequelize = require('sequelize'),
    sequelize = new Sequelize('kaicow', 'postgres', 'password', {
      dialect: "postgres", 
      port:    5432
    });

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
  
  m.ItineraryItem.belongsTo(m.Place,{ foreignKey: 'place_id' });
  m.ItineraryItem.belongsTo(m.Itinerary);

  //itinerary items are probs broken, fix this shit later
  m.Place.hasOne(m.ListItem,{ foreignKey: 'place_id' });
  m.Place.hasOne(m.ItineraryItem,{ foreignKey: 'place_id' });
  m.ListItem.belongsTo(m.List,{ foreignKey: 'list_id' });
  m.ListItem.belongsTo(m.Place,{ foreignKey: 'place_id' });

  m.List.hasMany(m.ListItem,{ foreignKey: 'list_id' });
  m.List.belongsTo(m.User,{ foreignKey: 'user_id' });
  m.Admin.belongsTo(m.User);
  m.UserPreferences.belongsTo(m.User);
  m.Logs.belongsTo(m.User);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
