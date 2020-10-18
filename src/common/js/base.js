export default{
    methods:{

        //rpc交易
        /**
         * 
         * @param {*} opts 接口名
         * @param {*} param 参数
         * @param {*} successCallBack 成功回调
         * @param {*} failCallBack  失败回调
         */
        AliJSBridge_rpc(opts,param,successCallBack,failCallBack){
            AlipayJSBridge.call("rpc",{
                operationType:opts,
                requestData:  [{
					_requestBody: param
				}],
                headers: {
                            accept: '*/*',
                          }
              },(res)=>{
                if(res.Code=="000000"){
                    successCallBack(res)
                }else{
                    failCallBack(res)
                }
              })
        },
         //访问量埋点
		 getMtrack(PageID){
			window._to.mPageState = PageID // 页面状态,访问量埋点时用到
			window.initTracker()
          },


        // 路由跳转 flag 是否关闭当前路由
        /** 
         *  @param to  路由 '/index'
         *  @param params   参数 
         *  @param flag  是否关闭当前路由   
        */
    
        jump(to, params, flag) {
			if(this.$router) {
				if(flag) {
					this.$router.replace({
						name: to.replace(/^\//, ''),
						params: params
					})
				} else {
					this.$router.push({
						name: to.replace(/^\//, ''),
						params: params
					})
				}
			}
        },
        goBack(){
            if(this.$router){
				if(this.$route.path=="/index.vue") {
                    /*这种方法也可以关闭原生层 （打开功能离线包只开了一层webview可以不需要用exitApp）
                    exitApp原麒麟demo 用来退出整个离线包（可关闭一个离线包内多个层）（最多5个）
                    单个离线包内页面采用pushWindow打开的
                    */
					AlipayJSBridge.call('popWindow') 
					//关闭webview
					return
				} else{
					this.$router.back();
				}
			}
        }

    }
}