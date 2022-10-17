// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import RoadmapItem, { IProps } from "../roadmap-item/roadmap-item.component"
import { Button } from "../button/button.component"
import Image from "../image/image.component"

const RoadmapSection: React.FC = () => {
	const roadmapItems: IProps[] = [
		{
			title: "XYK Pools",
			status: "Completed it mate",
			icon: {
				src: "/assets/roadmap-section/basilisk-v2.png",
				alt: "basilisk",
			},
			variant: "GREEN",
			process: "25%",
		},
		{
			title: "Liquidity Provisioning",
			status: "Completed it mate",
			icon: {
				src: "/assets/roadmap-section/money-v2.png",
				alt: "money",
			},
			variant: "GREEN",
			process: "33%",
		},
		{
			title: "NFT Marketplace",
			status: "Completed it mate",
			icon: {
				src: "/assets/roadmap-section/pallete-v2.png",
				alt: "pallete",
			},
			variant: "GREEN",
			process: "40%",
		},
		{
			title: "LBP",
			status: "Soon<sup>TM</sup>",
			icon: {
				src: "/assets/roadmap-section/bag-v2.png",
				alt: "bag",
			},
			variant: "BLUE",
			process: "56%",
		},
		{
			title: "Moar Token Pairs",
			status: "Soon<sup>TM</sup>",
			icon: {
				src: "/assets/roadmap-section/pancake-v2.png",
				alt: "pancake",
			},
			variant: "BLUE",
			process: "56%",
		},
		{
			title: "Liquidity Mining",
			status: "Soon<sup>TM</sup>",
			icon: {
				src: "/assets/roadmap-section/pickaxe-v2.png",
				alt: "pickaxe",
			},
			variant: "BLUE",
			process: "56%",
		},
		{
			title: "Order Router",
			status: "Soon<sup>TM</sup>",
			icon: {
				src: "/assets/roadmap-section/semafor-v2.png",
				alt: "semafor",
			},
			variant: "BLUE",
			process: "56%",
		},
		{
			title: "Stableswap",
			status: "Soon<sup>TM</sup>",
			icon: {
				src: "/assets/roadmap-section/coin-v2.png",
				alt: "coin",
			},
			variant: "BLUE",
			process: "56%",
		},
		{
			title: "NFT Auctions",
			status: "3 Weeks",
			icon: {
				src: "/assets/roadmap-section/pen-v2.png",
				alt: "pen",
			},
			variant: "YELLOW",
			process: "70%",
		},
		{
			title: "Smartboi Pants - Redeemable NFTs",
			status: "3 Weeks",
			icon: {
				src: "/assets/roadmap-section/shorts-v2.png",
				alt: "shorts",
			},
			variant: "YELLOW",
			process: "70%",
		},
		{
			title: "TWAMM",
			status: "It’s been 84 years",
			icon: {
				src: "/assets/roadmap-section/hourglass-v2.png",
				alt: "hourglass",
			},
			variant: "ORANGE",
			process: "90%",
		},
		{
			title: "Order Matching",
			status: "It’s been 84 years",
			icon: {
				src: "/assets/roadmap-section/emoji-v2.png",
				alt: "money",
			},
			variant: "ORANGE",
			process: "90%",
		},
		{
			title: "Slip-based Fees",
			status: "It’s been 84 years",
			icon: {
				src: "/assets/roadmap-section/fish-v2.png",
				alt: "money",
			},
			variant: "ORANGE",
			process: "90%",
		},
	]

	return (
		<Section>
			<SectionHeading variant="GREEN">The roadmap</SectionHeading>

			<Description>
				Basilisk is a decentralized protocol with a community-first approach.
				All decisions affecting the protocol are adopted in a democratic
				process.
			</Description>
			<Button
				variant="GREEN"
				icon={{
					src: "/assets/icons/roadmap-icon.svg",
					alt: "roadmap icon",
				}}
				rounded
				left="auto"
				right="auto"
			>
				Check live roadmap
			</Button>

			<RoadmapContainer>
				<Border />
				{/* <LineFigure>
					<Image
						src={"/assets/roadmap-section/line.svg"}
						alt={"line"}
						width={"100%"}
					/>
				</LineFigure> */}
				<IconFigure>
					<Image
						src={"/assets/icons/title-icon-green.svg"}
						alt={"green icon"}
						width={"100%"}
						height={"100%"}
					/>
				</IconFigure>

				<SnakeFigure>
					<Image
						className="desktop"
						src="/assets/roadmap-section/snake.svg"
						alt="snake"
						width={"100%"}
					/>
					<Image
						className="mobile"
						src="/assets/roadmap-section/mobile-snake.svg"
						alt="snake"
						width={"100%"}
					/>
				</SnakeFigure>
				{roadmapItems.map((item, index) => (
					<RoadmapItem
						key={index}
						title={item.title}
						status={item.status}
						icon={item.icon}
						variant={item.variant}
						process={item.process}
					/>
				))}
			</RoadmapContainer>
		</Section>
	)
}

export default RoadmapSection

const Section = styled.section`
	position: relative;
	padding: 8rem 2rem 0;

	h2 {
		margin-bottom: 1rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		h2 {
			margin-bottom: 0.6rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 8rem 2.5rem 0;

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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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

const RoadmapContainer = styled.div`
	position: relative;
	padding: 2rem 0;
	/* padding-top: 2rem; */
	/* border: 1px solid red; */
	max-width: 121.6rem;
	margin: 4.3rem auto 11.5rem;
`

const IconFigure = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
		visibility: visible;
		position: absolute;
		top: 2rem;
		right: 0;
		width: 0.527rem;
		height: 0.534rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			top: 2.5rem;
			width: 0.877rem;
			height: 0.89rem;
		}
	}
`

const SnakeFigure = styled.figure`
	width: 49.5%;
	margin-bottom: 1rem;

	.desktop {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		.desktop {
			display: block;
			visibility: visible;
		}
		.mobile {
			display: none;
			visibility: hidden;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Border = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	content: "";
	border-left: 0.1rem dotted #fff;
	z-index: 1;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		border-left: 0.3rem dotted #fff;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			border-left: 0.3rem dotted #fff;
		}
	}
`
