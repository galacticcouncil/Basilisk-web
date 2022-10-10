// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"
import Image from "../image/image.component"

const SwapTokensSection: React.FC = () => {
	return (
		<Section>
			<SectionIlu>
				<Image
					src="/assets/swap-tokens-section/top-left-ilu.svg"
					alt="top left ilu"
				/>
			</SectionIlu>

			<SectionHeading variant="DEFAULT">Swap tokens</SectionHeading>

			<SectionContent
				title="Swap tokens with peace of mind."
				description="Buy and sell tokens. Permissionless and without relying on centralized exchanges or other intermediaries."
				image={{
					src: "/assets/swap-tokens-section/swap-okens-ile.svg",
					alt: "swap tokens ilu",
				}}
				cta={{
					label: "Snek swap",
				}}
			/>

			<SectionContent
				reverse
				title="Support projects through Snek LBP"
				description="Support young projects which want to distribute tokens to their community while bootstrapping liquidity."
				image={{
					src: "/assets/swap-tokens-section/lbp-tile.svg",
					alt: "swap tokens ilu 2",
				}}
				cta={{
					label: "Snek swap",
				}}
			/>
		</Section>
	)
}

export default SwapTokensSection

const SectionIlu = styled.figure`
	position: absolute;
	top: 0;
	right: 0;
`

const Section = styled.section`
	position: relative;
	padding: 8rem 2rem;
`
