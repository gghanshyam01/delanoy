const Sequelize = require('sequelize');

const Model = Sequelize.Model;
const sequelize = new Sequelize('demo', 'ghanshyam.intern', 'passwd', {
  host: 'sqlserver',
  dialect: 'mysql'
});

class Users extends Model {}

Users.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email_id: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    }
  },
  { sequelize, timestamps: false, modelName: 'users' }
);

module.exports = { Users };
