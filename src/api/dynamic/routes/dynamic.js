'use strict';

/**
 * dynamic router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dynamic.dynamic');
