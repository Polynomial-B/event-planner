import React from "react";
import EventCard from "./EventCard";
import { notFound } from "next/navigation";
import { getEvents } from "@/lib/utils";

export default async function EventsList({ city }: { city: string }) {
	try {
		const events = await getEvents(city);

		if (!city?.length) {
			return notFound();
		}

		return (
			<section className="flex flex-wrap gap-10 justify-center px-[20px]">
				{events.map((event) => {
					return <EventCard key={event.id} event={event} />;
				})}
			</section>
		);
	} catch (e) {
		console.error("Failed to load events: ", e);
		return notFound();
	}
}
