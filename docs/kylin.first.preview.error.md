```log
λ cnpm run dev:preview

> @ dev:preview E:\workspace\yujahuampass\kylin-demo
> kylin build --dev --open index

[Dev] --dev is Deprecated, please use "--server --no-prod --hot --no-compress" instead of it

[Config] using config "E:\workspace\yujahuampass\kylin-demo/package.json"."kylinApp"
[Hot] 文件变更会触发热替换 (kylinApp.options.enableRefresh=false)
[Plugin] [loading] "module:./plugin.js"
[Plugin] [loading] "vue"
[Plugin] [loading] "resource"
[Resource] "vue"=>"global['Vue']": (js: 'https://gw.alipayobjects.com/as/g/h5-lib/vue/2.5.13/vue.min.js')
[Resource] "fastclick"=>"global['FastClick']": (js: 'https://gw.alipayobjects.com/as/g/luna-component/luna-fastclick/0.3.1/index.js')
[Plugin] [loading] "env"
[Plugin] [loading] "mock"
[Plugin] [resource] "vue" [Applied]
[Plugin] [resource] "resource" [Applied]

[Server] NODE_ENV = development
[Server] nebulaTarget = common
[Server] port = 8090
[Plugin] [babel-config] "module:./plugin.js" [Applied]
[Plugin] [webpack-config] "module:./plugin.js" [Applied]
{ babel:
   { babelrc: false,
     presets: [ [Array] ],
     plugins:
      [ [Array],
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-vue-jsx@3.7.0@babel-plugin-transform-vue-jsx\\index.js',
        [Array],
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-decorators-legacy@1.3.5@babel-plugin-transform-decorators-legacy\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties\\lib\\index.js',
        [Array],
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-do-expressions@6.22.0@babel-plugin-transform-do-expressions\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-function-bind@6.22.0@babel-plugin-transform-function-bind\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-class-constructor-call@6.24.1@babel-plugin-transform-class-constructor-call\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-export-extensions@6.22.0@babel-plugin-transform-export-extensions\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-decorators@6.24.1@babel-plugin-transform-decorators\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-syntax-dynamic-import@6.18.0@babel-plugin-syntax-dynamic-import\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-syntax-trailing-function-commas@6.22.0@babel-plugin-syntax-trailing-function-commas\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-exponentiation-operator@6.24.1@babel-plugin-transform-exponentiation-operator\\lib\\index.js',
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_babel-plugin-transform-object-rest-spread@6.26.0@babel-plugin-transform-object-rest-spread\\lib\\index.js' ] },
  output:
   { path: '/',
     publicPath: '',
     filename: 'js/[name].[hash:7].js',
     chunkFilename: 'js/[id].[chunkhash:7].js' },
  externals:
   { zepto: 'Zepto',
     fastclick: 'FastClick',
     vue: 'Vue',
     'es6-promise': 'Promise',
     fetch: 'fetch' },
  resolve:
   { extensions: [ '', '.jsx', '.js', '.vue', '.less', '.css' ],
     alias:
      { common: 'E:\\workspace\\yujahuampass\\kylin-demo\\src\\common\\',
        pages: 'E:\\workspace\\yujahuampass\\kylin-demo\\src\\pages\\' } },
  module:
   { preLoaders: [],
     loaders:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  vue:
   { preserveWhitespace: true,
     esModule: true,
     loaders:
      { css:
         'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_vue-style-loader@1.0.0@vue-style-loader\\index.js!css-loader?minimize=false&sourceMap',
        postcss:
         'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_vue-style-loader@1.0.0@vue-style-loader\\index.js!css-loader?minimize=false&sourceMap',
        less:
         'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_vue-style-loader@1.0.0@vue-style-loader\\index.js!css-loader?minimize=false&sourceMap!less-loader?sourceMap' },
     postcss: [ [Function] ],
     componentImport: [] },
  postcss: [Function: postcss],
  plugins:
   [ HtmlWebpackChunkPathRelativePlugin {},
     HtmlWebpackInjectPlugin { resourceJs: [Object], resourceCss: {} },
     ProgressPlugin { handler: [Function] },
     DefinePlugin { definitions: [Object] },
     OccurrenceOrderPlugin { preferEntry: undefined },
     HotModuleReplacementPlugin {},
     NoErrorsPlugin {},
     HtmlWebpackPlugin { options: [Object] } ],
  devtool: 'eval-module-source-map',
  entry:
   { index:
      [ 'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_@ali_kylin-build@0.1.49-open01@@ali\\kylin-build\\lib\\build\\project\\server-client',
        './src/pages/index.js' ] },
  watch: true }
[Plugin] [webpack-config] "vue" [Applied]
[Plugin] [webpack-config] "env" [Applied]
[Plugin] [express] "module:./plugin.js" [Applied]
[70.0%] 1/1 build modules                      events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 0.0.0.0:8090
    at Server.setupListenHandle [as _listen2] (net.js:1286:14)
    at listenInCluster (net.js:1334:12)
    at doListen (net.js:1460:7)
    at process._tickCallback (internal/process/next_tick.js:63:19)
    at Function.Module.runMain (internal/modules/cjs/loader.js:744:11)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
Emitted 'error' event at:
    at emitErrorNT (net.js:1313:8)
    at process._tickCallback (internal/process/next_tick.js:63:19)
    [... lines matching original stack trace ...]
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ dev:preview: `kylin build --dev --open index`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the @ dev:preview script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Zz\AppData\Roaming\npm-cache\_logs\2020-10-17T03_25_42_208Z-debug.log
```