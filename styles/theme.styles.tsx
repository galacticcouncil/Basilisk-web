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
