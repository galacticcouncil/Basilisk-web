// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Spinner from "./spinner.component"

const meta: Meta = {
	title: "Components/Spinner",
	component: Spinner,
}

export default meta

const Template: Story = (args) => <Spinner {...args} />

export const Default = Template.bind({})

Default.args = {}
