import GrabIcon from '../components/grab-icon';

export default function FooterLayout() {
	return (
		<footer className="relative flex flex-col md:flex-row justify-center md:items-center gap-y-4 md:gap-x-3 w-full min-h-[240px] p-4 md:px-16">
			<div className="max-w-[380px]">
				<p className="text-lg font-medium">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo quae
					dolores autem dolore fugit repellat cum libero
				</p>
			</div>
			<div className="grow flex justify-center items-center max-md:order-3">
				<GrabIcon className="max-w-[220px] lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:-translate-x-2/4 lg:left-2/4" />
			</div>
			<div className="max-w-[220px]">
				<p className="text-lg font-medium">
					All rights reserve to Lorem ipsum &#169; 2022
				</p>
			</div>
		</footer>
	);
}
