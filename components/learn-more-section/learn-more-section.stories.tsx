// Utils
import { Story, Meta } from "@storybook/react"

// Components
import LearnMoreSection from "./learn-more-section.component"

const meta: Meta = {
	title: "Sections/Learn More",
	component: LearnMoreSection,
}

export default meta

const Template: Story = (args) => <LearnMoreSection {...args} />

export const Default = Template.bind({})

Default.args = {}
