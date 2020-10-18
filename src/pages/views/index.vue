<template>
 <div >
   <div>
      <button @click="surePost"></button>
   </div>
 </div>
</template>

<style lang="less" rel="stylesheet/less" >
</style>

<dependency component="loadmore" src="common/components/loadmore.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class Index {
      data={
        statrtTime:"",
        endTime:""
      }
      mounted(){
        // this.getData()
        this.statrtTime=new Date().getTime()
      }
      beforeDestory(){
           /*时间埋点
            @param 参数一 埋点名称 用于自定义分析 参数二 结束时间-开始时间
          */
         this.endTime = new Date().getTime()
          Tracker.calc('00000001_index_timeMtrack', this.endTime-this.statrtTime);
      }
      methods={
        // 于 JS 传入的 JSON 数据无法包含数据类型，在 Native 层转为字典时可能会由于数据类型
 //问题导致误差，如果是数字类型的精确值，尽量使用字符串来进行传递
            getData(){
            var requestParams = [{
              _requestBody: params
            }]
            AlipayJSBridge.call("rpc",{
              operationType:"com.test.do",
              requestData: requestParams,
              headers: {
                accept: '*/*',
              }
            },()=>{

            })
          },
          goTwo(){
            this.$router.push({
              path:"/indexTwo"
            })
          },
          startApp(){
            AlipayJSBridge.call('startApp', {
                appId: '00000002',
                param: {}
                }, function(result) {
          })
        },
        clickMtrck(){
          // 点击埋点
        },
        surePost(){
           window.Tracker.click('00000001_index_clickMtrack', {producte:"01"}, (xhr)=> {

          })
        }
        
    }
      
    
  }
</script>
