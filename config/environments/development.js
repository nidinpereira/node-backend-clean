const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: 3001
  },
  logging2: {
    appenders: [
      { type: 'console' },
      { type: 'file', filename: logPath }
    ]
  },

  logging: {
    appenders: {
      access: { type: 'dateFile', filename: 'log/access.log', pattern: '-yyyy-MM-dd' },
      app: { type: 'file', filename: 'log/app.log', maxLogSize: 10485760, numBackups: 3 },
      errorFile: { type: 'file', filename: 'log/errors.log' },
      errors: { type: 'console', level: 'error', appender: 'errorFile' }
    },
    categories: {
      default: { appenders: ['app', 'errors'], level: 'info' },
      http: { appenders: ['access'], level: 'info' }
    }
  }
};
