```log
cnpm run dev:watch

> @ dev:watch E:\workspace\yujahuampass\kylin-demo
> kylin build --watch --no-prod --hot --no-compress

[Config] using config "E:\workspace\yujahuampass\kylin-demo/package.json"."kylinApp"
[Warn] --hot should be used with --server && --no-prod
[Plugin] [loading] "module:./plugin.js"
[Plugin] [loading] "vue"
[Plugin] [loading] "resource"
[Resource] "vue"=>"global['Vue']": (js: 'https://gw.alipayobjects.com/as/g/h5-lib/vue/2.5.13/vue.min.js')
[Resource] "fastclick"=>"global['FastClick']": (js: 'https://gw.alipayobjects.com/as/g/luna-component/luna-fastclick/0.3.1/index.js')
[Plugin] [loading] "env"
[Plugin] [loading] "mock"
[Plugin] [resource] "vue" [Applied]
[Plugin] [resource] "resource" [Applied]

[Build] NODE_ENV = development
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
     NoErrorsPlugin {},
     HtmlWebpackPlugin { options: [Object] } ],
  devtool: 'eval-module-source-map',
  entry: { index: [ './src/pages/index.js' ] } }
[Plugin] [webpack-config] "vue" [Applied]
[Plugin] [webpack-config] "env" [Applied]
[73.0%] optimize
[95.0%] emit
[Resource] index: https://gw.alipayobjects.com/as/g/luna-component/luna-fastclick/0.3.1/index.js
[Resource] index: https://gw.alipayobjects.com/as/g/h5-lib/vue/2.5.13/vue.min.js
[100.0%]
Hash: 734e0203a9561ab30e2c
Version: webpack 1.15.0
Time: 5057ms
              Asset     Size  Chunks             Chunk Names
js/index.734e020.js  1.28 MB       0  [emitted]  index
         index.html  1.84 kB          [emitted]
```