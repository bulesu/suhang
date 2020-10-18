console.log("ss")
define(["jquery", "jquery-cookie"], function (parabola, $) {
function bannerrr(){
    const oBanner = $(".main-banner");
        const oUl = $(".main-ul");
        const aBtns = $("main-ul li");
        const LeftANDRightBtn = document.querySelectorAll(".leftRightTabs a");
        let iNow = 1; 
        let timer = null;
        let isRunning = false; 

        
        timerInner();
        for (var i = 0; i < aBtns.length; i++) {
          aBtns[i].index = i;
          aBtns[i].onclick = function () {
            iNow = this.index + 1;
            tab();
          };
        }
        function timerInner() {
          timer = setInterval(function () {
            iNow++;
            tab();
          }, 2000);
        }
        function tab() {
          for (var i = 0; i < aBtns.length; i++) {
            aBtns[i].className = "";
          }

          if (iNow == aBtns.length + 1) {
            aBtns[0].className = "active";
          } else if (iNow == 0) {
              aBtns[aBtns.length - 1].className = "active";
          }
           else {
            aBtns[iNow - 1].className = "active";
          }

          isRunning = true;
          startMove(oUl, { left: iNow * -430 }, function () {
            if (iNow == aBtns.length + 1) {
              iNow = 1;
              oUl.style.left = "-430px";
            } else if (iNow == 0) {
                iNow = 5;
              oUl.style.left = iNow * -430 + "px";
            }
            isRunning = false;
          });
        }
        oBanner.onmouseenter = function () {
          clearInterval(timer);
        };
        oBanner.onmouseleave = function () {
          timerInner();
        };
        
       
        LeftANDRightBtn[0].onclick = function () {
          if (!isRunning) {
            iNow--;
            tab();
          }
          return false;
        };

        LeftANDRightBtn[1].onclick = function () {
          if (!isRunning) {
            iNow++;
            tab();
          }
          return false;
        };
}



function starmove(node, cssObj, complete) {
    var node = ``
  clearInterval(node.timer);
  node.timer = setInterval(function () {
      var isEnd = true; //假设都到达目的值了
      for (var attr in cssObj) {

          var iTarget = cssObj[attr];

          var iCur = null;

          if (attr == "opacity") {
              iCur = parseInt(parseFloat(getStyle(node, attr)) * 100);
          } else {
              iCur = parseInt(getStyle(node, attr));
          }

          var speed = (iTarget - iCur) / 8;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

          //node.style["width"]
          if (attr == "opacity") {
              iCur += speed;
              node.style.opacity = iCur / 100;
              node.style.filter = "alpha(opacity=" + iCur + ")";
          } else {
              node.style[attr] = iCur + speed + 'px';
          }

          if(iTarget != iCur){
              isEnd = false;
          }
      }
      //定时器关闭的条件是，所有动画都达到目的值
      if(isEnd){
          clearInterval(node.timer);
          if(complete){
              complete.call(node);
          }
      }
  }, 30);
}
return {
    starmove,
    bannerrr
  };


//获取当前有效样式的浏览器兼容
function getStyle(node, cssAttr) {
    if (node.currentStyle) {
        return node.currentStyle[cssAttr];
    } else {
        return getComputedStyle(node)[cssAttr];
    }
  }

});


