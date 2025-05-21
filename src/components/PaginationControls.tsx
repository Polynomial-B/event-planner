import Link from "next/link";

export default function PaginationControls() {
	return (
		<section className="flex items-center gap-[15vw]">
			<Link
				href="/events/all?page=1"
				className="text-slate px-3 py-3 bg-black/5 border-l-2 w-25 text-center"
			>
				Previous
			</Link>
			<Link
				href="/events/all?page=2"
				className="text-slate px-3 py-3 bg-black/5 border-r-2 w-25 text-center"
			>
				Next
			</Link>
		</section>
	);
}
