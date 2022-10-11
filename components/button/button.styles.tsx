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
	font-size: 1.6rem;
	color: ${({ theme }) => theme.button.color};

	min-width: 20rem;
	width: ${({ width }) => (width ? width : "unset")};

	/* transition: 0.5s; */
	background: ${({ theme }) => theme.button.background};

	outline: none;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : "initial")};

	margin-top: ${({ top }) => (top ? top : "initial")};
	margin-right: ${({ right }) => (right ? right : "initial")};
	margin-left: ${({ left }) => (left ? left : "initial")};
	margin-bottom: ${({ bottom }) => (bottom ? bottom : "initial")};
	line-height: 18px;
	padding: 1.6rem 3.6rem;

	&:focus {
		outline: none;
	}

	&:hover {
	}
`

const greenVariantStyles = css<IStyledProps>`
	background: unset;
	background-color: ${({ theme }) => theme.button.greenVariantBackground};
	color: ${({ theme }) => theme.button.greenVariantColor};
`

const greenBlackVariantStyles = css<IStyledProps>`
	background: unset;
	background-color: ${({ theme }) => theme.button.greenBlackVariantBackground};
	color: ${({ theme }) => theme.button.greenBlackVariantColor};
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
	background: ${({ theme }) => theme.heroSection.ctaButtonBackground};
	padding: 2rem 3.6rem;
	display: ${({ display }) => display || "flex"};
`
