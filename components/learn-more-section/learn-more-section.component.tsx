// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Compoments
import Image from "../image/image.component"
import { ButtonLink } from "../button/button.component"

const LearnMoreSection: React.FC = () => {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.6,
				// delayChildren: 0.1,
				staggerChildren: 0.08,
			},
		},
	}

	const titleVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 75,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				mass: 0.1,
				stiffness: 358,
				damping: 60,
			},
		},
	}

	return (
		<Section
			variants={variants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<Container
				variants={variants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<MobileLeftIlu>
					<Image
						src="/assets/learn-more-section/top-left.svg"
						alt="top left"
						effect="blur"
					/>
				</MobileLeftIlu>

				<MobileRightIlu>
					<Image
						src="/assets/learn-more-section/top-right.svg"
						alt="top left"
						effect="blur"
					/>
				</MobileRightIlu>

				{/* <DesktopRightTopIlu>
					<Image
						src="/assets/learn-more-section/top-right-desktop.svg"
						alt="top left"
						width={"100%"}
						height={"100%"}
						effect="blur"
					/>
				</DesktopRightTopIlu> */}

				<DesktopRightIlu>
					<Image
						src="/assets/learn-more-section/eyes-green-section.svg"
						alt="bottom right"
						width={"100%"}
						height={"100%"}
						effect="blur"
					/>
				</DesktopRightIlu>

				<Title variants={titleVariants}>
					Learn more
					<br /> about Basilisk
				</Title>
				<ButtonsContainer variants={titleVariants}>
					<ButtonLink
						variant="GREEN_BLACK"
						rounded
						href="https://docs.bsx.fi/tokenomics/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Tokenomics
					</ButtonLink>
					<ButtonLink
						variant="GREEN_BLACK"
						rounded
						href="https://basiliskfi.substack.com/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Newsletter
					</ButtonLink>
					{/* <ButtonLink
						variant="GREEN_BLACK"
						rounded
						href="https://github.com/galacticcouncil/Basilisk-assets/tree/master/Basilisk%20Press%20Kit"
						rel="noopener noreferrer"
						target="_blank"
					>
						Press Kit
					</ButtonLink> */}
				</ButtonsContainer>
			</Container>
		</Section>
	)
}

export default LearnMoreSection

const Section = styled(motion.section)`
	margin: 7.925rem auto 0;

	padding: 0 2rem;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 8.5rem auto 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin: 8.7rem auto 0;
			padding: 0 4rem;
		}
	}
`

const MobileLeftIlu = styled.figure`
	position: absolute;
	top: 0;
	left: 0;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
		visibility: hidden;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`
const MobileRightIlu = styled.figure`
	position: absolute;
	top: 0;
	right: 0;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
		visibility: hidden;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const DesktopRightIlu = styled.figure`
	display: none;
	visibility: hidden;
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		position: absolute;
		display: block;
		visibility: visible;
		/* width: 40rem; */
		/* top: -48rem;
		bottom: 0rem;
		right: -67rem;
		width: 150rem;
		height: 150rem; */

		top: -35rem;
		bottom: 0rem;
		right: -35rem;
		width: 70rem;
		height: 90rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			top: -42rem;
			bottom: 0rem;
			right: -64rem;
			width: 133rem;
			height: 135rem;
		}
	}
`

const Container = styled(motion.div)`
	overflow: hidden;
	position: relative;
	max-width: 145rem;
	width: 100%;
	padding: 7.025rem 3.3rem 3.165rem;
	border-radius: 2rem;
	margin: 0 auto;
	background: ${({ theme }) => theme.learnMoreSection.background};
	color: ${({ theme }) => theme.learnMoreSection.color};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 4.316rem 4.5rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 13.55rem 10.693rem;
		}
	}
`

const Title = styled(motion.h2)`
	position: relative;
	z-index: 1;
	font-weight: 900;
	font-size: 3.2rem;
	line-height: 3.52rem;
	text-align: center;

	margin-bottom: 2.8rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 3.4rem;
		line-height: 3.74rem;

		margin-bottom: 2.1rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 7.2rem;
			line-height: 110%;

			margin-bottom: 3.707rem;
		}
	}
`

const ButtonsContainer = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	position: relative;
	z-index: 1;

	a {
		width: 100%;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		a {
			min-width: initial;
			width: initial;
			padding: 1.25rem 5.1rem;
			font-size: 0.96rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			a {
				width: initial;
				padding: 2.1rem 8.5rem;
				font-size: 1.6rem;
			}
		}
	}
`
