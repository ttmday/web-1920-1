import LiteYoutubeEmbed from 'react-lite-youtube-embed';

export default function LiteVideoYoutube({
	videoId,
	title,
}: {
	videoId: string;
	title: string;
}) {
	return <LiteYoutubeEmbed id={videoId} title={title} />;
}
