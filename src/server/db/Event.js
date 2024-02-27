import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";

const Event = sequelize.define("Event", {
  event_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  event_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  event_ticket: {
    type: DataTypes.ENUM("Regular", "VIP"),
    allowNull: false,
  },
  event_capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  event_ticket_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

await Event.sync({ force: true });
console.log("The table for the Event model was just created!");

export default Event;
