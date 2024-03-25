import Button from '../../components/button';
import PlayCircleIcon from '../../components/icons/play-circle';

export default function LatestVideosSection() {
	const videos = [
		{
			videoId: '/images/png/pic1.png',
			alt: 'Video 1',
			id: 'latest_video-1',
		},
		{
			videoId: '/images/png/pic1.png',
			alt: 'Video 2',
			id: 'latest_video-2',
		},

		{
			videoId: '/images/png/pic1.png',
			alt: 'Video 3',
			id: 'latest_video-3',
		},

		{
			videoId: '/images/png/pic1.png',
			alt: 'Video 4',
			id: 'latest_video-4',
		},
		{
			videoId: '/images/png/pic1.png',
			alt: 'Video 5',
			id: 'latest_video-5',
		},
		{
			videoId: '/images/png/pic1.png',
			alt: 'Video 6',
			id: 'latest_video-6',
		},
	];

	return (
		<section className="flex flex-col gap-y-7 items-center justify-center px-4 py-24">
			<h2 className="text-5xl md:text-7xl font-semibold text-start mb-7">
				Latest videos
			</h2>
			<article
				className="
            grid md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-12 
            justify-center items-center
             w-full max-w-[1440px]
             place-content-center
             mb-8
            ">
				{videos.map((v) => (
					<div key={v.id} className="w-auto h-auto mx-auto">
						<div className="relative">
							<img
								src={v.videoId}
								alt={v.alt}
								className="w-[420px] h-[210px] object-cover"
							/>
							<button
								className={`
                            absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
                            bg-transparent
                            border-white border-[4px] rounded-full
                            text-white
                            h-[65px] w-[65px]
                            flex items-center justify-center
                     `}>
								<PlayCircleIcon className="size-9" />
							</button>
						</div>
						<p className="text-lg my-4 text-pretty">
							Lorem ipsum dolor sit amet consectetur, elit.
						</p>
					</div>
				))}
			</article>
			<Button className="bg-[var(--color-green-light)] min-h-[68px] max-w-max">
				<span className="text-white">view all</span>
			</Button>
		</section>
	);
}
