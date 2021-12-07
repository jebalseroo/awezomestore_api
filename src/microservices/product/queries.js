'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PRODUCT_BASE_URL;

module.exports = {
  // User
  getUser: async () => {
    return await HttpProvider.get(`${baseUrl}/user`);
  },

  // Product
  getProduct: async () => {
    return await HttpProvider.get(`${baseUrl}/product`);
  },

  // ShoppingCart
  getShoppingCart: async () => {
    return await HttpProvider.get(`${baseUrl}/shopping-cart`);
  },

  // Category
  getCategory: async () => {
    return await HttpProvider.get(`${baseUrl}/category`);
  },

  // Subcategory
  getSubcategory: async () => {
    return await HttpProvider.get(`${baseUrl}/subcategory`);
  },

  // Comment
  getComment: async () => {
    return await HttpProvider.get(`${baseUrl}/comment`);
  },

  // Price
  getPrice: async () => {
    return await HttpProvider.get(`${baseUrl}/price`);
  },

  // Score
  getScore: async () => {
    return await HttpProvider.get(`${baseUrl}/score`);
  },
};
