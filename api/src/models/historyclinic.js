const { DataTypes } = require("sequelize");

//Modelo de usuario
module.exports = (sequelize) => {
  const historyclinic = sequelize.define(
    "historyclinic",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: "No existen historiales clinicos.",
        set(value) {
          this.setDataValue("description", value.toLowerCase());
        },
      },
    },
  );
  return historyclinic;
};
