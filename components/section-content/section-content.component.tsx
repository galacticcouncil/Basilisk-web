// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../../components/image/image.component"
import { Button, ButtonLink } from "../../components/button/button.component"

// Types
interface IRowProps {
	reverse?: boolean
}
export interface IProps extends IRowProps {
	title: string
	titleIcon?: {
		src: string
		alt: string
	}
	description: string
	bgImage: {
		src: string
		alt: string
	}
	image: {
		top: number | string
		left: number | string
		right: number | string
		bottom: number | string
		src: string
		alt: string
	}
	cta: {
		type: "link" | "button"
		href?: string
		label: string
		disabled?: boolean
	}
}

const SectionContent: React.FC<IProps> = ({
	title,
	titleIcon,
	description,
	image,
	bgImage,
	cta,
	reverse,
}) => {
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
				// delayChildren: 0.1,
				staggerChildren: 0.18,
			},
		},
	}
	// const iluVariants: Variants = {
	// 	hidden: {
	// 		opacity: 0,
	// 		// y: 100,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		// y: 0,
	// 		transition: {
	// 			// delay: 0.3,
	// 			delayChildren: 0.2,
	// 			staggerChildren: 0.2,
	// 		},
	// 	},
	// }

	const titleVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 75,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				type: "spring",
				mass: 0.1,
				stiffness: 358,
				damping: 60,
			},
		},
	}

	const bgVariants: Variants = {
		hidden: {
			rotateX: "-20deg",
			opacity: 0,
			y: -20,
		},
		visible: {
			rotateX: "0deg",
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				mass: 1,
				stiffness: 115,
				damping: 30,
				delayChildren: 0.2,
				staggerChildren: 0.2,
			},
		},
	}

	return (
		<Row
			reverse={reverse}

			// exit="hidden"
		>
			<Col>
				<ImageContainer
					variants={bgVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<BGFigure
					// variants={titleVariants}
					>
						<Image
							src={bgImage.src}
							alt={bgImage.alt}
							width="100%"
							height="100%"
							effect="blur"
							style={{ objectFit: "cover" }}
						/>
					</BGFigure>
					<IluFigure
						top={image.top}
						left={image.left}
						right={image.right}
						bottom={image.bottom}
						variants={titleVariants}
					>
						<Image
							src={image.src}
							alt={image.alt}
							width="100%"
							height="100%"
							effect="blur"
							style={{
								objectFit: "contain",
							}}
						/>
					</IluFigure>
				</ImageContainer>
			</Col>
			<Col
				variants={variants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<ContentTitle
					variants={titleVariants}
					dangerouslySetInnerHTML={{
						__html: `${title} ${
							titleIcon &&
							`<span>
						<Image
							src="${titleIcon?.src}"
							alt="${titleIcon?.alt}"
							width="100%"
							height="100%"
						/>
					</span>`
						}`,
					}}
				/>
				<ContentDescription variants={titleVariants}>
					{description}
				</ContentDescription>
				<ButtonsContainer variants={titleVariants}>
					{cta.type === "button" && (
						<Button variant="GREEN" disabled={cta.disabled} rounded>
							{cta.label}
						</Button>
					)}
					{cta.type === "link" && (
						<ButtonLink
							variant="GREEN"
							rounded
							display="inline-flex"
							href={cta.href}
						>
							{cta.label}
						</ButtonLink>
					)}
				</ButtonsContainer>
			</Col>
		</Row>
	)
}

export default SectionContent

const Row = styled(motion.div)<IRowProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4.097rem;

	&:not(:last-child) {
		margin-bottom: 3.803rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		align-items: center;
		flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
		gap: 5.578rem;

		&:not(:last-child) {
			margin-bottom: 16rem;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			gap: 7rem;

			&:not(:last-child) {
				margin-bottom: 23rem;
			}
		}
	}
`

const Col = styled(motion.div)`
	&:nth-child(1) {
		max-width: 54.7rem;
		width: 100%;
		perspective: 120rem;
	}
	&:nth-child(2) {
		max-width: 64rem;
		width: 100%;
		button {
			margin: 0 auto;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			button {
				margin: initial;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const ContentTitle = styled(motion.h3)`
	position: relative;

	font-weight: 900;
	line-height: 120%;
	font-size: 3.2rem;
	margin-bottom: 1.6rem;
	color: ${({ theme }) => theme.sectionContainer.titleColor};

	text-align: center;

	span {
		display: none;
		visibility: hidden;
	}

	.koda {
		width: 100%;
		max-width: 15rem;
		/* height: 3rem; */
		object-fit: contain;
		/* border: 1px solid red; */
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 3.8rem;
		margin-bottom: 3.7rem;

		span {
			display: block;
			visibility: visible;
			position: absolute;
			top: -3rem;
			left: -2.5rem;
			width: 2.25rem;
			height: 2.25rem;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 6.4rem;
			margin-bottom: 3.4rem;
			span {
				top: -4.5rem;
				left: -3.8rem;
				width: 3.7rem;
				height: 3.7rem;
			}
		}
	}
`

const ContentDescription = styled(motion.p)`
	text-align: center;
	font-size: 1.6rem;
	margin-bottom: 2.4rem;
	font-weight: 500;
	line-height: 23px;
	color: ${({ theme }) => theme.sectionContainer.descriptionColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		line-height: 22px;
		text-align: start;
		font-size: 1.8rem;
		margin-bottom: 3.7rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 2.8rem;
			margin-bottom: 6.7rem;
			line-height: 36px;
			max-width: 56.059rem;
		}
	}
`

const ButtonsContainer = styled(motion.div)`
	display: flex;
	justify-content: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		justify-content: start;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const ImageContainer = styled(motion.div)`
	position: relative;
	width: 100%;
	/* height: 100%; */
	overflow: hidden;
	border-radius: 3.7rem;
	perspective: 120rem;
	transform-style: preserve-3d;
	/* transform: rotateX(-20deg); */

	/* 297.6px */
	height: 31.4rem;
	max-width: 34.692rem;
	margin: 0 auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 32.88rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			max-width: 54.8rem;
			height: 49.9rem;
		}
	}
`

const BGFigure = styled(motion.figure)`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`

interface IIluProps {
	top: number | string
	left: number | string
	right: number | string
	bottom: number | string
}

const IluFigure = styled(motion.figure)<IIluProps>`
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
`
