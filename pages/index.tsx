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

const OnChainSection = dynamic(
	() =>
		import("../components/onchain-section/onchain-section.component").then(
			(mod) => mod.default
		)
	// {
	// 	suspense: true,
	// }
)

const SwapTokensSection = dynamic(
	() =>
		import(
			"../components/swap-tokens-section/swap-tokens-section.component"
		).then((mod) => mod.default)
	// {
	// 	suspense: true,
	// }
)

const NftSection = dynamic(
	() =>
		import("../components/nft-section/nft-section.component").then(
			(mod) => mod.default
		)
	// {
	// 	suspense: true,
	// }
)

const EarnRewardsSection = dynamic(
	() =>
		import(
			"../components/earn-rewards-section/earn-rewards-section.component"
		).then((mod) => mod.default)
	// {
	// 	suspense: true,
	// }
)

const SupportSection = dynamic(
	() =>
		import("../components/support-section/support-section.component").then(
			(mod) => mod.default
		)
	// {
	// 	suspense: true,
	// }
)

const RoadmapSection = dynamic(
	() =>
		import("../components/roadmap-section/roadmap-section.component").then(
			(mod) => mod.default
		)
	// {
	// 	suspense: true,
	// }
)

const LearnMoreSection = dynamic(
	() =>
		import(
			"../components/learn-more-section/learn-more-section.component"
		).then((mod) => mod.default)
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
			<SwapTokensSection />
			<Suspense fallback={"loading..."}>
				<NftSection />
				<EarnRewardsSection />
			</Suspense>
			<SupportSection />
			<RoadmapSection />
			<LearnMoreSection />
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
