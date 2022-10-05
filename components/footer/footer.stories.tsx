// Utils
import { Story, Meta } from "@storybook/react"

// Components
import Footer from "./footer.component"

const meta: Meta = {
	title: "Components/Footer",
	component: Footer,
}

export default meta

const Template: Story = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
