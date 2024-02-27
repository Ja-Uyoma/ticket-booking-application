import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  user_password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  user_role: {
    type: DataTypes.ENUM("Admin", "Regular"),
    allowNull: false,
  },
});

await User.sync({ force: true });
console.log("The table for the User model was just created!");

export default User;
