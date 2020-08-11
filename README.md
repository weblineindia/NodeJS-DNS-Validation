# DNS-validation

A NodeJS component used for DNS validation. 

## Table of contents

- [Getting started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Want to Contribute?](#want-to-contribute)
- [Need Help / Support?](#need-help)
- [Collection of Other Components](#collection-of-components)
- [Changelog](#changelog)
- [Credits](#credits)
- [License](#license)
- [Keywords](#Keywords)

## Getting started

Install the npm package:

``` bash
npm install nodejs-weblineindia-dns-validation
#OR
yarn add nodejs-weblineindia-dns-validation
```
## Features

- This component checks if domain name is registered and has a valid MX or A record.

## Usage

Use `isValidDNS` function to validate dns server:

```js
const { isValidDNS } = require('nodejs-weblineindia-dns-validation');
OR
import { isValidDNS } from 'nodejs-weblineindia-dns-validation'

async function valid(serverAddress) {
    try {
        // call this function in async function
        const result = await isValidDNS(serverAddress);
        console.log("Result ",result);
    } catch (error) {
        console.log(error)
    }
}

// call the function to check dns server
valid('smtp-mail.outlook.com')
```

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use dns validation in their software project. In case you want to customize this dns validation component as your development needs, then feel free to contact our [NodeJS developers](https://www.weblineindia.com/hire-node-js-developer.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

nodejs-weblineindia-dns-validation is inspired by the [dns](https://nodejs.org/api/dns.html).

## License

[MIT](LICENSE)

[mit]: https://github.com/miguelmota/is-valid-domain/blob/e48e90f3ecd55431bbdba950eea013c2072d2fac/LICENSE

## Keywords

 nodejs-weblineindia-dns-validation, node-dns-validation, dns-validation, dns, dnsvalidator, nodejs, node-component, nodecomponent, node, dns-resolver
