// Utils
import styled from "styled-components"

// Components
import { HeroButtonLink } from "../button/button.component"
import Image from "../image/image.component"

// Hooks

const HeroSection: React.FC = () => {
	return (
		<SectionContainer>
			<Heading>The Snek you don’t want to live without.</Heading>
			<Description>
				<span>Basilisk brings permissionless liquidity to Kusama</span>
				<span>
					Support young projects. Swap tokens or flip NFTs and earn rewards.
				</span>
			</Description>
			<CtaContainer>
				<HeroButtonLink rounded display="inline-flex">
					Open Snek App
				</HeroButtonLink>
			</CtaContainer>

			<IluFigure>
				<Image
					className="mobile"
					src="/assets/hero-section/app_ilu_mobile_v2.png"
					alt="app ilu"
					width={"100%"}
					effect="blur"
				/>
				<Image
					className="tablet"
					src="/assets/hero-section/app_ilu_tablet_v2.png"
					alt="app ilu"
					width={"100%"}
					effect="blur"
				/>
				<Image
					className="desktop"
					src="/assets/hero-section/app_ilu_desktop.png"
					alt="app ilu"
					width={"100%"}
					effect="blur"
				/>
			</IluFigure>
			<BlurFigure>
				<Image
					className="mobile"
					src="/assets/hero-section/bg-ilu_mobile.svg"
					alt="background ilu"
					width={"100%"}
					effect="blur"
				/>
				<Image
					className="tablet"
					src="/assets/hero-section/bg-ilu_tablet.svg"
					alt="background ilu"
					width={"100%"}
					effect="blur"
				/>
				<Image
					className="desktop"
					src="/assets/hero-section/bg-ilu.svg"
					alt="background ilu"
					width={"100%"}
					effect="blur"
				/>
			</BlurFigure>
		</SectionContainer>
	)
}

export default HeroSection

const SectionContainer = styled.section`
	position: relative;
	padding: 6rem 2rem 0;
	overflow: hidden;

	.mobile {
	}
	.tablet {
		display: none;
		visibility: hidden;
	}
	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		.mobile {
			display: none;
			visibility: hidden;
		}
		.tablet {
			display: block;
			visibility: visible;
		}
		.desktop {
			display: none;
			visibility: hidden;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			.mobile {
				display: none;
				visibility: hidden;
			}
			.tablet {
				display: none;
				visibility: hidden;
			}
			.desktop {
				display: block;
				visibility: visible;
			}
		}
	}
`

const Heading = styled.section`
	max-width: 25.7rem;
	margin: 0 auto 1.5rem;
	text-align: center;

	font-size: 4rem;
	line-height: 1.1;
	font-weight: 800;

	background: ${({ theme }) => theme.heroSection.headingBackground};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 42.7rem;
		font-size: 4.2rem;
		margin: 0 auto 1.78rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			max-width: 79.3rem;
			font-size: 7.2rem;
			margin: 0 auto 2.8rem;
		}
	}
`
const Description = styled.section`
	max-width: 30.1rem;
	margin: 0 auto 2.2rem;
	text-align: center;

	font-size: 1.6rem;
	font-weight: 500;
	color: ${({ theme }) => theme.heroSection.descriptionColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 106.3rem;
		font-size: 1.8rem;
		margin: 0 auto 1.78rem;

		span {
			display: block;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 3.4rem;
			margin: 0 auto 2.8rem;
		}
	}
`

const CtaContainer = styled.div`
	display: flex;
	justify-content: center;
`

const IluFigure = styled.figure`
	max-width: 116.578rem;
	margin: 0 auto;
`

const BlurFigure = styled.figure`
	position: absolute;
	bottom: 0rem;
	left: 0;
	width: 100%;
	right: 0;
	z-index: -1;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		bottom: -0.6rem;
	}
`
