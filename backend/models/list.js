module.exports = function(sequelize, Sequelize) {
  var List = sequelize.define('list', {
    //id: Sequelize.BIGINT,
    name: Sequelize.STRING,
    user_id: Sequelize.BIGINT,
    created_on: Sequelize.DATE,
    is_public: Sequelize.BOOLEAN,
    is_deleted: Sequelize.BOOLEAN
  }, 
  {
    freezeTableName:true,
    tableName: 'list',
    timestamps: false
  })

  return List
}