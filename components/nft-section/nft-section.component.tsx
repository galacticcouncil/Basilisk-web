// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const NftSection: React.FC = () => {
	return (
		<Section>
			<SectionIlu>
				<Image src="/assets/earn-rewards-section/left-ilu.svg" alt="left ilu" />
			</SectionIlu>

			<SectionHeading variant="BLUE">NFT Features</SectionHeading>

			<SectionContent
				title="Trade on Basilisk NFT Marketplace."
				titleIcon={{
					src: "/assets/icons/title-icon-blue.svg",
					alt: "blue icon",
				}}
				description="Buy and sell your favorite NFTs. Make offers for unlisted NFTs or set royalty fees to support the artist."
				image={{
					src: "/assets/ntf-section/lbp-tile.png",
					alt: "nft ilu",
				}}
				cta={{
					type: "link",
					label: "open KODADOT",
					href: "https://kodadot.xyz/",
				}}
			/>

			<SectionContent
				reverse
				title="Participate in NFT Auctions."
				titleIcon={{
					src: "/assets/icons/title-icon-blue.svg",
					alt: "blue icon",
				}}
				description="Flip your jpegs with style. English, Top Up and Candle auctions - just choose your mode and let the luckiest bidder win."
				image={{
					src: "/assets/ntf-section/swap-okens-ile.svg",
					alt: "nft ilu 2",
				}}
				cta={{
					type: "button",
					label: "Coming soon",
					disabled: true,
				}}
			/>
		</Section>
	)
}

export default NftSection

const Section = styled.section`
	position: relative;

	padding: 7.803rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 9rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 2rem;
		}
	}
`

const SectionIlu = styled.figure`
	display: none;
	visibility: hidden;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			position: absolute;
			top: -25rem;
			left: 0;
			display: block;
			visibility: visible;
			z-index: -1;
		}
	}
`
