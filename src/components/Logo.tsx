import Image from "next/image";

export default function Logo() {
	return (
		<Image
			src="/icon.svg"
			alt="default logo"
			width={50}
			height={50}
			className="p-2"
		/>
	);
}
