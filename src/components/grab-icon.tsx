export default function GrabIcon(props: { className?: string }) {
	return (
		<a href="/#" className="w-auto h-auto flex justify-center items-center p-3">
			<img
				src="/images/png/icongrab.png"
				alt="Grab Icon"
				className={`object-cover object-center  max-h-[90px] ${props.className}`}
			/>
		</a>
	);
}
