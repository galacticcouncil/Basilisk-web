// Utils
import { Story, Meta } from "@storybook/react"

// Components
import SwapTokensSection from "./swap-tokens-section.component"

const meta: Meta = {
	title: "Sections/Swap Tokens",
	component: SwapTokensSection,
}

export default meta

const Template: Story = (args) => <SwapTokensSection {...args} />

export const Default = Template.bind({})

Default.args = {}
