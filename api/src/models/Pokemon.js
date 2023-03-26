const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID, //.INTEGER
      defaultValue: DataTypes.UUIDV4, //BORRAR/COMENTAR
      // type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // autoIncrement: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png",
      // allowNull: false
    //  ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWh85ztw1jgLTMyk4Kv0iP8i2K1uq2xuI-x4pN9EI&s'
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);
};

