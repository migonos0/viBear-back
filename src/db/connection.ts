import { Pool } from "https://deno.land/x/pg@v0.6.0/mod.ts";

const port = Deno.env.get("POSTGRESQL_PORT");

const pool = new Pool({
  user: Deno.env.get("POSTGRESQL_USER"),
  hostname: Deno.env.get("POSTGRESQL_HOST"),
  database: Deno.env.get("POSTGRESQL_DB_NAME"),
  password: Deno.env.get("POSTGRESQL_PASSWORD") || "",
  port: port === undefined ? 5432 : +port
});

const client = await pool.connect();

export const executeQuery = async (query: string) => {
  const result = await client.query(query);
  await client.release();
  return result;
};
