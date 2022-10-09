// Utils

// Layouts
import PageLayout from "../layouts/page/page.layout"

// Components
import Head from "next/head"
import HeroSection from "../components/hero-section/hero-section.component"
import OnChainSection from "../components/onchain-section/onchain-section.component"

// Types
import { ReactElement } from "react"

const Home = () => {
	return (
		<>
			<Head>
				<title>Basilisk</title>
				<meta name="description" content="" />
			</Head>

			<HeroSection />
			<OnChainSection />
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
