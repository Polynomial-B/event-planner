import EventsList from "@/components/EventsList";
import Title from "@/components/Title";
import { MetadataProps } from "@/lib/types";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalise } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod/v4";

export async function generateMetadata({
	params,
}: MetadataProps): Promise<Metadata> {
	const { city } = await params;

	return {
		title: city === "all" ? "All Events" : `Events in ${capitalise(city)}`,
	};
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
	params,
	searchParams,
}: MetadataProps) {
	const { city } = await params;
	const sp = await searchParams;
	// const page = sp.page ?? 1;
	const parsedPage = pageNumberSchema.safeParse(sp.page); // safeParse doesn't throw error
	if (!parsedPage.success) {
		throw new Error("Invalid page number");
	}

	return (
		<main className="flex flex-col items-center py-24 px-20 min-h-[110vh]">
			<Title className="mb-28">
				{city === "all"
					? "All Events"
					: `Events in ${capitalise(city)}`}
			</Title>
			<Suspense key={city + parsedPage.data} fallback={<Loading />}>
				<EventsList city={city} page={parsedPage.data} />
			</Suspense>
		</main>
	);
}
