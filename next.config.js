/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "boopilotai-tpmljkkh.manus.space"],
  },
  async rewrites() {
    return {
      // Fallback rewrites are checked AFTER Vercel checks its own pages
      fallback: [
        {
          // If Vercel doesn't have the page, silently fetch it from Manus
          source: '/:path*',
          destination: 'https://app.boopilot.com/:path*',
        },
      ],
    }
  },
};

module.exports = nextConfig;
