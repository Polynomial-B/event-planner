"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { headerRoutes } from "@/lib/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Header() {
	const activePathname = usePathname();
	return (
		<header className="flex items-center justify-between border-zinc-500 px-3 md:px-8 h-14 ">
			<Logo />
			<nav className="h-full flex">
				<ul className="flex gap-4 text-sm font-bold mr-2 full items-center">
					{headerRoutes.map((route) => {
						return (
							<li
								key={route.path}
								className={clsx(
									"text-slate hover:text-zinc-950 transition relative",
									{
										"opacity-80":
											activePathname === route.path,
										"opacity-50":
											activePathname !== route.path,
									}
								)}
							>
								<Link href={route.path}>{route.name}</Link>
								{activePathname === route.path && (
									<motion.div
										layoutId="header-active-link"
										className="bg-fuchsia-700/50 h-[0.2rem] w-full absolute bottom-0 rounded-2xl"
									/>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
