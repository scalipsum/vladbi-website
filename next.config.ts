import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'www.notion.so',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'bgefmqefmboheirzxqvu.supabase.co',
				port: '',
				pathname: '/**',
			},
		],
	},
	// PostHog reverse proxy configuration
	async rewrites() {
		return [
			{
				source: '/ingest/static/:path*',
				destination: 'https://eu-assets.i.posthog.com/static/:path*',
			},
			{
				source: '/ingest/:path*',
				destination: 'https://eu.i.posthog.com/:path*',
			},
		];
	},
	// Required to support PostHog trailing slash API requests
	skipTrailingSlashRedirect: true,
};

export default nextConfig;
