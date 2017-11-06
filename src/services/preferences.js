import config from 'config';

export const strategies = (cb) => {
  fetch(config.get('ajax.strategies.url'), {
    method: config.get('ajax.strategies.method'),
    credentials: 'include',
    mode: 'cors'
  }).then((res) => {
    res.json().then((json) => {
      if (res.status < 400) {
        return cb(null, json);
      }
      return cb(json, null)
    }).catch((err) => {
      cb(err, null);
    });
  }).catch((err) => {
    cb(err, null);
  });
}
