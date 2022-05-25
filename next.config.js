module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/practicum',
        permanent: false,
      },
      {
        source: '/docs/',
        destination: '/docs/practicum',
        permanent: false,
      },
    ]
  },
  trailingSlash: true,
}
