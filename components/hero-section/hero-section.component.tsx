// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Hooks
import { useTheme } from "styled-components"
import { useMediaQuery } from "usehooks-ts"

// Components
import { HeroButtonLink } from "../button/button.component"
import Image from "../image/image.component"

// Hooks

const variants: Variants = {
	hidden: {
		opacity: 0,
		// y: 100,
	},
	visible: {
		opacity: 1,
		// y: 0,
		transition: {
			// delay: 0.3,
			delayChildren: 0.2,
			staggerChildren: 0.4,
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
			duration: 1,
			// ease: "easeIn",
			// type: "spring",
			mass: 1,
			stiffness: 100,
			damping: 15,
			// type: "spring",
			// mass: 1,
			// stiffness: 256,
			// damping: 24,
			// ease: [0.5, 0, 0.56, 0.99],
		},
	},
}

const opacityVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			// delay: 0.5,
			// duration: 1,
			ease: "easeIn",
			// type: "spring",
			// mass: 1,
			// stiffness: 100,
			// damping: 15,
		},
	},
}

const HeroSection: React.FC = () => {
	const theme = useTheme()
	const isTablet = useMediaQuery(`(min-width: ${theme.breakpoints.sm}`)
	const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg}`)

	return (
		<SectionContainer
			variants={variants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<Heading variants={titleVariants}>
				The Snek you don’t want to live without.
			</Heading>
			<Description variants={titleVariants}>
				<span>Basilisk brings permissionless liquidity to Kusama</span>
				<span>
					Support young projects. Swap tokens or flip NFTs and earn rewards.
				</span>
			</Description>
			<CtaContainer>
				<HeroButtonLink variants={titleVariants} rounded display="inline-flex">
					Open Snek App
				</HeroButtonLink>
			</CtaContainer>

			<IluFigure variants={opacityVariants}>
				{!isTablet && !isDesktop && (
					<Image
						className="mobile"
						src="/assets/hero-section/app_ilu_mobile_v2.png"
						alt="app ilu"
						width={"100%"}
						effect="blur"
					/>
				)}
				{isTablet && !isDesktop && (
					<Image
						className="tablet"
						src="/assets/hero-section/app_ilu_tablet_v2.png"
						alt="app ilu"
						width={"100%"}
						effect="blur"
					/>
				)}
				{isTablet && isDesktop && (
					<Image
						className="desktop"
						src="/assets/hero-section/app_ilu_desktop.png"
						alt="app ilu"
						width={"100%"}
						effect="blur"
					/>
				)}
			</IluFigure>
			<BlurFigure>
				{!isTablet && !isDesktop && (
					<Image
						className="mobile"
						src="/assets/hero-section/bg-ilu_mobile.svg"
						alt="background ilu"
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{
							objectFit: "cover",
						}}
					/>
				)}
				{isTablet && !isDesktop && (
					<Image
						className="tablet"
						src="/assets/hero-section/bg-ilu_tablet.svg"
						alt="background ilu"
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{
							objectFit: "cover",
						}}
					/>
				)}
				{isTablet && isDesktop && (
					<Image
						className="desktop"
						src="/assets/hero-section/bg-ilu.svg"
						alt="background ilu"
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{
							objectFit: "cover",
						}}
					/>
				)}
			</BlurFigure>
		</SectionContainer>
	)
}

export default HeroSection

const SectionContainer = styled(motion.section)`
	position: relative;
	padding: 12.4rem 2rem 0;
	overflow: hidden;
	/* margin-top: 12.4rem; */
	margin-bottom: -5.5rem;
	z-index: 2;
	min-height: 100vh;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.heroSection.backgroundColor};
		z-index: -1;
	}

	/* .mobile {
	}
	.tablet {
		display: none;
		visibility: hidden;
	}
	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: -3rem;

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
			margin-bottom: -0.6rem;

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
	} */
`

const Heading = styled(motion.h1)`
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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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
const Description = styled(motion.p)`
	max-width: 30.1rem;
	margin: 0 auto 2.2rem;
	text-align: center;

	opacity: 0.8;

	font-size: 1.6rem;
	font-weight: 500;
	color: ${({ theme }) => theme.heroSection.descriptionColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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

const CtaContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
`

const IluFigure = styled(motion.figure)`
	max-width: 116.578rem;
	margin: 0 auto;
`

const BlurFigure = styled(motion.figure)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* min-height: 100vh; */

	right: 0;
	z-index: -1;
	/* 
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		bottom: -0.6rem;
	} */
`
