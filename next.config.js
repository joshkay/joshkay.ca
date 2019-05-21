const withSass = require('@zeit/next-sass');

module.exports = withSass({
  minified: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  },
  publicRuntimeConfig: {
    SUCCESS_ALERT_TIMEOUT: 4,
    ERROR_ALERT_TIMEOUT: 10,
    RECAPTCHA_SITE_KEY: "6LeaVaQUAAAAAD63Axxu5kfDkhJzmLXLpQZz2KzO"
  }
});