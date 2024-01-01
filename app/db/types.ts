import type { InferSelectModel } from "drizzle-orm";
import type { profiles_table, notes_table } from "./schema";

export type Profile = InferSelectModel<typeof profiles_table>;

export type Note = InferSelectModel<typeof notes_table>;
