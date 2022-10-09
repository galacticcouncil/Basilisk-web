// Utils
import { Story, Meta } from "@storybook/react"

// Components
import OnChainSection from "./onchain-section.component"

const meta: Meta = {
	title: "Sections/OnChainSection",
	component: OnChainSection,
}

export default meta

const Template: Story = (args) => <OnChainSection {...args} />

export const Default = Template.bind({})

Default.args = {}
