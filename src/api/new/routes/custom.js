module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/custom',
      handler: 'customAction',
      config: {
        auth: false
      }
    }
  ]
}