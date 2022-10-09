export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		primary: "#FFCE4F",
		secondary: "#4FFFB0",
	},
	button: {
		color: "#000",
		background: `
			linear-gradient(
				90deg,
				#4fffb0 1.27%,
				#b3ff8f 48.96%,
				#ff984e 104.14%
			),
			linear-gradient(90deg, #4fffb0 1.27%, #a2ff76 53.24%, #ff984e 104.14%),
			linear-gradient(90deg, #ffce4f 1.27%, #4fffb0 104.14%)
		`,
	},
	header: {
		background: "rgba(22, 25, 28, 0.5)",
		navItemColor: "#FFFFFF",
		hoverNavItemColor: "#B8FFDF",
		dropdownMenu: {
			beforeBackground: "#000",
			background: "rgba(76, 243, 168, 0.12)",
			hoverBackground: "rgba(218, 255, 238, 0.06)",
			borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
			boxShadow: "0px 40px 70px rgba(0, 0, 0, 0.8)",
			blur: "blur(20px)",
		},
		mobileMenu: {
			background: "#121416",
			navItemBorder: "0.0461563rem solid rgba(76, 243, 168, 0.12)",
			dropdownMenu: {
				navItemColor: "#DAFFEE",
				hoverBackground: "rgba(218, 255, 238, 0.06)",
			},
		},
	},
	heroSection: {
		headingBackground:
			"linear-gradient(90deg, #4fffb0 0%, #b3ff8f 50%, #ff984e 100%)",
		descriptionColor: "#E5ECF1",
		ctaButtonBackground: "linear-gradient(90deg, #4FFFB0 0%, #B3FF8F 100%)",
	},
	onChainSection: {
		background:
			"linear-gradient(0deg, rgba(0, 0, 0, 0.2) -11.67%, rgba(0, 0, 0, 0) 32.64%), linear-gradient(90deg, #4FFFB0 1.27%, #B3FF8F 104.14%)",
		color: "#000",
		dividerColor: "#211F24",
	},
	hamMenu: {
		color: "#FFFFFF",
		bottomColor: "#9EA9B1",
	},
	backgrounds: {},
	fonts: {
		primary: "#EBEBEB",
		secondary: "#ACB2B5",
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "1536px",
	},
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
