const Sequelize = require('sequelize');
const { Events } = require('./Events');

const Model = Sequelize.Model;
const sequelize = new Sequelize('demo', 'ghanshyam.intern', 'ghanshyam@123', {
  host: 'stg-galeraabdul002.phonepe.nm2',
  dialect: 'mysql'
});

class Performances extends Model {}

Performances.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    show_start_datetime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    show_end_datetime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    sale_start: {
      type: Sequelize.STRING(25),
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(25),
      allowNull: false
    },
    ticket_capacity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    event_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Events,
        key: 'id'
      }
    }
  },
  { sequelize, timestamps: false, modelName: 'performances' }
);

module.exports = { Performances };
