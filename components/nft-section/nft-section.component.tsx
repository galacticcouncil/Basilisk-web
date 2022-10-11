// Utils
import styled from "styled-components"

// Components
import SectionHeading from "../section-heading/section-heading.component"
import SectionContent from "../section-content/section-content.component"

const NftSection: React.FC = () => {
	return (
		<Section>
			<SectionHeading variant="BLUE">Time to Flip NFTs</SectionHeading>

			<SectionContent
				title="KodaDOT<br/> Marketplace"
				description="Buy and sell your favorite NFTs. Make offers for unlisted NFTs or set royalty fees to support the artist."
				image={{
					src: "/assets/ntf-section/lbp-tile.png",
					alt: "nft ilu",
				}}
				cta={{
					label: "open Kodaot",
				}}
			/>

			<SectionContent
				reverse
				title="Create<br/> NFT Auctions"
				description="Flip your jpegs with style. English, Top Up and Candle auctions - just choose your mode and let the luckiest bidder win."
				image={{
					src: "/assets/ntf-section/swap-okens-ile.svg",
					alt: "nft ilu 2",
				}}
				cta={{
					label: "Coming soon",
					disabled: true,
				}}
			/>
		</Section>
	)
}

export default NftSection

const Section = styled.section`
	padding: 8rem 2rem;
`
