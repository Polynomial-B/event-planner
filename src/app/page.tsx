import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Find events in your area</h1>
			<p>Music, literature, art. What do you want to do?</p>
			<form>
				<input placeholder="Start typing here..." spellCheck="false" />
			</form>
			<section>
				<p>Popular places:</p>
				<div>
					<Link href="/events/london">London</Link>
				</div>
				<div>
					<Link href="/events/brighton">Brighton</Link>
				</div>
			</section>
		</main>
	);
}
