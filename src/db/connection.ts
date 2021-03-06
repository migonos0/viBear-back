import { Pool } from "../../deps.ts";
import {env} from "../config/env.ts";

console.log()

export const pool = new Pool({
  user: env.POSTGRESQL_USER,
  hostname: env.POSTGRESQL_HOST,
  database: env.POSTGRESQL_DB_NAME,
  password: env.POSTGRESQL_PASSWORD || "",
  port: env.POSTGRESQL_PORT === undefined ? 5432 : +env.POSTGRESQL_PORT
});
