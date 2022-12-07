/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	async headers() {
		return [
			{
				source: "/(.*)?", // Matches all pages
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Content-Security-Policy",
						value:
							"default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self';"
								.replace(/\s{2,}/g, " ")
								.trim(),
					},
				],
			},
		]
	},
}

module.exports = nextConfig
