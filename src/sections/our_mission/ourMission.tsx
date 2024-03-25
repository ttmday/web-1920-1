import Button from '../../components/button';

export default function OurMissionSection() {
	return (
		<section
			className="
            w-full h-auto max-h-max
            bg-[var(--color-green-light)]
            flex flex-col xl:flex-row gap-2 
            justify-around md:px-16
        ">
			<article className="w-full text-white px-4 py-6">
				<div className="flex flex-col justify-center items-start  gap-y-5  max-w-[640px] h-full">
					<h2 className="text-5xl md:text-7xl font-semibold text-start mb-7">
						Lorem ipsum dolor sit amet, consetetur
					</h2>
					<Button className="bg-white min-w-full min-h-[68px] md:min-w-[480px]">
						<span className="text-black font-semibold text-xl">
							lorem ipsum dolor sit
						</span>
					</Button>
					<Button className="bg-transparent border-[1px] border-white min-w-full min-h-[68px] md:min-w-[480px]">
						<span className="text-white font-semibold text-xl">
							lorem ipsum dolor sit amet
						</span>
					</Button>
				</div>
			</article>
			<article className="w-full">
				<img
					src="/images/png/pic5.png"
					alt="Picture 5"
					className="h-auto md:h-full w-full md:w-auto object-cover object-right"
				/>
			</article>
		</section>
	);
}
