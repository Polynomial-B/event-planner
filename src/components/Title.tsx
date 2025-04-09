import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl lg:text-6xl font-extrabold text-pretty text-center inline-flex items-baseline">
			{children}
		</h1>
	);
}
