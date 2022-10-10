// Utils
import { Story, Meta } from "@storybook/react"

// Components
import RoadmapSection from "./roadmap-section.component"

const meta: Meta = {
	title: "Sections/Roadmap",
	component: RoadmapSection,
}

export default meta

const Template: Story = (args) => <RoadmapSection {...args} />

export const Default = Template.bind({})

Default.args = {}
