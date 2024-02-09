'use strict';

/**
 * new router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreRouter('api::new.new', ({ strapi }) => ({

  async customAction (ctx) {
        try {
          
          ctx.body = 'Hello World'

        } catch (error) {
          ctx.body = error
        }
  }

}));
