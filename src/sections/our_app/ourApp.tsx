import Button from '../../components/button';

import './our-app.css';

export default function OurAppSection() {
	return (
		<section
			className="
            w-full h-auto max-h-max
            flex flex-col xl:flex-row gap-2 
            justify-around
            bg-slate-100
        ">
			<article className="w-full px-4 py-6 md:px-16">
				<div className="flex flex-col justify-center items-start  gap-y-5  max-w-[640px] h-full">
					<h2 className="text-5xl md:text-7xl font-semibold text-start mb-7">
						Lorem ipsum dolor sit
					</h2>
					<p className="text-lg text-pretty">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam
						vitae optio laboriosam qui minus pariatur dignissimos, esse nesciunt aperiam
						molestias quam, odio amet ipsa earum deleniti ut porro maiores!
					</p>
					<Button className="bg-[var(--color-green-light)] min-h-[68px] px-7 max-w-max">
						<span className="text-white font-semibold text-xl">view all</span>
					</Button>
				</div>
			</article>
			<article className="w-full">
				<img
					src="/images/png/pic6.png"
					alt="Picture 6"
					className="h-full w-full object-cover object-right"
				/>
			</article>
		</section>
	);
}
