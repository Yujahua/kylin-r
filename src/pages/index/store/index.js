import { Store } from '@ali/kylin-framework';
import stateExtra from './state.js';
import mutationsExtra from './mutations.js';
import gettersExtra from './getters.js';
import actionsExtra from './actions.js';
let options={
  state:stateExtra,
  mutations:mutationsExtra,
  getters:gettersExtra,
  actions:actionsExtra
}
export default new Store(options);
