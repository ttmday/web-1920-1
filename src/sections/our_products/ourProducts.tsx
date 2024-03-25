import Button from '../../components/button';
import './our-products.css';

export default function OurProductsSection() {
	const products = [
		{
			image: '/images/png/pic2.png',
			alt: 'Product 1',
			id: 'our_product_1',
		},
		{
			image: '/images/png/pic3.png',
			alt: 'Product 2',
			id: 'our_product_2',
		},
		{
			image: '/images/png/pic4.png',
			alt: 'Product 3',
			id: 'our_product_3',
		},
	];

	return (
		<section className="bg-slate-100 flex flex-col justify-center items-center gap-y-12 text-black md:min-h-[740px] py-24 px-4 md:px-4">
			<article className="flex flex-col items-center max-w-[764px] gap-y-6">
				<h2 className="text-5xl md:text-7xl font-semibold text-center">Lorem ipsum</h2>
				<p className="text-pretty text-lg text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi deleniti
					maiores porro saepe impedit tenetur numquam veritatis obcaecati, nobis eius
					corrupti quos adipisci officiis et laborum dolores quam sapiente!
				</p>
			</article>
			<article className="grid-products">
				{products.map((p) => (
					<div key={p.id} className="w-full">
						<img src={p.image} alt={p.alt} className="" />
						<Button className="rounded-none bg-[var(--color-green-light)] w-full min-h-[68px] min-w-full">
							<span className="text-white font-semibold text-xl">lorem ipsum</span>
						</Button>
					</div>
				))}
			</article>
			<Button className="border-black border-[1px] w-max bg-transparent">
				<span className="text-black">learn more</span>
			</Button>
		</section>
	);
}
