const submitbutton=document.getElementById("submit");
console.log(submitbutton);
submitbutton.onclick=function myfunction(){
var input=document.getElementById("textBox").value;
location.href=`https://www.wikipedia.org/wiki/${input}`
}