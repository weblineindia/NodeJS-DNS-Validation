const dns = require('dns')

function isValidDNS(serveraddress) {
    let isValid = false
    return new Promise((resolve) => {
        dns.resolveAny(serveraddress, (err, addresses) => {
            if (err) {
                resolve(isValid)
            }
            if (addresses !== undefined && addresses.length > 0) {
                isValid = true
            }
            resolve(isValid)
        })
    })
}

exports.isValidDNS = isValidDNS