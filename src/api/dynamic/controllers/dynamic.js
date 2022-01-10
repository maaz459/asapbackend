'use strict';

/**
 *  dynamic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dynamic.dynamic');
