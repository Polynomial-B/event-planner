"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchForm() {
	const [searchText, setSearchText] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!searchText) return;
		router.push(`/events/${searchText}`);
	};
	const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
		const target = e.target as HTMLFormElement;
		setSearchText(target.value);
	};

	useEffect(() => {
		console.log(searchText);
	}, [searchText]);

	return (
		<form
			className="w-full  p-4 sm:w-[580px]"
			onSubmit={handleSubmit}
			onChange={handleChange}
		>
			<input
				className="w-full h-16 rounded-lg bg-slate-900/10 px-4 outline-none ring-2 ring-fuchsia-700/20 focus:ring-3 focus:ring-fuchsia-700/40 focus:bg-slate-500/10 transition"
				placeholder="Start typing here..."
				spellCheck="false"
			/>
		</form>
	);
}
