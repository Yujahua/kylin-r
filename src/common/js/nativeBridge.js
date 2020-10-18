
export default{
    methods:{
        ready(callback) {
            // 如果 jsbridge 已经注入则直接调用
            if (window.AlipayJSBridge) {
            callback && callback();
            } else {
            // 如果没有注入则监听注入的事件
            document.addEventListener('AlipayJSBridgeReady', callback, false);
            }}
    }
}