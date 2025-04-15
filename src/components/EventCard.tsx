import { EventType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventCard({ event }: { event: EventType }) {
	return (
		<Link
			href={`/event/${event.slug}`}
			className="flex-1 basis-80 max-w-[400px] min-w-[300]"
		>
			<section className="flex flex-col h-full bg-white/30 rounded-xl overflow-hidden relative hover-effects">
				<Image
					src={event.imageUrl}
					alt={event.name}
					width={500}
					height={280}
					className="h-[60%] object-fit "
				/>
				<div className="flex flex-col flex-1 justify-center items-center">
					<h2 className="text-2xl font-semibold">{event.name}</h2>
					<p className="text-sm font-bold">{event.organizerName}</p>
					<p className="italic opacity-70">{event.location}</p>
				</div>
				<section className="absolute flex flex-col justify-center items-center left-2 top-2 h-[45px] w-[45px] text-white font-extrabold bg-black/80 rounded-2xl">
					<p className="text-xl -mb-2">
						{new Date(event.date).toLocaleDateString("en-UK", {
							day: "2-digit",
						})}
					</p>
					<p className="text-xs text-fuchsia-300 pt-1">
						{new Date(event.date)
							.toLocaleDateString("en-UK", {
								month: "short",
							})
							.toUpperCase()}
					</p>
				</section>
			</section>
		</Link>
	);
}
