// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../../components/image/image.component"
import {
	Button,
	// ButtonLink
} from "../../components/button/button.component"

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
	image: {
		src: string
		alt: string
	}
	cta: {
		label: string
		disabled?: boolean
	}
}

const SectionContent: React.FC<IProps> = ({
	title,
	titleIcon,
	description,
	image,
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
				delayChildren: 0.2,
				staggerChildren: 0.6,
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
				ease: "easeIn",
				// type: "spring",
				// mass: 1,
				// stiffness: 100,
				// damping: 15,
				// type: "spring",
				// mass: 1,
				// stiffness: 256,
				// damping: 24,
				// ease: [0.5, 0, 0.56, 0.99],
			},
		},
	}

	return (
		<Row
			reverse={reverse}
			variants={variants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}

			// exit="hidden"
		>
			<Col variants={titleVariants}>
				<Image src={image.src} alt={image.alt} width="100%" effect="blur" />
			</Col>
			<Col>
				<ContentTitle
					variants={titleVariants}
					dangerouslySetInnerHTML={{
						__html: `${title} ${
							titleIcon &&
							`<span>
						<Image
							src="${titleIcon?.src}"
							alt="${titleIcon?.alt}"
							width="37"
							height="37"
						/>
					</span>`
						}`,
					}}
				/>
				<ContentDescription variants={titleVariants}>
					{description}
				</ContentDescription>
				<Button
					variants={titleVariants}
					variant="GREEN"
					disabled={cta.disabled}
					rounded
				>
					{cta.label}
				</Button>
				{/* <ButtonLink disabled rounded display="inline-flex">
					{cta.label}
				</ButtonLink> */}
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
	gap: 7rem;

	&:not(:last-child) {
		margin-bottom: 23rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		align-items: unset;
		flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Col = styled(motion.div)`
	&:nth-child(1) {
		max-width: 54.7rem;
		width: 100%;
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
	margin-bottom: 3.4rem;
	color: ${({ theme }) => theme.sectionContainer.titleColor};

	text-align: center;

	span {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 3.8rem;
		margin-bottom: 3.4rem;

		span {
			display: block;
			visibility: visible;
			position: absolute;
			top: -4.5rem;
			left: -3.8rem;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 6.4rem;
			margin-bottom: 3.4rem;
		}
	}
`

const ContentDescription = styled(motion.p)`
	text-align: center;
	font-size: 1.6rem;
	margin-bottom: 2.4rem;
	font-weight: 500;
	line-height: 36px;
	color: ${({ theme }) => theme.sectionContainer.descriptionColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 1.8rem;
		margin-bottom: 3.5rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 2.8rem;
			margin-bottom: 6.7rem;
		}
	}
`
