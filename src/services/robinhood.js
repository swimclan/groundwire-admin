import config from 'config';
import {encode} from 'tools/utils';

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