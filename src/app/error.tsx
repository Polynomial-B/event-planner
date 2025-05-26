"use client";

import Header from "@/components/Header";
import Title from "@/components/Title";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="flex flex-col justify-center items-center text-center py-24 w-full">
			<Title>{error.message}</Title>
			<button
				className="flex mt-[200px] text-center self-center content-center bg-fuchsia-600/60 hover:bg-slate-700 text-white font-bold py-2 px-4 border-gray-400 transition rounded shadow-xl"
				onClick={reset}
			>
				Refresh page
			</button>
		</main>
	);
}
