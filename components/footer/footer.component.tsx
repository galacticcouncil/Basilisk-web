// Utils
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "../image/image.component"
import Link from "next/link"

// Hooks
import { useBoolean } from "usehooks-ts"

// Icons
import { GoPlus } from "react-icons/go"

const Footer: React.FC = () => {
	const { value: isAboutMenuOpen, toggle: toggleAboutMenu } = useBoolean(false)
	const { value: isSocialMenuOpen, toggle: toggleSocialMenu } =
		useBoolean(false)

	const aboutItems = [
		{
			label: "Press Kit",
			slug: "/",
		},
		{
			label: "Tokenomics",
			slug: "/",
		},
		{
			label: "Documentation",
			slug: "https://docs.bsx.fi/",
		},
	]

	const socialsItems = [
		{
			label: "Discord",
			slug: "https://discord.com/invite/S8YZj5aXR6",
			icon: {
				src: "/assets/icons/discord.svg",
				alt: "discord",
			},
		},
		{
			label: "Github",
			slug: "https://github.com/galacticcouncil",
			icon: {
				src: "/assets/icons/github.svg",
				alt: "github",
			},
		},
		{
			label: "Twitter",
			slug: "https://twitter.com/bsx_finance",
			icon: {
				src: "/assets/icons/twitter.svg",
				alt: "twitter",
			},
		},
		{
			label: "Telegram",
			slug: "https://t.me/bsx_fi",
			icon: {
				src: "/assets/icons/telegram.svg",
				alt: "telegram",
			},
		},
		{
			label: "Substack",
			slug: "https://basiliskfi.substack.com/",
			icon: {
				src: "/assets/icons/substack.svg",
				alt: "substack",
			},
		},
		{
			label: "Reddit",
			slug: "/",
			icon: {
				src: "/assets/icons/reddit.svg",
				alt: "reddit",
			},
		},
	]

	const NAV_ITEMS = [
		{
			label: "Start",
			href: "/",
		},
		{
			label: "Features",
			href: "/#swap-tokens",
		},
		{
			// ref: aboutRefButton,
			label: "About",
			// isHovered: isAboutButtonHovered,
			isOpen: isAboutMenuOpen,
			toggle: toggleAboutMenu,
			list: [
				{
					label: "Documentation",
					href: "https://docs.bsx.fi/",
					icon: {
						src: "/assets/icons/docs.svg",
						alt: "documantation",
						height: 25,
					},
					// Icon: DocumentationIcon,
				},
				{
					label: "Tokenomics",
					href: "/",
					icon: {
						src: "/assets/icons/tokenomics.svg",
						alt: "github",
					},
					// Icon: TokenomicsIcon,
				},
				{
					label: "Press Kit",
					href: "/",
					icon: {
						src: "/assets/icons/press-kit.svg",
						alt: "twitter",
						height: 30,
					},
					// Icon: PressKitIcon,
				},
			],
		},
		{
			// ref: socialRefButton,
			label: "Socials",
			// isHovered: isSocialButtonHovered,
			isOpen: isSocialMenuOpen,
			toggle: toggleSocialMenu,
			list: [
				{
					label: "Discord",
					href: "https://discord.com/invite/S8YZj5aXR6",
					icon: {
						src: "/assets/icons/discord.svg",
						alt: "discord",
					},
					// Icon: DiscordIcon,
				},
				{
					label: "Twitter",
					href: "https://twitter.com/bsx_finance",
					icon: {
						src: "/assets/icons/twitter.svg",
						alt: "twitter",
					},
					// Icon: TwitterIcon,
				},
				{
					label: "Telegram",
					href: "https://t.me/bsx_fi",
					icon: {
						src: "/assets/icons/telegram.svg",
						alt: "telegram",
					},
					// Icon: TelegramIcon,
				},
				{
					label: "Substack",
					href: "https://basiliskfi.substack.com/",
					icon: {
						src: "/assets/icons/substack.svg",
						alt: "substack",
					},
					// Icon: SubstackIcon,
				},
				{
					label: "Reddit",
					href: "/",
					icon: {
						src: "/assets/icons/reddit.svg",
						alt: "reddit",
					},
					// Icon: RedditIcon,
				},
			],
		},
		{
			label: "Blog",
			href: "/",
		},
		{
			label: "Github",
			href: "https://github.com/galacticcouncil",
		},
	]

	return (
		<FooterContainer>
			<Row>
				<Col className="logo">
					<Link href="/">
						<a>
							<Logo>
								<Image
									src="/assets/logo-v1.svg"
									alt="logo"
									width="100%"
									effect="blur"
								/>
							</Logo>
						</a>
					</Link>
				</Col>
				<Col>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title className="divider">Start</Title>
							</a>
						</Link>
					</ColItem>
					<ColItem>
						<Link passHref href={"/#swap-tokens"}>
							<a>
								<Title className="divider">Features</Title>
							</a>
						</Link>
					</ColItem>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title>About</Title>
							</a>
						</Link>
						<NavList className="divider">
							{aboutItems.map((item, index) => (
								<NavItem key={index}>
									<Link href={item.slug} passHref>
										<LabelA>
											<LabelSpan>{item.label}</LabelSpan>
										</LabelA>
									</Link>
								</NavItem>
							))}
						</NavList>
					</ColItem>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title>Socials</Title>
							</a>
						</Link>
						<NavList className="divider">
							{socialsItems.map((item, index) => (
								<NavItem key={index}>
									<Link href={item.slug} passHref>
										<LabelA>
											<LabelSpan>{item.label}</LabelSpan>
										</LabelA>
									</Link>
								</NavItem>
							))}
						</NavList>
					</ColItem>
					<ColItem>
						<Link passHref href={"/"}>
							<a>
								<Title>Blog</Title>
							</a>
						</Link>
					</ColItem>
				</Col>
			</Row>

			<MobileMenuContainer
				initial={{
					opacity: 0,
					y: -200,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				exit={{
					opacity: 0,
					y: -200,
				}}
				transition={{
					type: "spring",
					mass: 1,
					stiffness: 100,
					damping: 15,
				}}
			>
				<MobileNav>
					<MobileNavList>
						{NAV_ITEMS.map((item, index) => (
							<MobileNavItem key={index}>
								{item.href && <Link href={item.href}>{item.label}</Link>}
								{item.list && (
									<MobileDropdownButton
										isOpen={item.isOpen}
										onClick={() => item.toggle()}
									>
										<span>{item.label}</span>
										<IconSpan
											isOpen={item.isOpen}
											animate={
												item.isOpen ? { rotate: "-45deg" } : { rotate: 0 }
											}
											transition={{
												type: "spring",
												mass: 1,
												stiffness: 256,
												damping: 24,
											}}
										>
											<GoPlus />
										</IconSpan>
									</MobileDropdownButton>
								)}
								<AnimatePresence>
									{item.list && item.isOpen && (
										<MobileDropdownMenu
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{
												type: "spring",
												mass: 1,
												stiffness: 256,
												damping: 24,
											}}
										>
											<MobileDropdownList>
												{item.list.map((listItem, index) => (
													<MobileDropdownMenuItem key={index}>
														<Link href={listItem.href} passHref>
															<a>
																<Image
																	src={listItem.icon.src}
																	alt={listItem.icon.alt}
																	effect="blur"
																	width={20}
																	height={24}
																	style={{
																		objectFit: "contain",
																		objectPosition: "center",
																	}}
																/>
																{/* <listItem.Icon /> */}

																<span>{listItem.label}</span>
															</a>
														</Link>
													</MobileDropdownMenuItem>
												))}
											</MobileDropdownList>
										</MobileDropdownMenu>
									)}
								</AnimatePresence>
							</MobileNavItem>
						))}
					</MobileNavList>
				</MobileNav>
				<Link href="/">
					<a>
						<Logo>
							<Image
								src="/assets/logo-v1.svg"
								alt="logo"
								width="100%"
								effect="blur"
							/>
						</Logo>
					</a>
				</Link>
			</MobileMenuContainer>
		</FooterContainer>
	)
}

export default Footer

const navLinksStyles = css`
	cursor: pointer;
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 1.8;
	color: ${({ theme }) => theme.header.navItemColor};
	transition: all 0.3s ease-in;

	&:hover {
		color: ${({ theme }) => theme.header.hoverNavItemColor};
	}
`

const Logo = styled.div`
	width: 19.879rem;
	/* display: none;
	visibility: hidden; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* display: block;
			visibility: visible; */
		}
	}
`

const FooterContainer = styled.footer`
	/* margin-top: 15rem; */
	padding: 5rem 2rem;
	background-color: ${({ theme }) => theme.footer.background};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 3rem 2rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 6rem 4rem;
		}
	}
`

const Row = styled(motion.div)`
	/* border: 1px solid blue; */
	/* justify-items: center; */
	display: none;
	visibility: hidden;

	/* .logo {
		grid-row: 2;
	}

	.divider {
		border-bottom: 0.461563px solid rgba(76, 243, 168, 0.12);
	} */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		visibility: visible;
		position: relative;
		display: grid;
		grid-gap: 2rem;
		/* grid-template-columns: 1fr; */
		max-width: 130rem;
		margin: 0 auto;

		justify-items: unset;
		grid-template-columns: 1fr 2fr;

		.logo {
			grid-row: unset;
		}

		.divider {
			border-bottom: unset;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const Col = styled(motion.div)`
	&:nth-child(1) {
		justify-self: center;
		/* border: 1px solid red; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					justify-self: unset;
				}
			}
		}
	}

	&:nth-child(2) {
		/* border: 1px solid green; */
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: start;
		/* align-items: center; */
		gap: 4rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			flex-direction: row;
			justify-content: space-evenly;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const ColItem = styled(motion.div)`
	/* margin-top: 4rem; */
`

const Title = styled(motion.h3)`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.footer.navTitleColor};
	padding-bottom: 1.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-bottom: 1.33rem;
		font-size: 1.08rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin-bottom: 2.25rem;
			font-size: 1.8rem;
		}
	}
`

const NavList = styled.ul`
	/* margin-top: 1.5rem; */
	display: flex;
	gap: 1.1rem;
	justify-content: start;
	flex-direction: column;
	padding-bottom: 1.5rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 0.66rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			gap: 1.1rem;
		}
	}
`

const LabelSpan = styled.span`
	position: relative;
	transition: all 0.3s ease-out;
`

// const IconSpan = styled.span`
// 	position: absolute;
// 	right: -1rem;
// 	top: 50%;
// 	transform: translateY(-50%);

// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	opacity: 0;
// 	transition: all 0.3s ease-out;
// `

const LabelA = styled.a`
	position: relative;

	gap: 0.5rem;
	font-weight: 400;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.footer.navItemColor};

	transitions: all 0.3s ease-in;

	&:hover {
		color: ${({ theme }) => theme.footer.hoverNavItemColor};
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 0.78rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			font-size: 1.3rem;
		}
	}
`

const NavItem = styled.li`
	display: flex;
	justify-content: start;
	align-items: start;
	flex-direction: column;
`

const MobileMenuContainer = styled(motion.div)`
	/* position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99; */

	width: 100%;
	/* height: 100vh; */

	background-color: ${({ theme }) => theme.header.mobileMenu.background};

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
		visibility: hidden;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		}
	}
`

const MobileNav = styled.nav`
	margin-top: 6.4rem;
	padding: 0 0 2rem;

	height: 100%;
	overflow-y: auto;
`

const MobileNavList = styled.ul``

const MobileNavItem = styled.li`
	a {
		${navLinksStyles};

		display: block;
		padding: 2rem 0;
		color: ${({ theme }) => theme.header.navItemColor};
	}

	&:not(:last-child) {
		border-bottom: ${({ theme }) => theme.header.mobileMenu.navItemBorder};
	}
`

const MobileDropdownButton = styled.button<{ isOpen: boolean }>`
	${navLinksStyles};
	background-color: transparent;
	outline: none;
	border: none;
	padding: 2rem 0;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ isOpen, theme }) =>
			isOpen ? theme.colors.secondary : theme.header.navItemColor};
	}
`

const IconSpan = styled(motion.span)<{ isOpen: boolean }>`
	/* transition: 0.3s; */
	color: ${({ isOpen, theme }) =>
		isOpen ? theme.colors.secondary : theme.header.navItemColor};
`

const MobileDropdownMenu = styled(motion.div)`
	overyflow: hidden;
`

const MobileDropdownList = styled.ul`
	margin: 0 1rem;
`

const MobileDropdownMenuItem = styled(motion.li)`
	/* padding: 2rem 0; */

	a {
		${navLinksStyles};

		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 2rem 2.4rem;
		color: ${({ theme }) => theme.header.mobileMenu.dropdownMenu.navItemColor};

		&:hover {
			color: ${({ theme }) =>
				theme.header.mobileMenu.dropdownMenu.navItemColor};
			background: ${({ theme }) =>
				theme.header.mobileMenu.dropdownMenu.hoverBackground};
		}
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:not(:last-child) {
		border-bottom: ${({ theme }) => theme.header.mobileMenu.navItemBorder};
	}
`
