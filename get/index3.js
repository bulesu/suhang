console.log("加载成功")
define(["parabola", "jquery", "jquery-cookie"], function(parabola,$) {
    function more(){

        $.ajax({
            url:"./../data/superdeal.json",
          success: function (arr) {
           var str = ``;
           for(var i =0;i<arr.length;i++){
               str +=`<div class="data-bd"> 
               <div class="data-1">
               <img src="${arr[i].GoodsImgUrl}" alt="">
           </div>
           <div class="data-text">
               ${arr[i].GoodsName}
           </div>
           <div class="data-pc">
               ${arr[i].Price}
           </div>
           <div class="data-num">
               1
           </div>
           <div class="data-pic">
           ${arr[i].Price}
           </div>
           <button class="data-rd">
               删除
           </button></div>`;
           }
           $(str).appendTo($(".data"))
          },
          error: function (msg) {
            console.log(msg);
          },
        });
      }
      //侧面显现二维码
      $(".right-li3").mouseenter(function(){
        $(".li3-ma").show()
      })
      $(".right-li3").mouseleave(function(){
        $(".li3-ma").hide()
      })
      //返回顶部
      $(".back").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    })



    return {
      more
      };
    });