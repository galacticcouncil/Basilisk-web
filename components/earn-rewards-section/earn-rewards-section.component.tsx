// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const EarnRewardsSection: React.FC = () => {
	return (
		<Section>
			<SectionHeading variant="ORANGE">Earn rewards</SectionHeading>

			<SectionContent
				title="Liquidity<br/> Mining"
				description="Provide liquidity to selected Snek pools and earn additional incentives on top of rewards from trading fees."
				image={{
					src: "/assets/earn-rewards-section/lbp-tile.svg",
					alt: "earn rewards ilu",
				}}
				cta={{
					label: "learn more",
				}}
			/>

			<SectionContent
				reverse
				title="Decentralized and Community-First"
				description="Basilisk is a decentralized protocol with a community-first approach. All decisions affecting the protocol are adopted in a democratic process."
				image={{
					src: "/assets/earn-rewards-section/ilu-2-v2.svg",
					alt: "earn rewards ilu 2",
				}}
				cta={{
					label: "learn more",
				}}
			/>
		</Section>
	)
}

export default EarnRewardsSection

const Section = styled.section`
	padding: 8rem 2rem;
`
