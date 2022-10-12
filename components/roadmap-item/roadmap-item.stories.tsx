// Utils
import { Story, Meta } from "@storybook/react"

// Components
import RoadmapItem, { IProps } from "./roadmap-item.component"

const meta: Meta = {
	title: "Components/RoadmapItem",
	component: RoadmapItem,
}

export default meta

const Template: Story<IProps> = (args) => <RoadmapItem {...args} />

export const Default = Template.bind({})

Default.args = {
	title: "XYK Pools",
	status: "Completed it mate",
	icon: {
		src: "/assets/roadmap-section/basilisk.png",
		alt: "basilisk",
	},
	variant: "GREEN",
	process: "25%",
}
