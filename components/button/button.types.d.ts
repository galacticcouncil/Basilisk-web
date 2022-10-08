// Utils
import { HTMLMotionProps } from "framer-motion"

export interface IStyledProps {
	top?: string
	bottom?: string
	left?: string
	right?: string
	width?: string
	// outline?: boolean
	display?: string
	rounded?: boolean
}

export interface IButtonProps extends HTMLMotionProps<"button">, IStyledProps {}

export interface IButtonLinkProps extends HTMLMotionProps<"a">, IStyledProps {}
