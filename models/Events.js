const Sequelize = require('sequelize');
const { Venues } = require('./Venues');

const Model = Sequelize.Model;
const sequelize = new Sequelize('demo', 'ghanshyam.intern', 'ghanshyam@123', {
  host: 'stg-galeraabdul002.phonepe.nm2',
  dialect: 'mysql'
});

class Events extends Model {}

Events.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title1: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    title2: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    location: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    location_type: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    venue_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Venues,
        key: 'id'
      }
    }
  },
  { sequelize, timestamps: false, modelName: 'events' }
);

module.exports = { Events };
