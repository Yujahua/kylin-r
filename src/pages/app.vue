<template>
    <div class="router">
        <!-- 路由 -->
        <div class="router-wrapper">
               <!-- <Head :title="$route.meta.title"></Head> -->
            <transition name="router-fade" mode="out-in">
                <keep-alive :include="$store.state.keepAlive">
                    <router-view ></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>

import { Component } from "@ali/kylin-framework";
@Component

export default class AppView {

  data={
  }

  created(){
       
   }
  mounted() {
      this.ready(()=>{
          document.addEventListener('titleClick', function(e) {
                    console.log(111);
                }, false)
        var that=this
            document.addEventListener("back",function(e){
                that.$router.back()
                e.preventDefault();//阻止原生物理返回 
            })
        //   给客户端使用 （头部）
          AlipayJSBridge.call('setTitle', {
                title: '首页',
                image:""
            });
            AlipayJSBridge.call("setTitleColor", {
                color:123,
                reset: false //（可选，默认为 false） 是否重置 title 颜色为默认颜色。
            });
      })
  }
    


};
</script>