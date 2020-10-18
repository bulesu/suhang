require.config({
    paths: {
      "jquery": "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      "parabola": "parabola",
      "index3":"index3"
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

  require(["index3"], function(index3){
    index3.more();
  })