const { DataTypes } = require("sequelize");

//Modelo de usuario
module.exports = (sequelize) => {
  const historyClinic = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
  return historyClinic;
};
