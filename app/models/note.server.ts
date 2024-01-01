import { db } from "~/db";
import type { User } from "./user.server";
import { notes_table } from "~/db/schema";
import { and, eq } from "drizzle-orm";
import type { Note } from "~/db/types";
import { v4 as uuid } from "uuid";
import invariant from "tiny-invariant";

export async function getNoteListItems({ userId }: { userId: User["id"] }) {
  const data = await db
    .select({ id: notes_table.id, title: notes_table.title })
    .from(notes_table)
    .where(eq(notes_table.profileId, userId));

  return data;
}

export async function createNote({
  title,
  body,
  userId,
}: Pick<Note, "body" | "title"> & { userId: User["id"] }) {
  const id = uuid();
  await db.insert(notes_table).values({ id, title, body, profileId: userId });

  const newNote = await getNote({
    id,
    userId,
  });
  invariant(newNote, "newNote should exist");
  return newNote;
}

export async function deleteNote({
  id,
  userId,
}: Pick<Note, "id"> & { userId: User["id"] }) {
  const data = await db
    .delete(notes_table)
    .where(and(eq(notes_table.id, id), eq(notes_table.profileId, userId)));

  if (data) {
    return {};
  }

  return null;
}

export async function getNote({
  id,
  userId,
}: Pick<Note, "id"> & { userId: User["id"] }) {
  const data = await db
    .select()
    .from(notes_table)
    .where(and(eq(notes_table.profileId, userId), eq(notes_table.id, id)))
    .limit(1);
  const note = data[0];
  if (note) {
    return note;
  }

  return null;
}
