// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import Link from "next/link"

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<Container>
				<Logo>
					<Image src="/assets/logo-v1.svg" alt="logo" />
				</Logo>

				<Nav>
					<NavList>
						<NavItem>
							<Link href="/">Start</Link>
						</NavItem>
						<NavItem>
							<Link href="/">Features</Link>
						</NavItem>
						<NavItem>
							<Link href="#">About</Link>
						</NavItem>
						<NavItem>
							<Link href="#">Socials</Link>
						</NavItem>
						<NavItem>
							<Link href="#">Blog</Link>
						</NavItem>
						<NavItem>
							<Link href="#">Github</Link>
						</NavItem>
					</NavList>
				</Nav>

				<CTAContainer>
					<CTA href="#">Get Started</CTA>
				</CTAContainer>
			</Container>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
	padding: 0 2rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 6.4rem;

	background-color: ${({ theme }) => theme.header.background};
	backdrop-filter: blur(4.75rem);
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`

const Logo = styled.div``

const Nav = styled.nav``

const NavList = styled.ul`
	display: flex;
	gap: 4rem;
`

const NavItem = styled.li``

const CTAContainer = styled.div``

const CTA = styled.a``
