function findPosition(){
	var picbox = document.getElementsByClassName("picbox");
	var container = document.getElementById("container");
	var banner = document.getElementById("banner");
	var colNum = parseInt(document.documentElement.clientWidth/picbox[0].offsetWidth);
	console.log(colNum);//检验
	container.style.width = (picbox[0].offsetWidth) * colNum + "px";//用js的方法获取每个图片的宽度，设置container宽度，从而拖动浏览器不会改变float每行图片列数。2*5是margin。
	console.log(container.style.width);//检验
	var height = [];//用来记录四列总高度变化
	for (var i = 0; i < colNum; i++) {
		height[i] = picbox[i].offsetHeight + banner.offsetHeight;//修改。加入banner后调整高度数组。
	}
	console.log(height);//检验
	var min = height[minHeight(height)];
	console.log(min);//检验
	var heightColNum = minHeight(height);
	for (var i = 0; i < picbox.length; i++) {
		heightColNum = minHeight(height);
		min = height[heightColNum];
		if(i >= colNum){
			picbox[i].style.position = "absolute";
			picbox[i].style.top = min + "px";
			picbox[i].style.left = minHeight(height) * (picbox[i].offsetWidth ) + "px";
			height[heightColNum] = picbox[i].offsetHeight + min;
			console.log(picbox[i].style.top,picbox[i].style.left);
		}
		console.log(min);
		console.log(height);
		console.log(document.documentElement.clientHeight);
	}

}

function addPic(){
	var picbox = document.getElementsByClassName("picbox");
	var lastpic = picbox[picbox.length-1];
	var lastheight = lastpic.offsetTop;
	var scrollheight = document.body.scrollTop;//竟然！！！不能用documentelement！！！要用body返回文本根目录！！！
	console.log(lastheight);
	console.log(scrollheight);
	if(document.documentElement.clientHeight + scrollheight > lastheight)
	{
		console.log("onload pic");
		return true;
	}
}

function minHeight(picHeightArray){
	var minHeight = Math.min.apply(Math,picHeightArray);//这个math！！终于改对了。。。
	return picHeightArray.indexOf(minHeight);
}

window.onload = function(){
	findPosition();
	window.onscroll = function(){
		var pic_onload = [{
		"picture":[{"src":"img/a.jpg"},{"src":"img/k.jpg"},{"src":"img/c.jpg"},{"src":"img/k.jpg"},{"src":"img/e.jpg"},{"src":"img/f.jpg"}]
	}];
		if (addPic()) {
			var addChildToDoc = document.getElementById("container");
			for(var i = 0;i < pic_onload[0].picture.length;i++){
				var addChild1 = document.createElement("div");
				addChildToDoc.appendChild(addChild1);
			    addChild1.className = "picbox";
			    var addChild2 = document.createElement("div");
			    addChild1.appendChild(addChild2);
			    addChild2.className = "pic";
			    var addImg = document.createElement("img");
			    addChild2.appendChild(addImg);
			    addImg.src = pic_onload[0].picture[i].src; 
			}
			findPosition();
		};
	}
}

