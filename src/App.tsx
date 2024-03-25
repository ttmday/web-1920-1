import './App.css';
import HeroWeb1920 from './components/hero/hero';
import SideSocials from './components/side_socials/side_socials';
import FooterLayout from './layouts/footer';

import HeaderLayout from './layouts/header';
import JoinUsSection from './sections/join_us/joinUs';
import LatestVideosSection from './sections/latest_videos/latestVideos';
import OurAppSection from './sections/our_app/ourApp';
import OurMissionSection from './sections/our_mission/ourMission';
import OurProductsSection from './sections/our_products/ourProducts';
import SlideSection from './sections/slide/slide';
import WhatDoWeDoSection from './sections/what_do_we_do/whatDoWeDo';

function App() {
	return (
		<>
			<HeaderLayout />
			<SideSocials />
			<main>
				<HeroWeb1920 />
				<WhatDoWeDoSection />
				<OurProductsSection />
				<OurMissionSection />
				<LatestVideosSection />
				<JoinUsSection />
				<OurAppSection />
				<SlideSection />
			</main>

			<FooterLayout />
		</>
	);
}

export default App;
