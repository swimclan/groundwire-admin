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
                }
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
            }
        }
    },
    ajax: {
        login: {
            url: 'https://api.groundwire.co/v1/user/login'
        }
    }
});

export default config;