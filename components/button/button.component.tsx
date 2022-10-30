// Utils

// Compoennts
import Link from "next/link"
import Image from "../image/image.component"

// Styles
import { ButtonContainer, AContainer, HeroAContainer } from "./button.styles"

// Types
import { IButtonLinkProps, IButtonProps } from "./button.types"

export const Button: React.FC<IButtonProps> = (props) => {
	return (
		<ButtonContainer {...props}>
			<span>{props.children}</span>
			{props.icon && <Image src={props.icon.src} alt={props.icon.alt} />}
		</ButtonContainer>
	)
}

export const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
	return (
		<Link href={props.href || "#"}>
			<AContainer {...props}>
				<span>{props.children}</span>
				{props.icon && (
					<Image
						src={props.icon.src}
						alt={props.icon.alt}
						width={15}
						height={15}
					/>
				)}
			</AContainer>
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
