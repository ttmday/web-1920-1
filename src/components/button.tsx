export default function Button(props: { className?: string; children: any }) {
	return (
		<button
			className={`
			min-w-[240px] max-w-[480px] h-[56px]
			px-3 py-4 rounded-lg
			flex justify-center items-center
			font-medium text-xl uppercase ${props.className}`}>
			{props.children}
		</button>
	);
}
