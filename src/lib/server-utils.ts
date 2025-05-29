// import { EventPlannerEvent } from "@/generated/prisma";
import { capitalise } from "./utils";
import prisma from "./db";
import { notFound } from "next/navigation";

export async function getEvents(city: string, page = 1) {
  //: Promise<EventPlannerEvent[]> //
  "use cache";
  const events = await prisma.eventPlannerEvent.findMany({
    where: {
      // city: { equals: city, mode: "insensitive" }, // for postgreSQL
      city: city === "all" ? undefined : capitalise(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventPlannerEvent.count();
  } else {
    totalCount = await prisma.eventPlannerEvent.count({
      where: {
        city: capitalise(city),
      },
    });
  }

  return { events, totalCount };
}

export async function getEvent(slug: string) {
  "use cache";
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
