#!/usr/bin/env node

/**
 * @copyright 2020 John Wiley & Sons, Inc.
 * @license MIT
 **/

const whois = require('whois-json');

require('yargs')
  .scriptName('whois-json')
  .usage('$0 <domain>', 'Search whois', (yargs) => {
    yargs.positional('domain', {
      type: 'string',
      describe: 'domain name to search for in whois records'
    });
  }, async (argv) => {
    var results = await whois(argv.domain);
    console.log(JSON.stringify(results, null, 2));
  })
  .help()
  .argv
