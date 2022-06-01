module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/start',
        permanent: false,
      },
      {
        source: '/docs/',
        destination: '/docs/start',
        permanent: false,
      },
    ]
  },
  trailingSlash: true,
}
