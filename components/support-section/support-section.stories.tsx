// Utils
import { Story, Meta } from "@storybook/react"

// Components
import SupportSection from "./support-section.component"

const meta: Meta = {
	title: "Sections/Support",
	component: SupportSection,
}

export default meta

const Template: Story = (args) => <SupportSection {...args} />

export const Default = Template.bind({})

Default.args = {}
