// Utils
import { Story, Meta } from "@storybook/react"

// Components
import { ButtonLink, HeroButtonLink } from "./button.component"

// Types
import { IButtonLinkProps } from "./button.types"

const meta: Meta = {
	title: "Components/ButtonLink",
	component: ButtonLink,
}

export default meta

const Template: Story<IButtonLinkProps> = (args) => <ButtonLink {...args} />

export const Default = Template.bind({})

Default.args = {
	children: "Button",
	href: "#",
	top: "initial",
	bottom: "initial",
	left: "initial",
	right: "initial",
	width: "initial",
	rounded: false,
	disabled: false,
	display: "flex",
}
