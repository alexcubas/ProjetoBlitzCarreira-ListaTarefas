module.exports = {
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'app/tests',
    'app/database/config',
    'app/database/migrations',
    'app/database/seeders'
  ],
  include: ['app/**/*.ts']
};
