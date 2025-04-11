import Title from "@/components/Title";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function EventPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
		{
			next: {
				tags: [`event-${slug}`],
			},
		}
	);
	if (!response.ok) {
		return notFound();
	}
	const event = await response.json();

	return (
		<main>
			<section className="relative h-[400px] w-full overflow-hidden flex justify-around grayscale-100 py-4 md:pt-10">
				<Image
					src={event?.imageUrl}
					alt={`blurred background for ${event.name ?? "event"}`}
					fill={true}
					quality={10}
					className="object-cover blur-3xl z-0"
					sizes="100vw"
					priority={true} // for image shifting - unecessary as absolute positioning
				/>
			</section>
			<div className="z-1 relative -top-95 flex flex-col gap-x-6 lg:flex-row lg:m-10 items-center">
				<Image
					src={event?.imageUrl}
					alt={`image for ${event.name ?? "event"}`}
					width={300}
					height={200}
					className="rounded-xl border-2 border-white/50 object-cover"
				/>

				<div className="flex flex-col h-ful md:mt-4">
					<Title className="text-4xl lg:text-5xl">{event.name}</Title>
					<p>
						{new Date(event.date).toLocaleDateString("en-UK", {
							weekday: "long",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className="whitespace-nowrap">
						By{" "}
						<span className="font-bold text-fuchsia-700 opacity-80">
							{event.organizerName}
						</span>
					</p>
					<button className="capitalize bg-white/50 w-[80vw] sm:w-full hover:bg-white/70 rounded-lg py-2 border-white/10 border-2 mt-4 hover-effects">
						Get tickets
					</button>
				</div>
			</div>
		</main>
	);
}
