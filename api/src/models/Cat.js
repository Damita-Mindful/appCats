const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cat', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origin:{
      type: DataTypes.STRING,
      allowNull: true
    },
    wikipedia_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    adaptability: {
      type: DataTypes.INTEGER,
    },
    affection_level: {
      type: DataTypes.INTEGER
    },
    child_friendly: {
      type: DataTypes.INTEGER
    },
    dog_friendly: {
      type: DataTypes.INTEGER
    },
    energy_level: {
      type: DataTypes.INTEGER
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};
