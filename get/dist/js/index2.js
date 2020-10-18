require.config({
    paths: {
      "jquery": "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      "parabola": "parabola",
      "main2":"main2"
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

  require(["main2"], function(main2){
    main2.more();
    main2.morepic();
    main2.magnify();
    main2.pass();
  })