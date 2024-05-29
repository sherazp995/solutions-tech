/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
