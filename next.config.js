/** @type {import('next').NextConfig} */
const nextConfig = {
  //----------for using external images------------
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

module.exports = nextConfig;
