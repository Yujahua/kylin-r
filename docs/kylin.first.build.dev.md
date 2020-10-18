```log
 cnpm run build:debug

> @ build:debug E:\workspace\yujahuampass\kylin-demo
> rimraf ./www/ && kylin build --no-compress

[Config] using config "E:\workspace\yujahuampass\kylin-demo/package.json"."kylinApp"
[Plugin] [loading] "module:./plugin.js"
[Plugin] [loading] "vue"
[Plugin] [loading] "resource"
[Resource] "vue"=>"global['Vue']": (js: 'https://gw.alipayobjects.com/as/g/h5-lib/vue/2.5.13/vue.min.js')
[Resource] "fastclick"=>"global['FastClick']": (js: 'https://gw.alipayobjects.com/as/g/luna-component/luna-fastclick/0.3.1/index.js')
[Plugin] [loading] "env"
[Plugin] [loading] "mock"
[Plugin] [resource] "vue" [Applied]
[Plugin] [resource] "resource" [Applied]

[Build] NODE_ENV = production
[Build] nebulaTarget = common
[Build] assetsRoot = www
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
   { path: 'www',
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
        [Object] ] },
  vue:
   { preserveWhitespace: true,
     esModule: true,
     loaders:
      { css:
         'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_extract-text-webpack-plugin@1.0.1@extract-text-webpack-plugin\\loader.js?{"omit":1,"extract":true,"remove":true,"publicPath":"../"}!E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_vue-style-loader@1.0.0@vue-style-loader\\index.js!css-loader?minimize=false',
        postcss:
         'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_extract-text-webpack-plugin@1.0.1@extract-text-webpack-plugin\\loader.js?{"omit":1,"extract":true,"remove":true,"publicPath":"../"}!E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_vue-style-loader@1.0.0@vue-style-loader\\index.js!css-loader?minimize=false',
        less:
         'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_extract-text-webpack-plugin@1.0.1@extract-text-webpack-plugin\\loader.js?{"omit":1,"extract":true,"remove":true,"publicPath":"../"}!E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_vue-style-loader@1.0.0@vue-style-loader\\index.js!css-loader?minimize=false!less-loader' },
     postcss: [ [Function], [Function] ],
     componentImport: [] },
  postcss: [Function: postcss],
  plugins:
   [ HtmlWebpackChunkPathRelativePlugin {},
     HtmlWebpackInjectPlugin { resourceJs: [Object], resourceCss: {} },
     ProgressPlugin { handler: [Function] },
     DefinePlugin { definitions: [Object] },
     OccurrenceOrderPlugin { preferEntry: undefined },
     ExtractTextPlugin { filename: 'css/[name].[hash:7].css', options: {}, id: 1 },
     CommonsChunkPlugin {
       chunkNames: 'common',
       filenameTemplate: undefined,
       minChunks: undefined,
       selectedChunks: undefined,
       async: undefined,
       minSize: undefined,
       ident:
        'E:\\workspace\\yujahuampass\\kylin-demo\\node_modules\\_webpack@1.15.0@webpack\\lib\\optimize\\CommonsChunkPlugin.js0' },
     HtmlWebpackPlugin { options: [Object] } ],
  devtool: false,
  entry: { index: [ './src/pages/index.js' ] } }
[Plugin] [webpack-config] "vue" [Applied]
[Plugin] [webpack-config] "env" [Applied]
[73.0%] optimize
[95.0%] emit
[Resource] index: https://gw.alipayobjects.com/as/g/luna-component/luna-fastclick/0.3.1/index.js
[Resource] index: https://gw.alipayobjects.com/as/g/h5-lib/vue/2.5.13/vue.min.js
[100.0%]
Hash: 8bdec6305a52c0da9027
Version: webpack 1.15.0
Time: 5816ms
                Asset     Size  Chunks             Chunk Names
 js/common.8bdec63.js  3.63 kB       0  [emitted]  common
  js/index.8bdec63.js   206 kB    1, 0  [emitted]  index
css/index.8bdec63.css   106 kB    1, 0  [emitted]  index
           index.html  1.89 kB          [emitted]
```
