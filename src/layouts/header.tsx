import PlayCircleIcon from '../components/icons/play-circle';
import StreamIcon from '../components/icons/stream-icon';

export default function HeaderLayout() {
	return (
		<>
			<header className="bg-[var(--color-green-light)] flex flex-row justify-center items-center gap-x-6 px-2 h-12 overflow-hidden">
				{/* STREAM CONTENT */}
				<div
					className={`
                    w-auto max-w-max h-auto max-h-full p-4
                flex flex-row gap-x-4 items-center justify-center
                bg-red-600 
                text-white`}>
					<span className="font-semibold text-sm md:text-xl xl:text-3xl">LIVE</span>
					<StreamIcon className="size-4 md:size-8" />
				</div>
				{/* TITLE */}
				<h2 className="hidden md:inline text-lg md:text-xl xl:text-3xl text-pretty text-white">
					Lorem ipsum dolor sit amet
				</h2>

				{/* JOIN NOW */}
				<div
					style={{ background: 'rgb(var(--color-green-dark-rgb) / .3)' }}
					className="text-white flex flex-row items-center justify-center gap-x-3 py-4 px-8">
					<span className="text-sm md:text-xl xltext-2xl font-medium">JOIN NOW!</span>
					<button
						className={`bg-transparent
                     border-white border-[3.5px] rounded-full
                     text-white
                     h-[35px] w-[35px]
                     flex items-center justify-center
                     `}>
						<PlayCircleIcon className="size-5" />
					</button>
				</div>
			</header>
		</>
	);
}
