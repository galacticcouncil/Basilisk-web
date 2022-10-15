// Utils
import dynamic from "next/dynamic"
import { Suspense } from "react"

// Layouts
import PageLayout from "../layouts/page/page.layout"

// Components
import Head from "next/head"

// Types
import { ReactElement } from "react"

// Sections
import HeroSection from "../components/hero-section/hero-section.component"
import OnChainSection from "../components/onchain-section/onchain-section.component"
// import SwapTokensSection from "../components/swap-tokens-section/swap-tokens-section.component"
// import NftSection from "../components/nft-section/nft-section.component"
// import EarnRewardsSection from "../components/earn-rewards-section/earn-rewards-section.component"
// import SupportSection from "../components/support-section/support-section.component"
// import RoadmapSection from "../components/roadmap-section/roadmap-section.component"
// import LearnMoreSection from "../components/learn-more-section/learn-more-section.component"

// const OnChainSection = dynamic(
// 	() => import("../components/onchain-section/onchain-section.component")
// 	// {
// 	// 	suspense: true,
// 	// }
// )

const SwapTokensSection = dynamic(
	() =>
		import("../components/swap-tokens-section/swap-tokens-section.component")
	// {
	// 	suspense: true,
	// }
)

const NftSection = dynamic(
	() => import("../components/nft-section/nft-section.component")
	// {
	// 	suspense: true,
	// }
)

const EarnRewardsSection = dynamic(
	() =>
		import("../components/earn-rewards-section/earn-rewards-section.component")
	// {
	// 	suspense: true,
	// }
)

const SupportSection = dynamic(
	() => import("../components/support-section/support-section.component")
	// {
	// 	suspense: true,
	// }
)

const RoadmapSection = dynamic(
	() => import("../components/roadmap-section/roadmap-section.component")
	// {
	// 	suspense: true,
	// }
)

const LearnMoreSection = dynamic(
	() => import("../components/learn-more-section/learn-more-section.component")
	// {
	// 	suspense: true,
	// }
)

const Home = () => {
	return (
		<>
			<Head>
				<title>Basilisk</title>
				<meta name="description" content="" />
			</Head>

			<HeroSection />
			<OnChainSection />
			<Suspense fallback={"loading..."}>
				<SwapTokensSection />
				<NftSection />
				<EarnRewardsSection />
				<SupportSection />
				<RoadmapSection />
				<LearnMoreSection />
			</Suspense>
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
