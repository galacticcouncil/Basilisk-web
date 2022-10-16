// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Compoments
import Image from "../image/image.component"

const OnChainSection: React.FC = () => {
	const data = [
		{
			label: "TVL",
			value: "$143k",
		},
		{
			label: "LIQUIDITY POOLS",
			value: "$23m",
		},
		{
			label: "BSX WALLETS",
			value: "2550k",
		},
		{
			label: "NFTS LISTED",
			value: "$143k",
		},
		{
			label: "CROSS-CHAIN CHANNELS",
			value: "5k",
		},
	]

	// const variants: Variants = {
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
	// 			staggerChildren: 0.4,
	// 		},
	// 	},
	// }

	// const itemVariants: Variants = {
	// 	hidden: {
	// 		opacity: 0,
	// 		// y: 75,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		// y: 0,
	// 		transition: {
	// 			duration: 1,
	// 			ease: "easeIn",
	// 			// type: "spring",
	// 			// mass: 1,
	// 			// stiffness: 100,
	// 			// damping: 15,
	// 			// type: "spring",
	// 			// mass: 1,
	// 			// stiffness: 256,
	// 			// damping: 24,
	// 			// ease: [0.5, 0, 0.56, 0.99],
	// 		},
	// 	},
	// }

	return (
		<SectionContainer>
			<Container
			// variants={variants}
			// initial="hidden"
			// whileInView="visible"
			// exit="hidden"
			// viewport={{ once: true }}
			>
				{data.map((item, index) => (
					<Item
						key={index}
						// variants={itemVariants}
					>
						<ItemLabel>
							<span>
								<Image
									src="/assets/icons/onchain.svg"
									alt="onchain icon"
									effect="blur"
								/>
							</span>
							<span>{item.label}</span>
						</ItemLabel>
						<ItemValue>{item.value}</ItemValue>
					</Item>
				))}
			</Container>
		</SectionContainer>
	)
}

export default OnChainSection

const SectionContainer = styled.section`
	position: relative;
	z-index: 2;
	padding: 6rem 2rem;
	background-color: green;
	/* background: ${({ theme }) => theme.onChainSection.background}; */
	color: ${({ theme }) => theme.onChainSection.color};
`

const Container = styled(motion.div)`
	max-width: 140rem;
	width: 100%;
	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-row-gap: 6rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, 1fr);

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Item = styled(motion.div)`
	position: relative;
	text-align: center;

	:nth-child(1) {
		grid-area: 1 / 1 / 2 / 2;

		:after {
			content: "";
			position: absolute;
			height: 50%;
			width: 1px;
			background: ${({ theme }) => theme.onChainSection.dividerColor};
			top: 50%;
			right: 0;
			opacity: 0.5;
			transform: translateY(-50%);
		}
	}
	:nth-child(2) {
		grid-area: 1 / 2 / 2 / 3;
	}
	:nth-child(3) {
		grid-area: 2 / 1 / 3 / 2;
		:after {
			content: "";
			position: absolute;
			height: 50%;
			width: 1px;
			background: ${({ theme }) => theme.onChainSection.dividerColor};
			top: 50%;
			right: 0;
			opacity: 0.5;
			transform: translateY(-50%);
		}
	}
	:nth-child(4) {
		grid-area: 2 / 2 / 3 / 3;
	}
	:nth-child(5) {
		grid-area: 3 / 1 / 4 / 3;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		:nth-child(1) {
			grid-area: 1 / 1 / 2 / 3;

			:after {
				content: "";
				position: absolute;
				height: 50%;
				width: 1px;
				background: ${({ theme }) => theme.onChainSection.dividerColor};
				top: 50%;
				right: 0;
				opacity: 0.5;
				transform: translateY(-50%);
			}
		}
		:nth-child(2) {
			grid-area: 1 / 3 / 2 / 5;

			:after {
				content: "";
				position: absolute;
				height: 50%;
				width: 1px;
				background: ${({ theme }) => theme.onChainSection.dividerColor};
				top: 50%;
				right: 0;
				opacity: 0.5;
				transform: translateY(-50%);
			}
		}
		:nth-child(3) {
			grid-area: 1 / 5 / 2 / 7;
			:after {
				display: none;
				visibility: hidden;
			}
		}
		:nth-child(4) {
			grid-area: 2 / 2 / 3 / 4;
			:after {
				content: "";
				position: absolute;
				height: 50%;
				width: 1px;
				background: ${({ theme }) => theme.onChainSection.dividerColor};
				top: 50%;
				right: 0;
				opacity: 0.5;
				transform: translateY(-50%);
			}
		}
		:nth-child(5) {
			grid-area: 2 / 4 / 3 / 6;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const ItemLabel = styled.h2`
	font-size: 1.2rem;
	font-weight: 700;
	text-transform: uppercase;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.208rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 2rem;
		}
	}
`

const ItemValue = styled.div`
	font-weight: 900;
	font-size: 3.4rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 3.867rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 6.4rem;
		}
	}
`
