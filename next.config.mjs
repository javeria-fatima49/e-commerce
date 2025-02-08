// /** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {hostname: "cdn.sanity.io",},
        ]},
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ]
  },

};

export default nextConfig;
