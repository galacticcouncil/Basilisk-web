// Utils
import { Story, Meta } from "@storybook/react"
import React from "react"

// Components
import Header from "./header.component"

const meta: Meta = {
	title: "Components/Header",
	component: Header,
}

export default meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {}
