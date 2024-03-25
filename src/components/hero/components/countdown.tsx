export default function CountDown() {
	return (
		<article
			className={`
                absolute bottom-0 left-0
                bg-[var(--color-green-dark)] 
                w-full h-44 md:h-[200px]
                text-white
                px-4
                py-3
                md:py-10
                `}>
			<div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:max-w-[640px] xl:max-w-[1240px] mx-auto h-full">
				<h3 className="text-2xl md:text-4xl font-medium">
					Lorem ipsum dolor sit amet, consectetur
				</h3>

				<div className="flex gap-x-2 md:gap-x-3 flex-row items-center text-white h-full py-3">
					<div className="text-center text-pretty">
						<span className="text-2xl md:text-6xl xl:text-8xl font-medium">170</span>
						<p className="text-lg md:text-2xl font-light text-[var(--color-green-light)]">
							days
						</p>
					</div>
					<div className="h-full w-[2px] bg-[var(--color-green-light)] mx-4"></div>
					<div className="text-center text-pretty">
						<span className="text-2xl md:text-6xl xl:text-8xl font-medium">13</span>
						<p className="text-sm md:text-2xl font-light text-[var(--color-green-light)]">
							hours
						</p>
					</div>
					<div className="h-full w-[2px] bg-[var(--color-green-light)] mx-4"></div>
					<div className="text-center text-pretty">
						<span className="text-2xl md:text-6xl xl:text-8xl font-medium">39</span>
						<p className="text-sm md:text-2xl font-light text-[var(--color-green-light)]">
							minutes
						</p>
					</div>
					<div className="h-full w-[2px] bg-[var(--color-green-light)] mx-4"></div>
					<div className="text-center text-pretty">
						<span className="text-2xl md:text-6xl xl:text-8xl font-medium">29</span>
						<p className="text-sm md:text-2xl font-light text-[var(--color-green-light)]">
							seconds
						</p>
					</div>
				</div>
			</div>
		</article>
	);
}
