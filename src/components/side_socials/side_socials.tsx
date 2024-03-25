import SocialButton from './sideSocialButton';

export default function SideSocials() {
	return (
		<div className="fixed top-2/4 right-0 -translate-y-2/4 z-50 h-[200px] w-auto flex flex-col gap-0 items-end divide-y-[.5px] divide-gray-300">
			<SocialButton>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="group-hover:scale-110 transition-transform">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
				</svg>
			</SocialButton>
			<SocialButton>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="group-hover:scale-110 transition-transform">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
					<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
				</svg>
			</SocialButton>
			<SocialButton>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="group-hover:scale-110 transition-transform">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
					<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
					<path d="M16.5 7.5l0 .01" />
				</svg>
			</SocialButton>
			<SocialButton>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="group-hover:scale-110 transition-transform">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
					<path d="M10 9l5 3l-5 3z" />
				</svg>
			</SocialButton>
			<SocialButton>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					className="group-hover:scale-110 transition-transform">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
				</svg>
			</SocialButton>
		</div>
	);
}
