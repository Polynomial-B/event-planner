import React from "react";
import EventCard from "./EventCard";
import { notFound } from "next/navigation";
import { EventPlannerEvent } from "@/generated/prisma";
import { getEvents } from "@/lib/server-utils";
import { EventsListProps } from "@/lib/types";
import PaginationControls from "./PaginationControls";

export default async function EventsList({ city, page }: EventsListProps) {
	try {
		const { events, totalCount } = await getEvents(city, page);
		const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
		const nextPath =
			totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";

		// console.log("page * 6: " + page * 6);
		// console.log("total count: " + totalCount);

		if (!city?.length) {
			return notFound();
		}

		return (
			<section className="flex flex-wrap gap-10 justify-center px-[20px]">
				{events.map((event: EventPlannerEvent) => {
					return <EventCard key={event.id} event={event} />;
				})}
				<PaginationControls nextPath={nextPath} prevPath={prevPath} />
			</section>
		);
	} catch (e) {
		console.error("Failed to load events: ", e);
		return notFound();
	}
}
