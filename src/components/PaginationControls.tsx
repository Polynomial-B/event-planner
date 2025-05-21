import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function PaginationControls() {
	return (
		<section className="flex items-center gap-[15vw]">
			<Link
				href="/events/all?page=1"
				className="text-slate-600 px-3 py-3 bg-slate-400/40 border-l-2 w-40 text-center rounded-md 
           flex items-center justify-start gap-x-2 hover:bg-slate-400/100 transition-all text-sm"
			>
				<ArrowLeftIcon /> Previous
			</Link>
			<Link
				href="/events/all?page=2"
				className="text-slate-600 px-3 py-3 bg-slate-400/40 border-r-2 w-40 rounded-md 
           flex items-center justify-end gap-x-2 hover:bg-slate-400/100 transition-all text-sm"
			>
				Next <ArrowRightIcon />
			</Link>
		</section>
	);
}
