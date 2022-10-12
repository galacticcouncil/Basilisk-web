// Utils
import styled, { css } from "styled-components"

// Components
import Image from "../image/image.component"
import FlexContainer from "../flex-container/flex-container.component"

// Types
interface IItemProps {
	variant?: "GREEN" | "BLUE" | "YELLOW" | "ORANGE"
	process: string
}

export interface IProps extends IItemProps {
	title: string
	status: string
	icon: {
		src: string
		alt: string
	}
}

const RoadmapItem: React.FC<IProps> = ({
	title,
	status,
	icon,
	variant = "GREEN",
	process,
}) => {
	return (
		<>
			<LineFigure>
				<Image
					src={"/assets/roadmap-section/single-line.svg"}
					alt={"line"}
					width={"100%"}
				/>
			</LineFigure>
			<Item process={process} variant={variant}>
				<FlexContainer alignItems="center">
					<Content>
						<Title>{title}</Title>
						<Status>{status}</Status>
					</Content>
					<ItemIcon>
						<Image src={icon.src} alt={icon.alt} />
					</ItemIcon>
				</FlexContainer>
			</Item>
			<MobileContent>
				<Title>{title}</Title>
				<Status>{status}</Status>
			</MobileContent>
		</>
	)
}

export default RoadmapItem

const greenStyles = css<IItemProps>`
	background: ${({ theme }) => theme.roadmapSection.greenRow};
`
const blueStyles = css<IItemProps>`
	background: ${({ theme }) => theme.roadmapSection.blueRow};
`
const yellowStyles = css<IItemProps>`
	background: ${({ theme }) => theme.roadmapSection.yellowRow};
`
const orangeStyles = css<IItemProps>`
	background: ${({ theme }) => theme.roadmapSection.orangeRow};
`

const LineFigure = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
		visibility: visible;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Item = styled.div<IItemProps>`
	position: relative;
	width: ${({ process }) => process};
	border-radius: 1rem;
	padding: 0.573rem 1rem;
	margin-bottom: 0.8rem;

	${({ variant }) => {
		switch (variant) {
			case "GREEN":
				return greenStyles
			case "BLUE":
				return blueStyles
			case "YELLOW":
				return yellowStyles
			case "ORANGE":
				return orangeStyles
			default:
				return greenStyles
		}
	}}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: 2.04rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 0.6rem 2.5rem;
		}
	}
`

const Content = styled.div`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: block;
		visibility: visible;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const MobileContent = styled.div`
	margin-bottom: 2.04rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
		visibility: hidden;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Title = styled.h4`
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 120%;
	color: ${({ theme }) => theme.roadmapSection.titleColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1.14rem;
		line-height: 120%;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 1.9rem;
			line-height: 2.28rem;
		}
	}
`
const Status = styled.p`
	font-size: 1.1rem;
	font-weight: 500;
	line-height: 120%;
	color: ${({ theme }) => theme.roadmapSection.statusColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.84rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 1.4rem;
		}
	}
`

const ItemIcon = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
`
