import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT } = process.env;

// Connect to MySQL using Sequelize
const todoSequelize = new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASS,
  {
    host: DB_HOST,
    dialect: DB_DIALECT as any, // Typzuweisung, um Typfehler zu vermeiden
  }
);

export default todoSequelize;
