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
						<Image
							src="/assets/support-section/nova.png"
							alt="Nova"
							height={"100%"}
						/>
					</PartnersDirectory>
				</Col>
				<Col>
					<Title>
						Web Extensions
						<br /> supporting BSX
					</Title>

					<PartnersDirectory>
						<Image
							src="/assets/support-section/talisman.svg"
							alt="talisman"
							height={"100%"}
						/>
						<Image
							src="/assets/support-section/polkadot.svg"
							alt="polkadot"
							height={"100%"}
						/>
					</PartnersDirectory>
				</Col>
			</Row>
		</Section>
	)
}

export default SupportSection

const Section = styled.section`
	padding: 16rem 2rem 8rem;

	h2 {
		margin-bottom: 2rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		align-items: start;
		justify-content: center;
		padding: 3.1rem 1.56rem 3.1rem 3rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 5.2rem 2.6rem 5.2rem 4rem;
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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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
	height: 4.2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 3.2rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			height: 6rem;
		}
	}
`
