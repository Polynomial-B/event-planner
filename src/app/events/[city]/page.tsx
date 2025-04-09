import Title from "@/components/Title";
import { EventsPageProps } from "@/lib/types";
import React from "react";

export default function EventsPage({ params }: EventsPageProps) {
	const city = params.city;
	const capitalisedCity = city.charAt(0).toUpperCase() + city.slice(1);
	return (
		<main className="flex flex-col items-center py-24 px-20 min-h-[110vh]">
			<Title>
				{city === "all" ? "All Events" : `Events in ${capitalisedCity}`}
			</Title>
		</main>
	);
}
