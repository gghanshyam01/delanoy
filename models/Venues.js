const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = new Sequelize('demo', 'ghanshyam.intern', 'ghanshyam@123', {
  host: 'stg-galeraabdul002.phonepe.nm2',
  dialect: 'mysql'
});

class Venues extends Model {}

Venues.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    code: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    timezone: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  { sequelize, timestamps: false, modelName: 'venues' }
);

module.exports = { Venues };
