/**
 * Created by Administrator on 2017/10/21 0021.
 */
$(function(){
  $.slideshow();
})
$.extend({ slideshow:function () {
  var slideshow=document.getElementById("box");
   var imgs=slideshow.getElementsByTagName("img"), //�õ�ͼƬ��
    current=0; //currentΪ��ǰ��Ծ��ͼƬ���

  function slideOff() {
    imgs[current].className="off"; //ͼƬ����
  }
  function slideOn() {
    imgs[current].className="active"; //ͼƬ����
  }
  function first(){
    imgs[0].className="active";//��һ�μ��ص�һ��ͼ
  }
  function changeSlide() { //�л�ͼƬ�ĺ���
    slideOff(); //ͼƬ����
    current++; //����1
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
    slideOn(); //ͼƬ����
  }
  //��һ��ͼ�ֲ�
  var f = first();
  //ÿ5s����changeSlide��������ͼƬ�ֲ�
  var slideon=setInterval(changeSlide,5000);
// 		   slideshow.onmouseover=function () {//���������ʱ����ֲ��¼�
// 			  clearInterval(slideon);
// 			}
// 			slideshow.onmouseout=function () {//������Ƴ�ʱ���¿�ʼ�ֲ��¼�
// 			  slideon=setInterval(changeSlide,5000);
// 			}
}
});