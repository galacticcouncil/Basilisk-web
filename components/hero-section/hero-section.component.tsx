// Utils
import styled from "styled-components"
import { motion, Variants, useScroll, useTransform } from "framer-motion"

// Hooks
// import { useTheme } from "styled-components"
import {
	//  useMediaQuery,
	useBoolean,
} from "usehooks-ts"

// Components
import { ButtonLink } from "../button/button.component"
import Image from "../image/image.component"

// Hooks

const HeroSection: React.FC = () => {
	// const theme = useTheme()
	// const isTablet = useMediaQuery(`(min-width: ${theme.breakpoints.sm}`)
	// const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg}`)
	const { value: isBgLoaded, setTrue } = useBoolean(true)

	const { scrollYProgress } = useScroll()

	// console.log(scrollYProgress)

	const transformIlu = useTransform(scrollYProgress, [0, 0.1], [0, -100])
	const transformIlu2 = useTransform(scrollYProgress, [0, 0.1], [0, -50])
	// console.log(transformIlu)

	const variants: Variants = {
		hidden: {
			opacity: 0,
			// y: 100,
		},
		visible: {
			opacity: 1,
			// y: 0,
			transition: {
				// staggerChildren: 0.03,
			},
		},
	}

	const titleVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 150,
			perspective: "1200px",
		},
		visible: {
			opacity: 1,
			y: 0,
			perspective: 0,
			transition: {
				type: "spring",
				mass: 0.1,
				stiffness: 358,
				damping: 60,
			},
		},
	}

	const mobileLeftVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 150,
			// perspective: "1200px",
			// zIndex: -1,
		},
		visible: {
			opacity: 1,
			y: 0,
			// perspective: 0,
			// zIndex: -1,
			transition: {
				type: "spring",
				mass: 0.1,
				stiffness: 358,
				damping: 60,
			},
		},
	}

	const mobileRightVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 150,
			perspective: "1200px",
			zIndex: 1,
		},
		visible: {
			opacity: 1,
			y: 0,
			perspective: 0,
			zIndex: 1,
			transition: {
				type: "spring",
				mass: 0.1,
				stiffness: 358,
				damping: 60,
			},
		},
	}

	const descVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 150,
		},
		visible: {
			opacity: 0.8,
			y: 0,
			transition: {
				type: "spring",
				mass: 0.1,
				stiffness: 358,
				damping: 60,
			},
		},
	}

	const iluVariants: Variants = {
		hidden: {
			// opacity: 0,
			// perspective: "100px",
			// transform: "rotateX(10deg)",
			rotateX: "20deg",
			y: -100,
			scale: 0.9,
		},
		visible: {
			// transform: "rotateX(0deg)",
			rotateX: "0deg",
			y: 0,
			scale: 1,
			// perspective: "0px",
			// opacity: 1,
			transition: {
				// delay: 3,
				// duration: 3,
				// ease: "easeOut",
				type: "spring",
				mass: 1,
				stiffness: 43,
				damping: 30,
			},
		},
	}

	return (
		<SectionContainer>
			{isBgLoaded && (
				<motion.div
					variants={variants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<Heading
						variants={titleVariants}
						// initial="hidden" animate="visible"
					>
						The Snek you don’t want to live without.
					</Heading>
					<Description
						variants={descVariants}
						// initial="hidden" animate="visible"
					>
						<motion.span>
							Basilisk brings permissionless liquidity to Kusama
						</motion.span>
						<motion.span>
							Support young projects. Swap tokens or flip NFTs and earn rewards.
						</motion.span>
					</Description>
					<CtaContainer variants={titleVariants}>
						<ButtonLink
							rounded
							variant="GREEN"
							display="inline-flex"
							href="https://kodadot.xyz/"
							rel="noopener noreferrer"
							target="_blank"
						>
							NFT
						</ButtonLink>
						<ButtonLink
							rounded
							display="inline-flex"
							href="https://app.basilisk.cloud/#/trade"
							rel="noopener noreferrer"
							target="_blank"
						>
							DEFI
						</ButtonLink>
					</CtaContainer>
					<IluFigure
						style={{
							y: transformIlu,
						}}
					>
						<MobileContainer>
							<motion.div
								variants={mobileLeftVariants}
								style={{
									y: transformIlu2,
								}}
							>
								<Image
									className="mobile left"
									src="/assets/hero-section/app_ilu_mobile-left-opt.png"
									alt="app ilu"
									width={"100%"}
									height={"100%"}
									effect="blur"
									style={{
										objectFit: "contain",
									}}
								/>
							</motion.div>
							<motion.div variants={mobileRightVariants}>
								<Image
									className="mobile right"
									src="/assets/hero-section/app_ilu_mobile-right-opt.png"
									alt="app ilu"
									width={"100%"}
									effect="blur"
									style={{
										objectFit: "contain",
									}}
								/>
							</motion.div>
						</MobileContainer>
						<IluContainer
							variants={iluVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{
								once: true,
								amount: 0.5,
							}}
						>
							<Image
								className="tablet"
								src="/assets/hero-section/app_ilu_tablet_v2-min.png"
								alt="app ilu"
								width={"100%"}
								effect="blur"
								style={{
									objectFit: "contain",
								}}
							/>
							<Image
								className="desktop"
								src="/assets/hero-section/app_ilu_desktop-v2-min.png"
								alt="app ilu"
								width={"100%"}
								effect="blur"
								style={{
									objectFit: "contain",
									objectPosition: "top",
								}}
							/>
						</IluContainer>
					</IluFigure>
				</motion.div>
			)}

			<BlurFigure className="mobile">
				<Image
					src="/assets/hero-section/bg-ilu_mobile-v2-opt.png"
					alt="background ilu"
					width={"100%"}
					height={"100%"}
					effect="blur"
					style={{
						objectFit: "cover",
					}}
					visibleByDefault={true}
					// afterLoad={() => setTrue()}
				/>
			</BlurFigure>
			<BlurFigure className="tablet">
				<Image
					src="/assets/hero-section/bg-ilu_tablet-v2-opt.png"
					alt="background ilu 2"
					width={"100%"}
					height={"100%"}
					effect="blur"
					style={{
						objectFit: "cover",
					}}
					visibleByDefault={true}
					// afterLoad={() => setTrue()}
				/>
			</BlurFigure>
			<BlurFigure className="desktop">
				<Image
					src="/assets/hero-section/bg-ilu-v3-opt-v6.png"
					alt="background ilu 3"
					width={"100%"}
					height={"100%"}
					effect="blur"
					style={{
						objectFit: "cover",
						objectPosition: "top",
					}}
					visibleByDefault={true}
					// threshold={200}
					// afterLoad={() => setTrue()}
				/>
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
	margin-bottom: 0rem;

	/* margin-bottom: -16.5rem; */
	z-index: 2;
	min-height: 85rem;

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

	.mobile {
		img {
			margin-bottom: -1rem;
		}
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
		min-height: 65rem;

		.mobile {
			display: none;
			visibility: hidden;
		}
		.tablet {
			display: block;
			visibility: visible;

			img {
				margin-bottom: -1rem;
			}
		}
		.desktop {
			display: none;
			visibility: hidden;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* margin-bottom: -43rem; */
			min-height: 90rem;

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

const Heading = styled(motion.h1)`
	max-width: 26.7rem;
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

			@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				margin: 10rem auto 2.8rem;
			}
		}
	}
`
const Description = styled(motion.p)`
	max-width: 30.1rem;
	margin: 0 auto 4.2rem;
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
	align-items: center;
	flex-direction: column;
	margin-bottom: 6.4rem;
	gap: 1.2rem;

	a {
		width: 100%;
		max-width: 30.1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: 5.7rem;
		flex-direction: row;

		a {
			width: unset;
			max-width: unset;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-bottom: 4.4rem;
		}
	}
`

const IluFigure = styled(motion.figure)`
	/* max-width: 116.578rem; */
	margin: 0 auto -23rem;
	perspective: 120rem;

	.mobile {
		height: 36rem;
	}
	.tablet {
	}
	.desktop {
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.mobile {
		}
		.tablet {
		}
		.desktop {
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin: 0 auto -35rem;

			.mobile {
			}
			.tablet {
			}
			.desktop {
				width: 100%;
				max-width: 150rem;
				/* margin: 4rem auto -15rem; */
				@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
					margin: 4rem auto -15rem;
				}
			}
		}
	}
`

const IluContainer = styled(motion.div)`
	perspective: 206rem;
	transform-style: preserve-3d;
	/* transform: rotateX(4deg); */
`

const MobileContainer = styled(motion.div)`
	position: relative;
	/* border: 1px solid red; */
	height: 38rem;

	.left {
		position: absolute;
		/* border: 1px solid blue; */
		left: -6rem;
		top: 5rem;
		width: 100%;
		height: 46rem;
		/* z-index: -10000; */
	}
	.right {
		position: absolute;
		/* z-index: 2; */
		top: -4rem;
		right: -3.6rem;
		height: 46rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
		visibility: hidden;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const BlurFigure = styled(motion.figure)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	/* height: 100%; */
	/* min-height: 100vh; */

	right: 0;
	z-index: -1;
	/* bottom: -20rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		/* bottom: -20rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* bottom: -65rem; */
			width: 400rem;
			left: 50%;
			transform: translateX(-50%);
			bottom: -190rem;
		}
	}
`
