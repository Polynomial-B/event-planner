import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const style =
	"text-slate-600 px-3 py-3 bg-slate-400/40 w-40 text-center rounded-md flex items-center gap-x-2 hover:bg-slate-400/100 hover:scale-105 transition-all text-sm";

export default function PaginationControls({
	prevPath,
	nextPath,
}: {
	prevPath: string;
	nextPath: string;
}) {
	return (
		<section className="flex items-center justify-between w-full max-w-[635px]">
			{prevPath === "" ? (
				<div />
			) : (
				<Link
					href={prevPath}
					className={`${style} justify-start border-l-2`}
				>
					<ArrowLeftIcon /> Prev
				</Link>
			)}
			{nextPath !== "" ? (
				<Link
					href={nextPath}
					className={`${style} justify-end border-r-2`}
				>
					Next <ArrowRightIcon />
				</Link>
			) : (
				""
			)}
		</section>
	);
}
