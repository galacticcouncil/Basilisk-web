// Utils
import styled from "styled-components"

// Components
import Image from "../image/image.component"
import Link from "next/link"
import { ButtonLink } from "../button/button.component"

const Header: React.FC = () => {
	const NAV_ITEMS = [
		{
			label: "Start",
			href: "/",
		},
		{
			label: "Features",
			href: "/",
		},
		{
			label: "About",
			href: "/",
		},
		{
			label: "Socials",
			href: "/",
		},
		{
			label: "Blog",
			href: "/",
		},
		{
			label: "Github",
			href: "/",
		},
	]

	return (
		<HeaderContainer>
			<Container>
				<Logo>
					<Image src="/assets/logo-v1.svg" alt="logo" />
				</Logo>

				<Nav>
					<NavList>
						{NAV_ITEMS.map((item, index) => (
							<NavItem key={index}>
								<Link href={item.href}>{item.label}</Link>
							</NavItem>
						))}
					</NavList>
				</Nav>

				<CTAContainer>
					<ButtonLink rounded href="#">
						Get Started
					</ButtonLink>
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

const NavItem = styled.li`
	a {
		color: ${({ theme }) => theme.header.navItemColor};
	}
`

const CTAContainer = styled.div``
