import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  breakpoints: true,
});
