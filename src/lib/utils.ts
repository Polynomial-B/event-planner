import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";
import { EventPlannerEvent } from "@/generated/prisma";

const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalise(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string): Promise<EventPlannerEvent[]> {
  const events = await prisma.EventPlannerEvent.findMany({
    where: {
      // city: {
      //   equals: city,
      //   mode: "insensitive",
      // }, // for postgreSQL
      city: capitalise(city),
    },
  });

  return events;
}

export async function getEvent(slug: string): Promise<EventPlannerEvent> {
  const data = await prisma.EventPlannerEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}
