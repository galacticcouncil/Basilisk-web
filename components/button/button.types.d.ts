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
	disabled?: boolean
	variant?: "DEFAULT" | "GREEN" | "GREEN_BLACK"
}

export interface IButtonProps extends HTMLMotionProps<"button">, IStyledProps {
	icon?: {
		src: string
		alt: string
	}
}

export interface IButtonLinkProps extends HTMLMotionProps<"a">, IStyledProps {
	icon?: {
		src: string
		alt: string
	}
}
