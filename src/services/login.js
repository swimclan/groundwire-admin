import config from 'config';
import {merge} from 'lodash';

export default function(email, password, cb) {
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
    if (res.status === 401) {
      ret.error = true;
      ret.message = config.get('messages.flash.login.unauthorized');
    } else if (res.status === 200) {
      ret.error = false;
      ret.message = config.get('messages.flash.login.success');
    } else {
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