const bcrypt = require("bcryptjs");
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
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        // defaultValue: "user",
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeUpdate: (user) =>
          (user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
          )),
        beforeCreate: (user) =>
          (user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
          )),
      },
    }
  );
  usuario.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return usuario;
};