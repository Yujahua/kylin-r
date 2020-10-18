import { Page } from '@ali/kylin-framework';
import router from "./router.js";
import store from './store';
import App from "./app"
import FastClick from 'fastclick';
import nativeBridge from '../common/js/nativeBridge.js';
import Base from '../common/js/base.js';
import Router from '../common/js/router.js';
import 'mand-mobile/lib-vw/mand-mobile.css';
FastClick.attach(document.body);
Vue.mixin(nativeBridge);
Vue.mixin(Base)
Vue.mixin(Router)
class IndexPage extends Page {

  initOptions() {
    return {
      router,
      store
    };
  }

  render() {
    return <App></App>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
