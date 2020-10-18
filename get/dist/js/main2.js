define(["parabola", "jquery", "jquery-cookie"], function(parabola,$) {
        function more(){
            $.ajax({
                url:"./../data/superdeal.json",
              success: function (arr) {
               var str = ``;
               for(var i =0;i<arr.length;i++){
                   str +=`<li class="like-li">
                   <a href="index2.html" target="_blank" class="like-a">
                       <img src="${arr[i].GoodsImgUrl}" alt="">
                       <p>${arr[i].GoodsName}</p>
                   </a>
                   <p class="p-color">￥${arr[i].Price}</p>
               </li>`;
               }
               $(str).appendTo($(".mod-ul"))
              },
              error: function (msg) {
                console.log(msg);
              },
            });
          }
          function morepic(){
            $.ajax({
                url:"./../data/data4.json",
              success: function (a) {
               var sal = ``;
               for(var i =0;i<a.length;i++){
                   sal+=`<img src="${a[i].img}">`
               }
               $(sal).appendTo($(".mod-right"))
              },
              error: function (msg) {
                console.log(msg);
              },
            });
          }
          //放大镜
          function magnify(){
            $('#small').mouseenter(function(){
                $("#mark,#big").show();
            })
            .mouseleave(function(){
                $('#mark,#big').hide();
            })
            .mousemove(function(ev){
                var x = ev.pageX, 
                y = ev.pageY; 
                    var l =x - $(this).offset().left -50;
                    var t =y - $(this).offset().top -50;
                    var n = y-$("#mark").height()/2,
                    m=x-$("#mark").width()/2;
                    n = Math.max(290,n);
                    n = Math.min(n,500);
                    m = Math.max(350,m);
                    m = Math.min(m,665);
                    $('#mark').offset({ 
                        top: n, 
                        left:m
                      }); 
                    $("#big-img").css({
                        left:-2*l,
                        top:-2 * t
                    })
                })
          }
          function pass(){
            

          }


    return {
        more,
        morepic,
        magnify,
        pass

      };
    });