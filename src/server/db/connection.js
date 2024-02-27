import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ticketpal", process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database: ", err);
}

export { sequelize };
