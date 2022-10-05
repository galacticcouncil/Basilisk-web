// Utils

// Components
import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

// Types
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default PageLayout
