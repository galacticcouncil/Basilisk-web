// Utils

// Compoennts
import Link from "next/link"

// Styles
import { ButtonContainer, AContainer, HeroAContainer } from "./button.styles"

// Types
import { IButtonLinkProps, IButtonProps } from "./button.types"

export const Button: React.FC<IButtonProps> = (props) => {
	return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}

export const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
	return (
		<Link href={props.href || "#"}>
			<AContainer {...props}>{props.children}</AContainer>
		</Link>
	)
}

export const HeroButtonLink: React.FC<IButtonLinkProps> = (props) => {
	return (
		<Link href={props.href || "#"}>
			<HeroAContainer {...props}>{props.children}</HeroAContainer>
		</Link>
	)
}
