module.exports = {
	reactStrictMode: true,
	env: {
		myApi: process.env.NEXT_PUBLIC_BASE_URL,
		apiKey: process.env.NEXT_PUBLIC_MY_API_KEY,
	},
}
