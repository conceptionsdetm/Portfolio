/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_BASE_PATH === "/Portfolio";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { loader: "custom", loaderFile: "./src/imageLoader.js" },
  basePath: isProd ? "/Portfolio" : "",
  assetPrefix: isProd ? "/Portfolio/" : "",
};

export default nextConfig;
