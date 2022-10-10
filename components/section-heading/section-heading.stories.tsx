// Utils
import { Story, Meta } from "@storybook/react"

// Components
import SectionHeading, { IProps } from "./section-heading.component"

const meta: Meta = {
	title: "Components/Section Heading",
	component: SectionHeading,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["DEFAULT", "BLUE", "ORANGE", "GREEN"],
			},
		},
	},
}

export default meta

const Template: Story<IProps> = (args) => <SectionHeading {...args} />

export const Default = Template.bind({})

Default.args = {
	variant: "DEFAULT",
	children: "Section Heading",
}
