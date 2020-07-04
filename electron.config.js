const {VueLoaderPlugin} = require("vue-loader");

console.log(111);
module.exports  = {
    // 添加vue-loader (cli中默认没有添加vue-loader)
    overwriteLoaders: (loaders) => {
        loaders.push({
            test: /\.vue$/,
            exclude: /node_modules/,
            use: {
                loader: 'vue-loader'
            }
        })
        return loaders;
    },
    // 重写插件 添加vue支持
    overwritePlugins: (plugins) => {
        plugins.push(new VueLoaderPlugin())
        return plugins;
    },
    // 支持ts
    ts: (config) => {
        config.options.appendTsxSuffixTo = [/\.vue$/]
        return [config];
    }
}