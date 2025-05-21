import EventsList from "@/components/EventsList";
import Title from "@/components/Title";
import { EventsPageProps, MetadataProps } from "@/lib/types";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalise } from "@/lib/utils";
import { Metadata } from "next";

export function generateMetadata({ params }: MetadataProps): Metadata {
	const { city } = params;

	return {
		title: city === "all" ? "All Events" : `Events in ${capitalise(city)}`,
	};
}

export default async function EventsPage({
	params,
	searchParams,
}: EventsPageProps) {
	const { city } = params;
	const page = searchParams.page ?? 1;

	return (
		<main className="flex flex-col items-center py-24 px-20 min-h-[110vh]">
			<Title className="mb-28">
				{city === "all"
					? "All Events"
					: `Events in ${capitalise(city)}`}
			</Title>
			<Suspense fallback={<Loading />}>
				<EventsList city={city} page={+page} />
			</Suspense>
		</main>
	);
}
