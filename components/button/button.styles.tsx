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
	padding: 1.5rem 3.6rem;

	&:focus {
		outline: none;
	}

	&:hover {
	}
`

export const ButtonContainer = styled(motion.button)<IStyledProps>`
	${PrimaryButtonStyles}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`

export const AContainer = styled(motion.a)<IStyledProps>`
	${PrimaryButtonStyles}
`
