import EventsList from "@/components/EventsList";
import Title from "@/components/Title";
import { EventData, EventsPageProps } from "@/lib/types";
import React from "react";

export default async function EventsPage({ params }: EventsPageProps) {
	const { city } = params;
	const capitalisedCity = city.charAt(0).toUpperCase() + city.slice(1);
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	);
	const events: EventData[] = await response.json();

	return (
		<main className="flex flex-col items-center py-24 px-20 min-h-[110vh]">
			<Title className="mb-28">
				{city === "all" ? "All Events" : `Events in ${capitalisedCity}`}
			</Title>
			<EventsList events={events} />
		</main>
	);
}
