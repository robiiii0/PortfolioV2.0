/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "iroc.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hiddenhillsclub.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/Aboutme",
        destination: "/a-propos",
        permanent: true,
      },
      {
        source: "/Job",
        destination: "/projets",
        permanent: true,
      },
      {
        source: "/Job/:slug",
        destination: "/projets/:slug",
        permanent: true,
      },
      // /Contact redirect handled by filesystem (case-insensitive on macOS)
      // On case-sensitive servers, Next.js lowercases routes automatically
      {
        source: "/CurrentProjects",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
