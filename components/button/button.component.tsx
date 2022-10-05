// Utils

// Compoennts
import Link from "next/link"

// Styles
import { ButtonContainer, AContainer } from "./button.styles"

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
