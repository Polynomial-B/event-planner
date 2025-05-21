import Title from "@/components/Title";
import { getEvent } from "@/lib/server-utils";
import { capitalise } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> {
	const { slug } = await params;
	const event = await getEvent(slug);
	return {
		title: capitalise(event.name),
	};
}

export default async function EventPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const event = await getEvent(slug);
	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
				<Image
					src={event?.imageUrl}
					alt={`blurred background for ${event.name ?? "event"}`}
					fill={true}
					quality={10}
					className="object-cover blur-3xl z-0"
					sizes="100vw"
					priority={true} // for image shifting - unecessary as absolute positioning
				/>

				<div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
					<Image
						src={event?.imageUrl}
						alt={`image for ${event.name ?? "event"}`}
						width={300}
						height={200}
						className="rounded-xl border-2 border-white/50 object-cover items-center"
					/>

					<div className="flex flex-col h-ful md:mt-4">
						<Title className="text-4xl lg:text-5xl">
							{event.name}
						</Title>
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
			</section>
			<div className="min-h-[75vh] text-center px-5 py-16">
				<Section>
					<SectionHeading>About</SectionHeading>
					<SectionContent>{event.description}</SectionContent>
				</Section>
				<Section>
					<SectionHeading>Location</SectionHeading>
					<SectionContent>{event.location}</SectionContent>
				</Section>
			</div>
		</main>
	);
}

function Section({ children }: { children: React.ReactNode }) {
	return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h2 className="text-2xl mb-8 font-black">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
	return (
		<p className="max-w-4xl mx-auto text-lg leading-6 text-slate/80">
			{children}
		</p>
	);
}
