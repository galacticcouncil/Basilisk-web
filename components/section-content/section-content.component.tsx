// Utils
import styled from "styled-components"

// Components
import Image from "../../components/image/image.component"
import { Button } from "../../components/button/button.component"

// Types
interface IRowProps {
	reverse?: boolean
}
export interface IProps extends IRowProps {
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	cta: {
		label: string
	}
}

const SectionContent: React.FC<IProps> = ({
	title,
	description,
	image,
	cta,
	reverse,
}) => {
	return (
		<Row reverse={reverse}>
			<Col>
				<Image src={image.src} alt={image.alt} width="100%" effect="blur" />
			</Col>
			<Col>
				<ContentTitle dangerouslySetInnerHTML={{ __html: title }} />
				<ContentDescription>{description}</ContentDescription>
				<Button rounded>{cta.label}</Button>
			</Col>
		</Row>
	)
}

export default SectionContent

const Row = styled.div<IRowProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6rem;

	&:not(:last-child) {
		margin-bottom: 10rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		align-items: unset;
		flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Col = styled.div`
	&:nth-child(1) {
		max-width: 54.7rem;
		width: 100%;
	}
	&:nth-child(2) {
		max-width: 64rem;
		width: 100%;
		button {
			margin: 0 auto;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			button {
				margin: initial;
			}
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const ContentTitle = styled.h3`
	font-weight: 900;
	line-height: 120%;
	font-size: 3.2rem;
	margin-bottom: 3.4rem;
	color: ${({ theme }) => theme.sectionContainer.titleColor};

	text-align: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 3.8rem;
		margin-bottom: 3.4rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 6.4rem;
			margin-bottom: 3.4rem;
		}
	}
`

const ContentDescription = styled.h3`
	text-align: center;
	font-size: 1.6rem;
	margin-bottom: 2.4rem;
	color: ${({ theme }) => theme.sectionContainer.descriptionColor};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 1.8rem;
		margin-bottom: 3.5rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 2.8rem;
			margin-bottom: 6.7rem;
		}
	}
`
