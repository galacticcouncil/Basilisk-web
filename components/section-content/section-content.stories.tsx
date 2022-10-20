// Utils
import { Story, Meta } from "@storybook/react"

// Components
import SectionContent, { IProps } from "./section-content.component"

const meta: Meta = {
	title: "Components/Section Content",
	component: SectionContent,
}

export default meta

const Template: Story<IProps> = (args) => <SectionContent {...args} />

export const Default = Template.bind({})

Default.args = {
	title: "Title",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
	image: {
		src: "/assets/swap-tokens-section/swap-okens-ile.svg",
		alt: "ilu",
	},
	cta: {
		type: "button",
		label: "cta label",
	},
	reverse: false,
}
