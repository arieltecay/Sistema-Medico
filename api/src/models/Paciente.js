const { DataTypes } = require("sequelize");

//Modelo de usuario
module.exports = (sequelize) => {
  const paciente = sequelize.define(
    "paciente",
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
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      celular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type:DataTypes.STRING,
        allowNull: true
      },
      genero:{
        type: DataTypes.STRING
      },
      birthday:{
        type:DataTypes.STRING
      },
      nSocio: {
        type: DataTypes.INTEGER,
        unique: true,
      },
    },
  );
  return paciente;
};
