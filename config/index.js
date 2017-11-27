import {get as _get} from 'lodash';
import config from 'services/config';

config.set({
  app: {
    name: 'Groundwire Strategy Administration',
    author: 'Matthew Herron',
    contributors: [
      'Chris Hastings'
    ],
    pages: {
      login: {
        title: 'Groundwire Login',
        headings: {
          main: 'Login to Groundwire Administration'
        },
        formbutton: 'Login'
      },
      robinhood: {
        formbutton: 'Connect',
        headings: {
          main: 'Connect to Robinhood Account'
        }
      },
      dashboard: {
        title: 'Groundwire Trading Preferences',
        prefs: {
          account: {name: 'account', title: 'Robinhood Account', active: false, icon: '\uF2BE', description: 'Connect or disconnect your robinhood account'},
          risk: {name: 'risk', title: 'Risk Settings', active: false, icon: '\uF2C8', description: 'Manage the risk settings for your automated trading alogorithm'},
          chase: {name: 'chase', title: 'Chase Coefficient', active: false, icon: '\uF201', description: 'Set the chase speed of the stop loss algorithm'},
          screener: {name: 'screener', title: 'Stock Picks', active: false, icon: '\uF03A', description: 'Set the criteria for the MSN screener stock picking feature'},
          strategy: {name: 'strategy', title: 'Stop Loss Strategy', active: false, icon: '\uF0AB', description: 'Select a specific trailing stop loss algorithm'},
          activate: {name: 'activate', title: 'Activate', active: false, icon: '\uF011', description: 'Turn on or off the automated trader for actively trading on your Robinhood account'}
        }
      }
    },
    ui: {
      button: {
        save: {
          title: 'Save'
        },
        saved: {
          title: 'Saved'
        },
        reset: {
          title: 'Reset'
        }
      },
      labels: {
        connected: 'Connected',
        disconnected: 'Disconnected',
        connect: 'Connect',
        disconnect: 'Disconnect'
      },
      icons: {
        connected: '\uF00C',
        disconnected: '\uF00D'
      }
    }
  },
  messages: {
    flash: {
      server: {
        error: 'Something went wrong please try again'
      },
      login: {
        success: 'Login successful',
        unauthorized: 'Invalid email address or password'
      },
      tokenize: {
        success: 'Robinhood account successfully connected',
        unauthorized: 'Robinhood account credentials invalid'
      }
    }
  },
  utils: {
    denominations: {
      12: 'T',
      9: 'B',
      6: 'M',
      3: 'K',
      0: ''
    }
  },
  ajax: {
    default: {
      options: {
        mode: 'cors',
        credentials: 'include'
      }
    },
    login: {
      url: 'https://api.groundwire.co/v1/user/login',
      method: 'POST',
      options: {}
    },
    logincheck: {
      url: 'https://api.groundwire.co/v1/user/check',
      method: 'GET',
      options: {}
    },
    logout: {
      url: 'https://api.groundwire.co/v1/user/logout',
      method: 'GET',
      options: {}
    },
    tokenize: {
      url: 'https://api.groundwire.co/v1/user/tokenize',
      method: 'GET',
      options: {}
    },
    strategies: {
      url: 'https://api.groundwire.co/v1/strategy',
      method: 'GET',
      options: {}
    },
    preferences: {
      url: 'https://api.groundwire.co/v1/preferences',
      method: 'GET',
      options: {}  
    },
    savePreferences: {
      url: 'https://api.groundwire.co/v1/preferences',
      method: 'POST',
      options: {}  
    },
    disconnect: {
      url: 'https://api.groundwire.co/v1/user/disconnect',
      method: 'GET',
      options: {}
    }
  }
});

export default config;
