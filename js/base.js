/**
 * Created by Administrator on 2017/10/25 0025.
 */
//����¼�������ʾ��Ӧ��DIV��
function choose(event) {
  $(".hiden_line").css({"height":"0px","background":""});
  $(event).siblings(".hiden_line").css({"height":"5px","background":"#45BDCE"});
  $("."+$(event).attr("id")).show().siblings().hide();
  body_hieght();
}
body_hieght();
//���ҳ��body�ĸ߶� ����������λ�������Ĵ�Ƭ�հ�
function body_hieght() {
  $(".ex_body").css("height",$(".context").height()+50);
}