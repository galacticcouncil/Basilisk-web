// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"
import Image from "../image/image.component"

const SupportProjectsSection: React.FC = () => {
	return (
		<Section id="support-projects">
			<SectionHeading variant="DEFAULT">Support Young Projects</SectionHeading>

			<SectionContent
				reverse
				title="Help Raise Liquidity"
				titleIcon={{
					src: "/assets/icons/title-icon-orange.svg",
					alt: "white icon",
				}}
				description="Support young projects which want to distribute tokens to their community while bootstrapping liquidity."
				image={{
					src: "/assets/swap-tokens-section/lbp-tile.svg",
					alt: "swap tokens ilu 2",
				}}
				cta={{
					type: "link",
					href: "https://docs.bsx.fi/product_snek_swap/",
					label: "Snek LBP",
				}}
			/>
		</Section>
	)
}

export default SupportProjectsSection

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
