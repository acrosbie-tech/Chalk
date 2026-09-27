/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverExternalPackages: ["node:sqlite"]
};

module.exports = nextConfig;
