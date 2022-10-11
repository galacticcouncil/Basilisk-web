// Utils
import styled from "styled-components"

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
			<Main>{children}</Main>
			<Footer />
		</>
	)
}

export default PageLayout

const Main = styled.main`
	position: relative;
	z-index: 1;
	background: linear-gradient(180deg, #1c2527 0%, #14161a 80.73%, #121316 100%);
`
