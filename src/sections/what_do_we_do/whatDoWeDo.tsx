import './what-do-we-do.css';

export default function WhatDoWeDoSection() {
	return (
		<section className="what-do-we-do-section">
			<div className="hidden md:flex flex-col justify-between h-full gap-y-4">
				<h2 className="text-3xl md:text-7xl font-semibold">Lorem ipsum dolor sit amet</h2>
				<p style={{ lineHeight: 1.8 }} className="text-xl text-pretty">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto adipisci
					dolorem ex eligendi modi ab reiciendis optio repudiandae vel iste officiis cum
					impedit libero natus, incidunt vero cupiditate laudantium nobis! Repellat eos
					ipsa quae fuga. Exercitationem itaque, eaque necessitatibus molestiae qui sit
					dignissimos quaerat. Consectetur, ratione! Repellendus reiciendis dolores
					placeat sequi tempora cupiditate quam, architecto minima veniam nostrum. Facere,
					accusantium.
				</p>
			</div>
			<h2
				style={{ gridArea: 'title', placeSelf: 'end center' }}
				className="md:hidden text-3xl md:text-7xl font-semibold">
				Lorem ipsum dolor sit amet
			</h2>
			<img
				src="/images/png/pic1.png"
				className="h-auto max-h-[480px] w-full md:w-[764px]"></img>
			<p style={{ gridArea: 'description' }} className="md:hidden text-lg text-pretty">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto adipisci
				dolorem ex eligendi modi ab reiciendis optio repudiandae vel iste officiis cum
				impedit libero natus, incidunt vero cupiditate laudantium nobis! Repellat eos ipsa
				quae fuga. Exercitationem itaque, eaque necessitatibus molestiae qui sit
				dignissimos quaerat. Consectetur, ratione! Repellendus reiciendis dolores placeat
				sequi tempora cupiditate quam, architecto minima veniam nostrum. Facere,
				accusantium.
			</p>
		</section>
	);
}
