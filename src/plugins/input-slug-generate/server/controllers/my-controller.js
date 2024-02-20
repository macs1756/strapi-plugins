'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('input-slug-generate')
      .service('myService')
      .getWelcomeMessage();
  },
});
