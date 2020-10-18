define(["parabola", "jquery", "jquery-cookie"], function (parabola, $) {
    function download() {
      $.ajax({
          url:"./../data/data.json",
        success: function (arr) {
         var str = ``;
         for(var i =0;i<arr.length;i++){
             str +=` <li class="ap-li"><a href="javascript"><img src="${arr[i].img}" alt="">${arr[i].tittle}</a></li>`;
         }
         $(str).appendTo($("#appear-ul"))
         $("#form-li").onmouseenter
        },
        error: function (msg) {
          console.log(msg);
        },
      });
    }
    function move(){
        $(function(){

            $(".form-li").mouseenter(function(){
                $("#ar").css("display","block")
            })

            $(".form-li").mouseleave(function(){
                    $("#ar").css("display","none")
            })
            $("#ar").mouseenter(function(){
                $("#ar").css("display","block")
            })
            $("#ar").mouseleave(function(){
                $("#ar").css("display","none")
            })
        })
    }

    function time(){
    var stopTime = new Date(2020,10,0,0,0,0);
    var nowTime = new Date();
    var jianGe = (stopTime-nowTime)/1000;


    var day = Math.floor(jianGe/60/60/24);
    var hour = Math.floor(jianGe/60/60%24);
    var min = Math.floor(jianGe/60%60);
    var sec = Math.floor(jianGe%60);
    var showTime = day+'天'+hour+'小时'+min+'分钟'+sec+'秒';
    document.getElementById('time').innerText = showTime;


    //定时器：每隔多长事件执行一次某函数
    //setInterval(func,ms)
    var timer = setInterval(function () {
        var nowTime = new Date();
        var jianGe = (stopTime-nowTime)/1000;


        var day = Math.floor(jianGe/60/60/24);
        var hour = Math.floor(jianGe/60/60%24);
        var min = Math.floor(jianGe/60%60);
        var sec = Math.floor(jianGe%60);
        var showTime = day+'天'+hour+'小时'+min+'分钟'+sec+'秒';


        document.getElementById('time').innerText = showTime;


        if(day==0&&hour==0&&min==0&&sec==0){
            //关闭定时器
            clearInterval(timer);
        }


    },1000);

    }

    function more(){
        $.ajax({
            url:"./../data/superdeal.json",
          success: function (arr) {
           var str = ``;
           for(var i =0;i<arr.length;i++){
               str +=`<li class="like-li">
               <a class="like-a" href = "index2.html" target="_blank">
                   <img src="${arr[i].GoodsImgUrl}" alt="">
                   <p>${arr[i].GoodsName}</p>
               </div>
               <p class="p-color">￥${arr[i].Price}</p>
           </li>`;
           }
           $(str).appendTo($(".like-ul"))
          },
          error: function (msg) {
            console.log(msg);
          },
        });
      }
    
      function clickmore(){
          var sum = 1000;
        $(".lk-more").click(function(){
            sum+=500;
            $(".like-box").css("height",sum )
        })
      }
      //轮播图
      function banner(){
        $(function(){
          var oUl = $(".main1-banner").find("ul");
          var li = $(".main1-ul").find("li");
          var iNow = 0;
          var timer = null;
  
  
          timer = setInterval(function(){
            iNow++;
            tab();
          }, 2000);
  
          $(".main1-banner").mouseenter(function(){
            clearInterval(timer);
          })
  
          $(".main1-banner").mouseleave(function(){
            timer = setInterval(function(){
              iNow++;
              tab();
            }, 2000);
          })
          function tab(){
            oUl.animate({left: iNow * -430}, 1000, function(){
              if(iNow == 5){
                iNow = 0;
                oUl.css("left", -430);
              }
            });
          }
        })
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
        download,
        move,
        time,
        more,
        clickmore,
        banner
      };
    });