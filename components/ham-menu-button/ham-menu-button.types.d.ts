import { ReactHTMLElement } from "react"

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isOpen: boolean
}
