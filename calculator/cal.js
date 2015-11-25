var  calculate = 0 , numshow = "0" , num1 , result, num; 
var  operate = 0; //判断输入状态的标志，来控制何时清屏:输入运算符时，下一次输入数据就会清屏。

//获取及更新屏幕数字
function show(num){
	var str = String(document.getElementsByName("numScreen")[0].value);//获得屏幕上显示的数字。
	if (str == "0" || operate !=0) {//再想想
		str = "";//若获得的屏幕上的数字为零(起始状态)；或者对数字进行了操作，则进行清屏。
		operate = 0;//清屏后操作符置0
	}
	str = str + String(num);
	document.getElementsByName("numScreen")[0].value = str;
}

//AC
function allClear(){
	document.getElementsByName("numScreen")[0].value = 0;
	num1 = 0 , result = null , num = null , calculate = 0, operate = 0 , numshow = "0"; 
}

//取反
function reverse(){
	operate = 1;
	equal();
	num = document.getElementsByName("numScreen")[0].value;
	num =- Number(num);
	document.getElementsByName("numScreen")[0].value = num;
}

//百分比
function percentage(){
	operate = 1;
	equal();
	num = document.getElementsByName("numScreen")[0].value;
	num = Number(num) * 0.01;
	document.getElementsByName("numScreen")[0].value = num;

}

function plus(){
	operate = 1;
	equal();
	calculate = 1;//将运算符置于等号操作后，每按一个运算符，都是计算上一个运算并显示。
}

function minus(){
	operate = 1;
	equal();
	calculate = 2;
}

function times(){
	operate = 1;
	equal();
	calculate = 3;
}

function devide(){
	operate = 1;
	equal();
	calculate = 4;
}

//=
function equal(){
	operate = 1;
	num1 = document.getElementsByName("numScreen")[0].value;
	if (result == null) {
		result = Number(num1);
	}
	else{
		switch(calculate){
			case 1:
			result = result + Number(num1);
			break;
			case 2:
			result = result - Number(num1);
			break;
			case 3:
			result = result * Number(num1);
			break;
			case 4:
			result = result / Number(num1);
			break;
			default:
			alert("Yeah!");
		}
	}
	document.getElementsByName("numScreen")[0].value = result;
}

$(function(){
  var d="<div class='snow'>❅<div>"
			setInterval(function(){
				var f=$(document).width();
				var e=Math.random()*f-100;
				var o=0.3+Math.random();
				var fon=10+Math.random()*30;
				var l = e - 100 + 200 * Math.random();
				var k=2000 + 5000 * Math.random();
				$(d).clone().appendTo(".snowbg").css({
					left:e+"px",
					opacity:o,
					"font-size":fon,
				}).animate({
				  top:"400px",
					left:l+"px",
					opacity:0.1,
				},k,"linear",function(){$(this).remove()})
			},200)
})