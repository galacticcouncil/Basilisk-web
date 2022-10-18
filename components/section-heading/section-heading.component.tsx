// Utils
import styled, { css } from "styled-components"

// Components
import FlexContainer from "../flex-container/flex-container.component"
import Image from "../image/image.component"

// Types
interface IHeadingProps {
	variant?: "DEFAULT" | "BLUE" | "ORANGE" | "GREEN"
}
export interface IProps extends IHeadingProps {
	icon?: {
		src: string
		alt: string
	}
	children: React.ReactNode | React.ReactNode[]
}

const SectionHeading: React.FC<IProps> = ({ children, ...props }) => {
	return (
		<FlexContainer justifyContent="center" alignItems="center">
			<Heading {...props}>{children}</Heading>
			{props.icon && (
				<IconSpan>
					<Image src={props.icon.src} alt={props.icon.alt} width="100%" />
				</IconSpan>
			)}
		</FlexContainer>
	)
}

export default SectionHeading

const defaultStyles = css`
	background: ${({ theme }) => theme.sectionHeading.default};
`
const blueStyles = css`
	background: ${({ theme }) => theme.sectionHeading.blue};
`
const orangeStyles = css`
	background: ${({ theme }) => theme.sectionHeading.orange};
`
const greenStyles = css`
	background: ${({ theme }) => theme.sectionHeading.green};
`

const Heading = styled.h2<IHeadingProps>`
	display: inline-block;
	text-align: center;
	font-size: 3.2rem;
	font-family: "FontOver", sans-serif;
	letter-spacing: 0.03em;
	margin-bottom: 3rem;

	${({ variant }) => {
		switch (variant) {
			case "DEFAULT":
				return defaultStyles
			case "BLUE":
				return blueStyles
			case "ORANGE":
				return orangeStyles
			case "GREEN":
				return greenStyles
			default:
				return defaultStyles
		}
	}}

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		br {
			display: none;
			visibility: hidden;
		}

		font-size: 3.12rem;
		margin-bottom: 8.95rem;
		/* margin: 0 auto 6rem; */
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 5.2rem;
			margin-bottom: 13rem;
			/* margin: 0 auto 13rem; */
		}
	}
`

const IconSpan = styled.span`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: inline-block;
		visibility: visible;
		width: 2.247rem;
		margin-bottom: 7rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 3.745rem;
			margin-bottom: 14rem;
		}
	}
`
