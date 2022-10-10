// Utils
import { Story, Meta } from "@storybook/react"

// Components
import NftSection from "./nft-section.component"

const meta: Meta = {
	title: "Sections/Nft",
	component: NftSection,
}

export default meta

const Template: Story = (args) => <NftSection {...args} />

export const Default = Template.bind({})

Default.args = {}
