import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventPlannerEvent } from "@/generated/prisma";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalise(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
  const response = await fetch(`${BASE_URL}api/events?city=${city}`, {
    next: { revalidate: 300 },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getEvent(slug: string) {
  const response = await fetch(`${BASE_URL}api/events/${slug}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch event: ${response.status}`);
  }
  const data: EventPlannerEvent = await response.json();
  return data;
}
