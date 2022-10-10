// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import SectionHeading from "../section-heading/section-heading.component"

const SupportSection: React.FC = () => {
	return (
		<Section>
			<SectionHeading variant="GREEN">Supporting BSX</SectionHeading>

			<Row>
				<Col>
					<Title>
						Mobile wallets
						<br /> supporting BSX
					</Title>

					<PartnersDirectory>
						<Image src="/assets/support-section/nova.png" alt="Nova" />
					</PartnersDirectory>
				</Col>
				<Col>
					<Title>
						Web Extensions
						<br /> supporting BSX
					</Title>

					<PartnersDirectory>
						<Image src="/assets/support-section/talisman.svg" alt="Nova" />
						<Image src="/assets/support-section/polkadot.svg" alt="Nova" />
					</PartnersDirectory>
				</Col>
			</Row>
		</Section>
	)
}

export default SupportSection

const Section = styled.section`
	padding: 8rem 2rem;

	h2 {
		margin-bottom: 2rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		h2 {
			margin-bottom: 2.4rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			h2 {
				margin-bottom: 4.5rem;
			}
		}
	}
`

const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Col = styled.div`
	max-width: 58.4rem;
	width: 100%;
	border-radius: 1.2rem;
	background-color: ${({ theme }) => theme.supportSection.colBackground};
	border: ${({ theme }) => theme.supportSection.colBorder};

	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: start;
		justify-content: center;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 4rem 5rem;
		}
	}
`

const Title = styled.h3`
	font-size: 1.4rem;
	margin-bottom: 1rem;
	font-weight: 500;
	line-height: 120%;
	color: ${({ theme }) => theme.supportSection.mobileColor};
	text-align: center;

	br {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		color: ${({ theme }) => theme.supportSection.color};
		font-weight: 900;
		font-size: 2.64rem;
		margin-bottom: 2.4rem;
		text-align: start;

		br {
			display: block;
			visibility: visible;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 4.4rem;
			margin-bottom: 4rem;
		}
	}
`

const PartnersDirectory = styled.div`
	display: flex;
	gap: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`
