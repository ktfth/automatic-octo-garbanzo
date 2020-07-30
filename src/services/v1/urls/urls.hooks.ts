
import fetch from '../../../hooks/fetch';
export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [fetch()],
    update: [fetch()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
