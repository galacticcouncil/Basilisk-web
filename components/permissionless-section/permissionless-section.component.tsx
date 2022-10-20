// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const PermissionlessSection: React.FC = () => {
	return (
		<Section>
			<SectionHeading variant="ORANGE">Permissionless</SectionHeading>

			<SectionContent
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
			/>
		</Section>
	)
}

export default PermissionlessSection

const Section = styled.section`
	position: relative;
	padding: 7.803rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 6rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 2rem;
		}
	}
`

const SectionIlu = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			position: absolute;
			top: -25rem;
			left: 0;
			display: block;
			visibility: visible;
			z-index: -1;
		}
	}
`
