// Utils
import dynamic from "next/dynamic"
import { Suspense } from "react"

// Layouts
import PageLayout from "../layouts/page/page.layout"

// Components
import Head from "next/head"

// Types
import { ReactElement } from "react"

import styled from "styled-components"

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

// const SupportProjectsSection = dynamic(
// 	() =>
// 		import(
// 			"../components/support-projects-section/support-projects-section.component"
// 		)
// 	// {
// 	// 	suspense: true,
// 	// }
// )

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

// const PermissionlesSection = dynamic(
// 	() =>
// 		import(
// 			"../components/permissionless-section/permissionless-section.component"
// 		)
// 	// {
// 	// 	suspense: true,
// 	// }
// )

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
				{/* <!-- Primary Meta Tags --> */}
				<title>Basilisk - DeFi & NFTs in Kusama</title>
				<meta name="title" content="Basilisk - DeFi & NFTs in Kusama" />
				<meta
					name="description"
					content="Snek brings permissionless liquidity to the Kusama ecosystem. Swap tokens, flip NFTs and earn rewards. Help young crypto projects bootstrap liquidity and receive tokens."
				/>
				<link rel="canonical" href="https://bsx.fi/" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://bsx.fi/" />
				<meta property="og:title" content="Basilisk - DeFi & NFTs in Kusama" />
				<meta
					property="og:description"
					content="Snek brings permissionless liquidity to the Kusama ecosystem. Swap tokens, flip NFTs and earn rewards. Help young crypto projects bootstrap liquidity and receive tokens."
				/>
				<meta property="og:image" content="/assets/meta_image-min.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://bsx.fi/" />
				<meta
					property="twitter:title"
					content="Basilisk - DeFi & NFTs in Kusama"
				/>
				<meta
					property="twitter:description"
					content="Snek brings permissionless liquidity to the Kusama ecosystem. Swap tokens, flip NFTs and earn rewards. Help young crypto projects bootstrap liquidity and receive tokens."
				/>
				<meta property="twitter:image" content="/assets/meta_image-min.png" />
			</Head>
			<HeroSection />
			{/* <OnChainSection /> */}
			<Suspense fallback={"loading..."}>
				<SwapTokensSection />
				{/* <SupportProjectsSection /> */}
				<NftSection />
				{/* <PermissionlesSection /> */}
				<SupportSection />
				<EarnRewardsSection />
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
