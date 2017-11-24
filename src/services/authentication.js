import config from 'config';
import {merge} from 'lodash';
import {encode, createForm} from 'tools/utils';

export const login = (email, password, cb) => {
  let ret = {};
  let form = createForm({emailAddress: email, password: password});
  fetch(config.get('ajax.login.url'), {
    method: config.get('ajax.login.method'),
    credentials: 'include',
    mode: 'cors',
    body: form
  })
  .then((res) => {
    switch (res.status) {
      case 401:
        ret.error = true;
        ret.message = config.get('messages.flash.login.unauthorized');
        ret.user = null;
        break;
      case 200:
        ret.error = false;
        ret.message = config.get('messages.flash.login.success');
        ret.user = email;
        break;
      default:
        ret.error = true;
        ret.message = config.get('messages.flash.server.error');
        ret.user = null;
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

export const tokenize = ({username, password}, cb) => {
  let ret = {};
  let headers = new Headers();
  let encoded = encode(username, password);
  headers.append('Authorization', `Basic ${encoded}`);
  fetch(config.get('ajax.tokenize.url'), {
    method: config.get('ajax.tokenize.method'),
    credentials: 'include',
    mode: 'cors',
    headers: headers
  }).then((res) => {
    switch (res.status) {
      case 401:
        ret.error = true;
        ret.message = config.get('messages.flash.tokenize.unauthorized');
        break;
      case 200:
        ret.error = false;
        ret.message = config.get('messages.flash.tokenize.success');
        break;
      default:
        ret.error = true;
        ret.message = config.get('messages.server.error');
    }
    cb(null, ret);
  }).catch((err) => {
    ret.error = true;
    ret.message = config.get('messages.server.error');
    cb(err, ret);
  });
}
