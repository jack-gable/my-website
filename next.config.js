/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SITE_KEY: "6LcgSd0oAAAAAMq8XqDSgW7IOxiCGQlUwkz0k5iD",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
