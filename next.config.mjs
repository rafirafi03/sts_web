/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML site to /out
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
