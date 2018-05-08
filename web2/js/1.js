function ShowPic(a){
  var newaddress=a.getAttribute("href");
  document.getElementById("pic").src=newaddress;
  var text=a.getAttribute("title");
  document.getElementById("text").innerHTML=text;
}
window.onload = prepareGallery;
function prepareGallery(){
    var jss=document.getElementById("js");
    var links=jss.getElementsByTagName("a");
    for(var i=0; i<links.length;i++){
        links[i].onclick=function(){
            ShowPic(this);
            return false;
        }
    }
}


