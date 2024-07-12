/** @type {import('next').NextConfig} */
const nextConfig = {


    env: {
        XRapidAPIKey: process.env.XRapidAPIKey,
        XRapidAPIHost: process.env.XRapidAPIHost,
      },
      typescript: {
        ignoreBuildErrors: true,
      }
}

module.exports = nextConfig
