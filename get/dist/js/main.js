//一个.html页面独享一个js，配置要引入的js文件
require.config({
  paths: {
    "jquery": "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    "parabola": "parabola",
    "index": "index",
    "banner": "banner"
  },
  shim: {
    //设置依赖关系
    "jquery-cookie": ['jquery'],
    //parabola 不遵从amd规范
    parabola: {
      exports: "_"
    }
  }
})


require(["index","banner"], function(index, banner){
  index.download();
  index.move();
  index.time();
  index.more();
  index.clickmore();
  index.banner();
})