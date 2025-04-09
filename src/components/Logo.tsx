import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/">
			<Image src="/icon.png" alt="default logo" width={30} height={30} />
		</Link>
	);
}
