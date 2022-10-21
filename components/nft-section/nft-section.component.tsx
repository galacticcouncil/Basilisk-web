// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const NftSection: React.FC = () => {
	return (
		<Section>
			<SectionHeading variant="BLUE">NFT Features</SectionHeading>

			<SectionContent
				title="Buy and Sell NFTs"
				titleIcon={{
					src: "/assets/icons/title-icon-blue.svg",
					alt: "blue icon",
				}}
				description="Offers for unlisted NFTs or set royalty fees to support the artist."
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
				title="Auction NFTs"
				titleIcon={{
					src: "/assets/icons/title-icon-blue.svg",
					alt: "blue icon",
				}}
				description="Flip JPEGs with style using auctions. English, Top Up and Candle auctions - just choose your mode and let the luckiest bidder win."
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
	padding: 7.803rem 2rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 9rem 4rem 0;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 2rem;
		}
	}
`
