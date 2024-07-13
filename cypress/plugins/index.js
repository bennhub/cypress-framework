// cypress/plugins/index.js

module.exports = (on, config) => {
    // Add custom tasks or modify config here
    on('task', {
      log(message) {
        console.log(message)
        return null
      },
    });
  
    // Return the modified config object
    return config;
  };
  