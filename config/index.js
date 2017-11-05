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
        prefs: [
          {name: 'account', title: 'Robinhood Account', active: false, icon: '\uF2BE'},
          {name: 'risk', title: 'Risk Settings', active: false, icon: '\uF2C8'},
          {name: 'chase', title: 'Chase Coefficient', active: false, icon: '\uF201'},
          {name: 'screener', title: 'Stock Picks', active: false, icon: '\uF03A'},
          {name: 'strategy', title: 'Stop Loss Strategy', active: false, icon: '\uF0AB'},
          {name: 'activate', title: 'Activate', active: false, icon: '\uF011'}
        ]
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
    }
  }
});

export default config;
