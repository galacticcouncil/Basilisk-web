// Utils
import styled, { css } from "styled-components"

// Types
interface IHeadingProps {
	variant?: "DEFAULT" | "BLUE" | "ORANGE" | "GREEN"
}
export interface IProps extends IHeadingProps {
	children: React.ReactNode | React.ReactNode[]
}

const SectionHeading: React.FC<IProps> = ({ children, ...props }) => {
	return <Heading {...props}>{children}</Heading>
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
	text-align: center;
	font-size: 3.2rem;
	font-family: "FontOver", sans-serif;
	letter-spacing: 0.03em;
	margin-bottom: 2rem;

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

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 3.12rem;
		margin-bottom: 6rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 5.2rem;
			margin-bottom: 10rem;
		}
	}
`
