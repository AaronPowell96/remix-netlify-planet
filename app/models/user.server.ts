import { db } from "~/db";
import { profiles_table } from "~/db/schema";
import { and, eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";
export type User = { id: string; email: string };

export async function createUser(email: string, password: string) {
  const id = uuid();
  const userData = await db
    .insert(profiles_table)
    .values({ id, email, password });
  const a = userData.insertId;
  console.log("insert id", a);

  const newUser = await getProfileById(id);
  return newUser!;
}

export async function getProfileById(id: string) {
  const data = await db
    .select({ email: profiles_table.email, id: profiles_table.id })
    .from(profiles_table)
    .where(eq(profiles_table.id, id));

  if (!data) return null;
  const profile = data[0];
  if (profile) return { id: profile.id, email: profile.email };
}

export async function getProfileByEmail(email: string) {
  const data = await db
    .select({ email: profiles_table.email, id: profiles_table.id })
    .from(profiles_table)
    .where(eq(profiles_table.email, email));

  if (data?.[0]) return data[0];
  return null;
}

export async function verifyLogin(email: string, password: string) {
  const data = await db
    .select()
    .from(profiles_table)
    .where(
      and(
        eq(profiles_table.email, email),
        eq(profiles_table.password, password)
      )
    )
    .limit(1);
  if (!data) return undefined;

  return data[0];
}
