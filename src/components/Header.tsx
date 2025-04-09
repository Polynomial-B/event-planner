import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Header() {
	return (
		<header className="flex gap-[2em] justify-around">
			<Logo />
			<Link href="/">Home</Link>
			<Link href="/events/all">All</Link>
		</header>
	);
}
