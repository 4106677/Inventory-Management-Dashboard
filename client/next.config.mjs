/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's3-inventorymanagement-api.s3.eu-north-1.amazonaws.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;