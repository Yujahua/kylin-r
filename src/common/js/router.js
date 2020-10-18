export default {
    // 跳转进入该路由前 路由生命周期
  beforeRouteEnter (to, from, next) {
    //   从别的功能跳入当前功能 去判断是否有 传入参数 AlipayJSBridge.startupParams 去做相应路由跳转
      if(typeof AlipayJSBridge !="undefined" && AlipayJSBridge.startupParams.param){
        if(typeof AlipayJSBridge.startupParams.param == "object"){

        }else{

        }
      }else{
        next({})
      }
    },
    // 跳转离开该路由前
  beforeRouteLeave (to, from, next) {
       next(vm => {
      
         });
  }
  };