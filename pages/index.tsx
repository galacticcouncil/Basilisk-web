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
	() => import("../components/onchain-section/onchain-section.component"),
	{
		suspense: true,
	}
)

const SwapTokensSection = dynamic(
	() =>
		import("../components/swap-tokens-section/swap-tokens-section.component"),
	{
		suspense: true,
	}
)

const NftSection = dynamic(
	() => import("../components/nft-section/nft-section.component"),
	{
		suspense: true,
	}
)

const EarnRewardsSection = dynamic(
	() =>
		import("../components/earn-rewards-section/earn-rewards-section.component"),
	{
		suspense: true,
	}
)

const Home = () => {
	return (
		<>
			<Head>
				<title>Basilisk</title>
				<meta name="description" content="" />
			</Head>

			<HeroSection />
			<Suspense fallback={"loading..."}>
				<OnChainSection />
				<SwapTokensSection />
				<NftSection />
				<EarnRewardsSection />
			</Suspense>
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
