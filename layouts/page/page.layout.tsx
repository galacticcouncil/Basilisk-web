// Utils
import styled from "styled-components"

// Components
import Header from "../../components/header/header.component"
import Image from "../../components/image/image.component"
import Footer from "../../components/footer/footer.component"

// Types
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IProps> = ({ children }) => {
	return (
		<>
			{/* <EyesContainer></EyesContainer> */}
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

const EyesContainer = styled.div`
	width: 100%;
	height: 80rem;
	border: 1px solid red;
	background-image: url("/assets/eyes.svg");
	background-repeat: no-repeat;
	background-position: center top;
`
