const { resolveAny } = require('dns');

/**
 * Method to validate DNS
 * @param {string} serverAddress
 * @returns {Promise<Boolean>}
 */
exports.isValidDNS = (serverAddress) => new Promise((resolve) => {
  resolveAny(serverAddress, (error, address) => {
    if (error) resolve(false);
    else if (address.length > 0) resolve(true);
    else resolve(false);
  });
});
