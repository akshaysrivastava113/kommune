// redisClient.js
const { createClient } = require('redis');

const redisClient = createClient({
  legacyMode: true,
  url: 'redis://localhost:6379',
});

redisClient.connect().catch(console.error);

module.exports = redisClient;
