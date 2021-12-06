'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PRODUCT_BASE_URL;

module.exports = {
  // Category
  getCategory: async () => {
    return await HttpProvider.get(`${baseUrl}/category`);
  },
};
