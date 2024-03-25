export default function SocialButton(props: { children: any }) {
	return (
		<button className="text-white bg-gray-400 w-12 h-12 flex items-center justify-center p-3 hover:bg-[var(--color-green-light)] hover:bg-gray-500 transition-colors group">
			{props.children}
		</button>
	);
}
