import { cn } from "@/lib/utils";
import React from "react";

export default function Title({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<h1
			className={cn(
				"text-4xl lg:text-6xl font-extrabold text-pretty text-center inline-flex items-baseline",
				className
			)}
		>
			{children}
		</h1>
	);
}
