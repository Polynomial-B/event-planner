import React from "react";
import EventCard from "./EventCard";
import { notFound } from "next/navigation";
import { EventPlannerEvent } from "@/generated/prisma";
import { getEvents } from "@/lib/server-utils";
import { EventsListProps } from "@/lib/types";

export default async function EventsList({ city, page }: EventsListProps) {
	try {
		const events = await getEvents(city, page);

		if (!city?.length) {
			return notFound();
		}

		return (
			<section className="flex flex-wrap gap-10 justify-center px-[20px]">
				{events.map((event: EventPlannerEvent) => {
					return <EventCard key={event.id} event={event} />;
				})}
			</section>
		);
	} catch (e) {
		console.error("Failed to load events: ", e);
		return notFound();
	}
}
