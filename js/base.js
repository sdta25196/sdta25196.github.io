/**
 * Created by Administrator on 2017/10/25 0025.
 */
//点击事件用来显示对应的DIV块
function choose(event) {
  $(".hiden_line").css({"height":"0px","background":""});
  $(event).siblings(".hiden_line").css({"height":"5px","background":"#45BDCE"});
  $("."+$(event).attr("id")).show().siblings().hide();
  body_hieght();
}
body_hieght();
//获得页面body的高度 用来消除定位所带来的大片空白
function body_hieght() {
  $(".ex_body").css("height",$(".context").height()+50);
}