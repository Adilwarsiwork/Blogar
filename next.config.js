/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASEPATH
      : "",

  optimizeFonts: true,
  swcMinify: true,

  images: {
    domains: ["cdn.sanity.io"],
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: ["cdn.sanity.io"],
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
