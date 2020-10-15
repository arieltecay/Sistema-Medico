const { DataTypes } = require("sequelize");

//Modelo de usuario
module.exports = (sequelize) => {
  const historyClinic = sequelize.define(
    "historyClinic",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pacienteId: {
        type:DataTypes.INTEGER
      }
    },
  );
  return historyClinic;
};
