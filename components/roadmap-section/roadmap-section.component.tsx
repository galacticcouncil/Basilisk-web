// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import { Button } from "../button/button.component"

const RoadmapSection: React.FC = () => {
	return (
		<Section>
			<SectionHeading variant="GREEN">The roadmap</SectionHeading>

			<Description>
				Basilisk is a decentralized protocol with a community-first approach.
				All decisions affecting the protocol are adopted in a democratic
				process.
			</Description>
			<Button rounded left="auto" right="auto">
				Check live roadmap
			</Button>
		</Section>
	)
}

export default RoadmapSection

const Section = styled.section`
	position: relative;
	padding: 8rem 2rem;

	h2 {
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		h2 {
			margin-bottom: 0.6rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			h2 {
				margin-bottom: 1rem;
			}
		}
	}
`

const Description = styled.p`
	font-size: 1.6rem;
	line-height: 2.28rem;
	font-weight: 500;
	text-align: center;
	margin-bottom: 2.8rem;
	color: ${({ theme }) => theme.roadmapSection.color};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 1.68rem;
		max-width: 64.98rem;
		margin: 0 auto 2.4rem;
		line-height: 2.352rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 2.8rem;
			max-width: 108.3rem;
			margin: 0 auto 4rem;
			line-height: 3.92rem;
		}
	}
`
