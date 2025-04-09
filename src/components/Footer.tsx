import { footerRoutes } from "@/lib/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex flex-row items-center justify-between w-full p-6 fixed left-0 bottom-0">
			<small>© ML {new Date().getFullYear()}</small>
			<ul className="flex gap-x-3 sm:gap-x-8">
				{footerRoutes.map((route) => (
					<li key={route.path}>
						<Link href={route.path}>{route.name}</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}
