// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"
import Image from "../image/image.component"

const SwapTokensSection: React.FC = () => {
	return (
		<Section id="swap-tokens">
			<SectionIlu>
				<Image
					src="/assets/swap-tokens-section/top-left-ilu.svg"
					alt="top left ilu"
				/>
			</SectionIlu>

			<SectionHeading variant="DEFAULT">DEFI features</SectionHeading>

			<SectionContent
				title="Buy and sell tokens using Snek Swap."
				titleIcon={{
					src: "/assets/icons/title-icon-white.svg",
					alt: "white icon",
				}}
				description="Permissionless and without relying on centralized exchanges or other intermediaries."
				bgImage={{
					src: "/assets/swap-tokens-section/content-bg-ilu.svg",
					alt: "swap tokens ilu",
				}}
				image={{
					top: "-5rem",
					left: "0",
					right: "0",
					bottom: "-6rem",
					width: "100%",
					src: "/assets/swap-tokens-section/first-ilu-content-v4.png",
					alt: "swap tokens ilu",
				}}
				cta={{
					type: "link",
					href: "https://docs.bsx.fi/product_snek_swap/",
					label: "OPEN SNEK SWAP",
				}}
			/>

			<SectionContent
				reverse
				title="Support projects with Snek LBP."
				titleIcon={{
					src: "/assets/icons/title-icon-white.svg",
					alt: "white icon",
				}}
				description="Support young projects which want to distribute tokens to their community while bootstrapping liquidity."
				bgImage={{
					src: "/assets/swap-tokens-section/content-bg-ilu.svg",
					alt: "swap tokens ilu 2",
				}}
				image={{
					top: "-20rem",
					left: "3rem",
					right: "-14rem",
					bottom: "-19rem",
					width: "100%",
					src: "/assets/swap-tokens-section/second-ilu-content-v2.png",
					alt: "swap tokens ilu 2",
				}}
				cta={{
					type: "link",
					href: "https://app.basilisk.cloud/#/lbp",
					label: "GO TO LBP",
				}}
			/>

			<SectionContent
				title="Earn rewards<br/> from Snek Farms."
				titleIcon={{
					src: "/assets/icons/title-icon-white.svg",
					alt: "white icon",
				}}
				description="Provide liquidity to selected Snek Swap pools and earn additional incentives on top of rewards from trading fees."
				bgImage={{
					src: "/assets/swap-tokens-section/content-bg-ilu.svg",
					alt: "earn rewards third ilu",
				}}
				image={{
					top: "0rem",
					left: "0rem",
					right: "0rem",
					bottom: "-6rem",
					width: "100%",
					src: "/assets/swap-tokens-section/third-ilu-content-v2.png",
					alt: "earn rewards third ilu",
				}}
				cta={{
					type: "link",
					href: "https://app.basilisk.cloud/#/lbp",
					label: "LEARN MORE",
				}}
			/>
		</Section>
	)
}

export default SwapTokensSection

const SectionIlu = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			position: absolute;
			top: 0;
			right: 0;
			display: block;
			visibility: visible;
		}
	}
`

const Section = styled.section`
	position: relative;
	padding: 6rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 6rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 2rem;
		}
	}
`
