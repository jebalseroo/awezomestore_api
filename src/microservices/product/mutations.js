'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PRODUCT_BASE_URL;

module.exports = {
  // Category
  createCategory: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/category`, data);
  },
  updateCategory: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/category`, data);
  },
};
