// Generated by CoffeeScript 1.10.0
var api, baseOVHKonnector, connector, name, slug;

baseOVHKonnector = require('../lib/base_ovh_konnector');

name = 'RunAbove CA';

slug = 'runabove_ca';

api = {
  endpoint: 'runabove-ca',
  appKey: '',
  appSecret: ''
};

connector = module.exports = baseOVHKonnector.createNew(api, name, slug);
