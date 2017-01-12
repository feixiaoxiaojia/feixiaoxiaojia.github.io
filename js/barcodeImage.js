// JavaScript Document
function  showImg(id){
	var clientHeight=document.documentElement.clientHeight;//可见区域的高度
	var item = document.getElementsByClassName("header-nav")[0];	
	var itemTop=item.offsetTop+item.offsetHeight;
	//var itemTop=item.offsetTop;	
	document.getElementById(id).style.display='block';
	var imgItem=document.getElementById(id);
	var imgOffset=imgItem.offsetHeight;	
	console.log(clientHeight+","+itemTop);
	console.log(imgOffset);
	console.log(clientHeight-itemTop);
	if(imgOffset>clientHeight-itemTop){
		document.getElementById(id).style.position="fixed";
		document.getElementById(id).style.bottom="10px";
		var itemLeft=item.offsetLeft;
		document.getElementById(id).style.left=itemLeft;
	}
	else{
		document.getElementById(id).style.position="static";	
	}
}
function hideImg(id){
	document.getElementById(id).style.display='none';
}