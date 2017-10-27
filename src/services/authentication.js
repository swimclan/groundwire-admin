import config from 'config';
import {merge} from 'lodash';

export const login = (email, password, cb) => {
  let ret = {};
  let formdata = new FormData();
  formdata.append('emailAddress', email);
  formdata.append('password', password);
  fetch(config.get('ajax.login.url'), {
    method: config.get('ajax.login.method'),
    credentials: 'include',
    mode: 'cors',
    body: formdata
  })
  .then((res) => {
    switch (res.status) {
      case 401:
        ret.error = true;
        ret.message = config.get('messages.flash.login.unauthorized');
        break;
      case 200:
        ret.error = false;
        ret.message = config.get('messages.flash.login.success');
        break;
      default:
        ret.error = true;
        ret.message = config.get('messages.flash.server.error');
    }
    cb(null, ret);
  })
  .catch((err) => {
    ret.error = true;
    ret.message = config.get('messages.flash.server.error');
    cb(err, ret);
  });
}

export const check = (cb) => {
  fetch(config.get('ajax.logincheck.url'), {
    method: config.get('ajax.logincheck.method'),
    credentials: 'include',
    mode: 'cors'
  }).then((res) => {
    res.json().then((json) => {
      cb(null, json);
    }).catch((err) => {
      cb(err, null);
    });
  }).catch((err) => {
    cb(err, null);
  });
}

export const logout = (cb) => {
  fetch(config.get('ajax.logout.url'), {
    method: config.get('ajax.logout.method'),
    credentials: 'include',
    mode: 'cors'
  }).then((res) => {
    res.json().then((json) => {
      cb(null, json);
    }).catch((err) => {
      cb(err, null);
    });
  }).catch((err) => {
    cb(err, null);
  });
}