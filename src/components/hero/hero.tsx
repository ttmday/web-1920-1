import Button from '../button';
import CountDown from './components/countdown';
import Navigation from './components/navigation';

import './hero.css';

export default function HeroWeb1920() {
	return (
		<section className="section-hero-web relative">
			{/* NAVIGATION */}
			<Navigation />

			<div className="md:w-[67%] 2xl:w-[62.5%] md:ml-auto flex flex-col items-start justify-center h-[320px] 2xl:h-[480px] px-3">
				<article className="flex justify-center h-full items-start flex-col gap-y-4 text-white">
					<h4 className="text-4xl md:text-3xl xl:text-6xl 2xl:text-8xl font-semibold">
						Lorem ipsum dolor
					</h4>
					<div className="bg-white h-auto w-auto p-4">
						<h4 className="text-4xl md:text-3xl xl:text-6xl  2xl:text-8xl font-semibold text-black">
							Lorem ipsum dolor
						</h4>
					</div>
					<h4 className="text-4xl md:text-3xl xl:text-6xl 2xl:text-8xl font-semibold">
						Lorem ipsum dolor
					</h4>
				</article>
				<Button className="bg-[var(--color-green-light)]">
					<span className="text-white">what is next</span>
				</Button>
			</div>

			{/* FOOTER COUNTER TIMER  */}
			<CountDown />
		</section>
	);
}
