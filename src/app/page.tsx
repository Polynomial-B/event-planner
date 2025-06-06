import SearchForm from "@/components/SearchForm";
import Title from "@/components/Title";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-36">
			<Title>Events in your area</Title>

			<p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-80">
				Find your{" "}
				<span className="font-bold text-fuchsia-700 opacity-80">
					fun
				</span>
			</p>
			<SearchForm />
			<section className="mt-4 flex gap-x-4 text-sm text-indigo-900/60 font-bold">
				<p className="opacity-60 mr-4">Trending:</p>
				<div className="hover:text-indigo-900/80 transition">
					<Link href="/events/london">London</Link>
				</div>
				<div className="hover:text-indigo-900/80 transition">
					<Link href="/events/brighton">Brighton</Link>
				</div>
			</section>
		</main>
	);
}
