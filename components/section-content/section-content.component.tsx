// Utils
import styled from "styled-components"

// Components
import Image from "../../components/image/image.component"
import { Button, ButtonLink } from "../../components/button/button.component"

// Types
interface IRowProps {
	reverse?: boolean
}
export interface IProps extends IRowProps {
	title: string
	titleIcon?: {
		src: string
		alt: string
	}
	description: string
	image: {
		src: string
		alt: string
	}
	cta: {
		label: string
		disabled?: boolean
	}
}

const SectionContent: React.FC<IProps> = ({
	title,
	titleIcon,
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
				<ContentTitle
					dangerouslySetInnerHTML={{
						__html: `${title} ${
							titleIcon &&
							`<span>
						<Image
							src="${titleIcon?.src}"
							alt="${titleIcon?.alt}"
							width="37"
							height="37"
						/>
					</span>`
						}`,
					}}
				/>
				<ContentDescription>{description}</ContentDescription>
				<Button variant="GREEN" disabled={cta.disabled} rounded>
					{cta.label}
				</Button>
				{/* <ButtonLink disabled rounded display="inline-flex">
					{cta.label}
				</ButtonLink> */}
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
	position: relative;

	font-weight: 900;
	line-height: 120%;
	font-size: 3.2rem;
	margin-bottom: 3.4rem;
	color: ${({ theme }) => theme.sectionContainer.titleColor};

	text-align: center;

	span {
		display: none;
		visibility: hidden;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		text-align: start;
		font-size: 3.8rem;
		margin-bottom: 3.4rem;

		span {
			display: block;
			visibility: visible;
			position: absolute;
			top: -4.5rem;
			left: -3.8rem;
		}

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
