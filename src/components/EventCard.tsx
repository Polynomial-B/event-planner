"use client";

import { EventType } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const MotionLink = motion(Link);

export default function EventCard({ event }: { event: EventType }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.5 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	return (
		<MotionLink
			ref={ref}
			href={`/event/${event.slug}`}
			className="flex-1 basis-80 max-w-[400px] min-w-[300]"
			style={{ scale: scaleProgress, opacity: opacityProgress }}
			initial={{ scale: 0, opacity: 0.8 }}
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
		</MotionLink>
	);
}
