
import { use } from '@ali/kylin-framework';
import Router from "vue-router";
import Index from "./views/index.vue";
import IndexTwo from "./views/indexTwo.vue";
use(Router)
let router= new Router({
    routes:[
        {
          path:'/index',
          name:"index",
          component:Index,
          meta:{
              title:'首页',
              index:0
          }
        },
        {
            path:"/indexTwo",
            name:"indexTwo",
            component:IndexTwo,
            meta:{
                title:"首页2"
            }
            },
        {
            path:"/",
            redirect:"/index"
        }
    ]
})
export default router