import GrabIcon from '../../grab-icon';

export default function Navigation() {
	return (
		<nav className="w-full flex justify-between 2xl:justify-center items-center px-2 2xl:px-7">
			<GrabIcon className="max-w-[120px] md:min-w-[160px] md:max-w-[160px]" />
			<ul className="basis-[70%] hidden min-[1090px]:flex flex-row gap-x-3 2xl:gap-x-6 justify-end items-center h-full">
				{[1, 2, 3, 4, 5, 6].map((_) => (
					<li className="min-w-[140px] text-lg 2xl:text-xl uppercase text-white font-medium">
						<span>Lorem Ipsum</span>
					</li>
				))}
			</ul>
		</nav>
	);
}
