module.exports = {
  launch: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  server: {
    command: "node server.js",
    port: 3000,
    launchTimeout: 5000
  }
};
