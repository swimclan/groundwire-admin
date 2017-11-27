# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.11.0] - 2017-11-26
### Added
- Setting preferences and saving to the database
- Managing connected robinhood account from the dashboard
- Dispatching reset events from control components

## [0.10.0] - 2017-11-24
### Added
- Setting strategy and saving to the db
- Vuex actions dispatched from components

## [0.9.0] - 2017-11-11
### Added
- Generic switch control
- Sidebar as a page in the router with active animation

## [0.8.0] - 2017-11-11
### Added
- Generic toggle button control
- units for slider text boxes

## [0.7.0] - 2017-11-08
### Added
- Generic text box form control
- Generic slider control
- Scaling and fixed denomination functions for slider display

## [0.6.2] - 2017-11-06
### Added
- GET Strategies integration with server
- Applying strategies into state at app load time

## [0.6.1] - 2017-11-05
### Added
- Sidebar popout functionality and click events
- Configurable dashboard components

## [0.6.0] - 2017-11-03
### Added
- Dashboard parent base component
- Chase coefficient component template
- Stop margin component template
- Fixed bug where refresh on dashboard was logging out

## [0.5.1] - 2017-10-30
### Added
- Clean up logout page

## [0.5.0] - 2017-10-29
### Added
- App authentication routing based on authentication states
- User email address in header on login

## [0.4.0] - 2017-10-28
### Added
- Integration with Robinhood auth token handling on api

## [0.3.0] - 2017-10-25
### Added
- Styles for Robinhood page
- Mixins (scss) for login widget shared styles
- Image loader for webpack
- Sidebar custom colors for Robinhood page

## [0.2.0] - 2017-10-23
### Added
- Additional page layout styles
- Vuex integration with authentication state
- Login sessions and logout support
- Check service to check for active login session

## [0.1.1] - 2017-10-15
### Added
- Login page styles

## [0.1.0] - 2017-10-15
### Added
- Login integration with groundwire API server
- Cleaned up login page code and authentication method

## [0.0.2] - 2017-09-30
### Added
- Vue router for routing between content views
- Browser sync in the webpack dev server to enable hot browser reloads

## [0.0.1] - 2017-09-29
### Added
- Initial skeletal structure of the application
- Webpack dev server introduced for local development
- Vue js framework introduced with vue-loader for componentization