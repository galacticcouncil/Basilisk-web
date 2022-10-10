// Utils
import { Story, Meta } from "@storybook/react"

// Components
import EarnRewardsSection from "./earn-rewards-section.component"

const meta: Meta = {
	title: "Sections/Earn Rewards",
	component: EarnRewardsSection,
}

export default meta

const Template: Story = (args) => <EarnRewardsSection {...args} />

export const Default = Template.bind({})

Default.args = {}
