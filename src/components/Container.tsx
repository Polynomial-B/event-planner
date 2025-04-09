import { ContainerProps } from "@/lib/types";
import React from "react";

export default function Container({ children }: ContainerProps) {
	return (
		<div className="max-w-4xl mx-auto bg-white/20 min-h-screen">
			{children}
		</div>
	);
}
