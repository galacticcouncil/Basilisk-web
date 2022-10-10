// Utils
import styled from "styled-components"

// Compoments
import { Button } from "../button/button.component"

const LearnMoreSection: React.FC = () => {
	return (
		<Section>
			<Container>
				<Title>
					Learn more
					<br /> about Basilisk
				</Title>
				<ButtonsContainer>
					<Button rounded>Tokenomics</Button>
					<Button rounded>Press Kit</Button>
				</ButtonsContainer>
			</Container>
		</Section>
	)
}

export default LearnMoreSection

const Section = styled.section`
	padding: 0 2rem;
`

const Container = styled.div`
	max-width: 145rem;
	width: 100%;
	padding: 13.55rem 10.693rem;
	border-radius: 2rem;
	margin: 0 auto;
	background: ${({ theme }) => theme.learnMoreSection.background};
	color: ${({ theme }) => theme.learnMoreSection.color};
`

const Title = styled.h2`
	font-weight: 900;
	font-size: 7.2rem;
	line-height: 110%;

	margin-bottom: 3.707rem;
`

const ButtonsContainer = styled.div`
	display: flex;
	gap: 2rem;
`
