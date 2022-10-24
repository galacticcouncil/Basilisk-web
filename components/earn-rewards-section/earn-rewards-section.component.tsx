// Utils
import styled from "styled-components"

// Components
// import Image from "../image/image.component"
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const EarnRewardsSection: React.FC = () => {
	return (
		<Section>
			{/* <SectionIlu>
				<Image src="/assets/earn-rewards-section/left-ilu.svg" alt="left ilu" />
			</SectionIlu> */}

			<SectionHeading variant="ORANGE">BASILISK PROTOCOL</SectionHeading>

			<SectionContent
				reverse
				title="Decentralized and Community-First."
				titleIcon={{
					src: "/assets/icons/title-icon-orange-2.svg",
					alt: "orange icon",
				}}
				description="Basilisk is a decentralized protocol with a community-first approach. All decisions affecting the protocol are adopted in a democratic process."
				bgImage={{
					src: "/assets/earn-rewards-section/content-bg-ilu.svg",
					alt: "earn rewards ilu",
				}}
				image={{
					top: " 6rem",
					left: " -5rem",
					right: " -8rem",
					bottom: " -34rem",
					src: "/assets/earn-rewards-section/first-content-ilu.svg",
					alt: "earn rewards ilu",
				}}
				cta={{
					type: "link",
					href: "/assets/swap-tokens-section/first-ilu-content-v2.svg",
					label: "LEARN MORE",
				}}
			/>

			{/* <SectionContent
				reverse
				title="Decentralized and Community-First"
				titleIcon={{
					src: "/assets/icons/title-icon-orange-2.svg",
					alt: "orange icon",
				}}
				description="Basilisk is a decentralized protocol with a community-first approach. All decisions affecting the protocol are adopted in a democratic process."
				image={{
					src: "/assets/earn-rewards-section/ilu-2-v2.svg",
					alt: "earn rewards ilu 2",
				}}
				cta={{
					type: "link",
					label: "learn more",
					href: "https://docs.bsx.fi/learn_democracy_intro/",
				}}
			/> */}
		</Section>
	)
}

export default EarnRewardsSection

const Section = styled.section`
	position: relative;
	padding: 7.803rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 9rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 13.7rem 2rem 0;
		}
	}
`

// const SectionIlu = styled.figure`
// 	display: none;
// 	visibility: hidden;

// 	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
// 		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
// 			position: absolute;
// 			top: -25rem;
// 			left: 0;
// 			display: block;
// 			visibility: visible;
// 			z-index: -1;
// 		}
// 	}
// `
