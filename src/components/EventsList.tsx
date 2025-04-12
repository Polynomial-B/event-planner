import { EventData } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";
import { notFound } from "next/navigation";

export default async function EventsList({ city }: { city: string }) {
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
		{ next: { revalidate: 300 } }
	);
	if (response.ok) {
		const events: EventData[] = await response.json();
		return (
			<section className="flex flex-wrap gap-10 justify-center px-[20px]">
				{events.map((event) => {
					return <EventCard key={event.id} event={event} />;
				})}
			</section>
		);
	} else {
		return notFound();
	}
}
