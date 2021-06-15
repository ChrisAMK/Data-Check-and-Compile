import Sequelize from "sequelize";
import config from './config.json';
// Defining Avaliablity Model

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  // logging: false
});

const DataTypes = Sequelize.DataTypes;

const AVAILABILITY = sequelize.define("AVAILABILITY", {

  date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },

  asset: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  0: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  1: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  2: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  3: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  4: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  5: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  6: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  7: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  8: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  9: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  10: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  11: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  12: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  13: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  14: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  15: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  16: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  17: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  18: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  19: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  20: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  21: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  22: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  23: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
},
);

export default AVAILABILITY;