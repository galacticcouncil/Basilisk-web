// Utils
import { motion } from "framer-motion"
import styled, { css } from "styled-components"

// Types
import { IStyledProps } from "./button.types"

const PrimaryButtonStyles = css<IStyledProps>`
	cursor: pointer;

	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	text-transform: uppercase;
	font-family: inherit;
	font-weight: 700;
	line-height: 1;
	color: ${({ theme }) => theme.button.color};

	/* min-width: 20rem; */
	width: ${({ width }) => (width ? width : "unset")};

	/* transition: 0.5s; */
	/* background: ${({ theme }) => theme.button.background}; */

	outline: none;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : "initial")};

	margin-top: ${({ top }) => (top ? top : "initial")};
	margin-right: ${({ right }) => (right ? right : "initial")};
	margin-left: ${({ left }) => (left ? left : "initial")};
	margin-bottom: ${({ bottom }) => (bottom ? bottom : "initial")};
	line-height: 18px;
	font-size: 1.3rem;
	padding: 1.4rem 3.6rem;

	transition: all 0.3s ease-in;

	@property --myColor1 {
		syntax: "<color>";
		initial-value: ${({ theme }) => theme.button.firstColor};
		inherits: false;
	}

	@property --myColor2 {
		syntax: "<color>";
		initial-value: ${({ theme }) => theme.button.secondColor};
		inherits: false;
	}

	--myColor1: ${({ theme }) => theme.button.firstColor};
	--myColor2: ${({ theme }) => theme.button.secondColor};

	background: linear-gradient(90deg, var(--myColor1), var(--myColor2));
	transition: box-shadow 0.3s, --myColor1 0.3s, --myColor2 0.3s;

	&:focus {
		outline: none;
	}

	&:hover {
		--myColor1: ${({ theme }) => theme.button.hoverFirstColor};
		--myColor2: ${({ theme }) => theme.button.hoverSecondColor};
		box-shadow: ${({ theme }) => theme.button.hoverBoxShadow};
	}

	&:active {
		--myColor1: ${({ theme }) => theme.button.activeFirstColor};
		--myColor2: ${({ theme }) => theme.button.activeSecondColor};
		box-shadow: ${({ theme }) => theme.button.activeBoxShadow};
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 1.6rem 3.6rem;
		font-size: 1.6rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const greenVariantStyles = css<IStyledProps>`
	background: unset;
	font-weight: 700;
	background-color: ${({ theme }) => theme.button.greenVariantBackground};
	color: ${({ theme }) => theme.button.greenVariantColor};
	transition: all 0.2s ease-in;

	&:hover {
		background-color: ${({ theme }) =>
			theme.button.hoverGreenVariantBackground};
		box-shadow: initial;
	}

	&:active {
		color: ${({ theme }) => theme.button.activeGreenVariantColor};
		background-color: ${({ theme }) =>
			theme.button.activeGreenVariantBackground};
		box-shadow: initial;
	}
`

const greenBlackVariantStyles = css<IStyledProps>`
	background: unset;
	background-color: ${({ theme }) => theme.button.greenBlackVariantBackground};
	color: ${({ theme }) => theme.button.greenBlackVariantColor};
	padding: 2.1rem 7.6rem;

	&:hover {
		box-shadow: initial;
	}

	&:active {
		box-shadow: initial;
	}
`

const disabledStyles = css<IStyledProps>`
	background: unset;
	position: relative;

	&:before {
		background-color: ${({ theme }) => theme.button.disabledBackground};
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: ${({ rounded }) => (rounded ? "999rem" : "initial")};
	}

	span {
		background: ${({ theme }) => theme.button.disabledColor};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
`

export const ButtonContainer = styled(motion.button)<IStyledProps>`
	${PrimaryButtonStyles}
	${({ variant }) => variant === "GREEN" && greenVariantStyles};
	${({ variant }) => variant === "GREEN_BLACK" && greenBlackVariantStyles};
	${({ disabled }) => disabled && disabledStyles};

	&:disabled {
		cursor: default;
		/* opacity: 0.5; */
		${disabledStyles}
	}
`

export const AContainer = styled(motion.a)<IStyledProps>`
	${PrimaryButtonStyles}
	display: ${({ display }) => display || "flex"};
	${({ variant }) => variant === "GREEN" && greenVariantStyles};
	${({ variant }) => variant === "GREEN_BLACK" && greenBlackVariantStyles};
	${({ disabled }) => disabled && disabledStyles};
`

export const HeroAContainer = styled(motion.a)<IStyledProps>`
	${PrimaryButtonStyles}
	padding: 2rem 3.6rem;
	display: ${({ display }) => display || "flex"};

	background: linear-gradient(90deg, var(--myColor1), var(--myColor2));
	transition: box-shadow 0.3s, --myColor1 0.3s, --myColor2 0.3s;

	@property --myColor1 {
		syntax: "<color>";
		initial-value: ${({ theme }) => theme.button.firstColor};
		inherits: false;
	}

	@property --myColor2 {
		syntax: "<color>";
		initial-value: ${({ theme }) => theme.button.secondColor};
		inherits: false;
	}

	--myColor1: ${({ theme }) => theme.button.firstColor};
	--myColor2: ${({ theme }) => theme.button.secondColor};

	&:focus {
		outline: none;
	}

	&:hover {
		--myColor1: ${({ theme }) => theme.button.hoverFirstColor};
		--myColor2: ${({ theme }) => theme.button.hoverSecondColor};
		box-shadow: ${({ theme }) => theme.button.hoverBoxShadow};
	}

	&:active {
		--myColor1: ${({ theme }) => theme.button.activeFirstColor};
		--myColor2: ${({ theme }) => theme.button.activeSecondColor};
		box-shadow: ${({ theme }) => theme.button.activeBoxShadow};
	}
`
