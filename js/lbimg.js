/**
 * Created by Administrator on 2017/10/21 0021.
 */
$(function(){
  $.slideshow();
})
$.extend({ slideshow:function () {
  var slideshow=document.getElementById("box");
   var imgs=slideshow.getElementsByTagName("img"), //得到图片们
    current=0; //current为当前活跃的图片编号

  function slideOff() {
    imgs[current].className="off"; //图片淡出
  }
  function slideOn() {
    imgs[current].className="active"; //图片淡入
  }
  function first(){
    imgs[0].className="active";//第一次加载第一张图
  }
  function changeSlide() { //切换图片的函数
    slideOff(); //图片淡出
    current++; //自增1
    if(current>=imgs.length){
      current=0;
      imgs[3].className="";
    }else if(current==1){
      imgs[4].className="";
    }else if(current==2){
      imgs[0].className="";
    }else if(current==3){
      imgs[1].className="";
    }else if(current==4){
      imgs[2].className="";
    }
    slideOn(); //图片淡入
  }
  //第一张图轮播
  var f = first();
  //每5s调用changeSlide函数进行图片轮播
  var slideon=setInterval(changeSlide,5000);
// 		   slideshow.onmouseover=function () {//当鼠标移入时清除轮播事件
// 			  clearInterval(slideon);
// 			}
// 			slideshow.onmouseout=function () {//当鼠标移出时重新开始轮播事件
// 			  slideon=setInterval(changeSlide,5000);
// 			}
}
});