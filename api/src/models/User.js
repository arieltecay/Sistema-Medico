const { DataTypes } = require("sequelize");

//Modelo de usuario
module.exports = (sequelize) => {
  const usuario = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DNI: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      direccion: {
        type: DataTypes.STRING,

      },
      celular: {
        type: DataTypes.STRING,
        unique: false
      }
    },
  );
  return usuario;
};
