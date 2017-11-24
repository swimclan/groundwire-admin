import config from 'config';
import {createForm} from 'tools/utils';
import {assign, omit} from 'lodash';

export const strategies = (cb) => {
  return new Promise((resolve, reject) => {
    fetch(config.get('ajax.strategies.url'), {
      method: config.get('ajax.strategies.method'),
      credentials: 'include',
      mode: 'cors'
    }).then((res) => {
      res.json().then((json) => {
        return resolve(json)
      }).catch((err) => {
        return reject(err);
      });
    }).catch((err) => {
      return reject(err);
    });
  });
}

export const preferences = () => {
  return new Promise((resolve, reject) => {
    fetch(config.get('ajax.preferences.url'), {
      method: config.get('ajax.preferences.method'),
      credentials: 'include',
      mode: 'cors'
    }).then((res) => {
      res.json().then((json) => {
        return resolve(json)
      }).catch((err) => {
        reject(err);
      });    
    }).catch((err) => {
      reject(err);
    });
  });
}

export const createPreferences = (newPrefs) => {
  let sendForm = omit(newPrefs, ['createdAt', 'updatedAt', 'id']);
  let exclusionsJson = JSON.stringify(sendForm.exclusions);
  sendForm.exclusions = exclusionsJson;
  return new Promise((resolve, reject) => {
    fetch(config.get('ajax.savePreferences.url'), {
      method: config.get('ajax.savePreferences.method'),
      credentials: 'include',
      mode: 'cors',
      body: createForm(sendForm)
    }).then((res) => {
      res.json().then((json) => {
        return resolve(json)
      }).catch((err) => {
        reject(err);
      });    
    }).catch((err) => {
      reject(err);
    });
  });
}
