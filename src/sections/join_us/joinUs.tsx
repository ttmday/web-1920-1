import Button from '../../components/button';
import JoinUsForm from './components/joinUsForm';
import './join-us.css';

export default function JoinUsSection() {
	return (
		<section className="join-us-section flex flex-row w-full">
			<article className="hidden lg:block w-auto max-w-max">
				<img
					src="/images/png/join-us.png"
					alt="Picture 5"
					className="h-full w-auto object-cover object-left"
				/>
			</article>
			<article className="py-24 px-4 text-white w-full ">
				<h2 className="text-5xl md:text-7xl font-semibold text-start mb-7 mx-auto max-w-[576px]">
					JOIN US.
				</h2>
				<p className="mt-7 text-xl text-pretty mx-auto max-w-[576px]">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</p>
				<JoinUsForm />
				<div className="mx-auto max-w-[576px] my-5">
					<Button className="bg-[var(--color-green-light)] min-h-[68px]">
						<span className="text-white font-semibold text-2xl">I`m in</span>
					</Button>
					<p className="text-lg text-pretty my-6">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam modi ex
						dignissimos et culpa reprehenderit accusamus officiis quae architecto
					</p>
				</div>
			</article>
		</section>
	);
}
