'use strict';

/**
 * dynamic service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic.dynamic');
