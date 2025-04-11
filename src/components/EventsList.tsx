import { EventData } from "@/lib/types";
import React from "react";
import EventCard from "./EventCard";

export default function EventsList({ events }: { events: EventData[] }) {
	return (
		<section className="flex flex-wrap gap-10 justify-center px-[20px]">
			{events.map((event) => {
				return <EventCard key={event.id} event={event} />;
			})}
		</section>
	);
}
