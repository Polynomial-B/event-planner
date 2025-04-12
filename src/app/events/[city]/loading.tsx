import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

export default function Loading() {
	return (
		<div className="flex flex-wrap gap-20 justify-center px-[20px] mx-auto py-24">
			{Array.from({ length: 6 }).map((item, index) => {
				return <SkeletonCard key={index} />;
			})}
		</div>
	);
}
