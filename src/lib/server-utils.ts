import { EventPlannerEvent } from "@/generated/prisma";
import { capitalise } from "./utils";
import prisma from "./db";
import { notFound } from "next/navigation";

export async function getEvents(city: string): Promise<EventPlannerEvent[]> {
  const events = await prisma.eventPlannerEvent.findMany({
    where: {
      // city: {
      //   equals: city,
      //   mode: "insensitive",
      // }, // for postgreSQL
      city: city === "all" ? undefined : capitalise(city),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events;
}

export async function getEvent(slug: string) {
  const data = await prisma.eventPlannerEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}
