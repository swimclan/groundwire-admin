import {get as _get, merge as _merge} from 'lodash';

let _config = {};

export default {
  get(path) {
    return _get(_config, path);
  },
  set(config) {
    _config = _merge({}, config, _config)
  }
}
