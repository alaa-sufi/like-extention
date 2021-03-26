//will run automatic in https://m.facebook.com/SufiDesigns.MR/
window.onload= function(){
  var info = document.createElement("div");
  info.className="info";
  info.createTextNode("start");
  document.body.style.color="red";
  document.body.style.position="fixed";
  var infoElement =document.querySelector(".info");
//deleete img & videoes on scroll
 window.onscroll = function(){
   document
   .querySelectorAll(".img")
   .forEach((x) => (x.style.backgroundImage = ""));
   document.querySelectorAll("video").forEach((x) => (x.src = ""));
 };

//scroll Down & then likefunc
var scrollDown = function (times ,likefunc) {
   var scroll = 0;
   var scrolltime = setInterval(function () {
     if (scroll < times) {
       window.scrollTo(0, document.body.scrollHeight);
       console.log(scroll + 1, "scroll");
       scroll++;
     } else {
       clearInterval(scrolltime);
       console.log("scroll done");
       likefunc(function () {
         //open home page
           console.log("finish.................")});
     }
   }, 1000);
 };
 //c@ll scroll Down & then likefunc
 scrollDown(100,function (logoff) {
   var likearray = document.querySelectorAll("[aria-pressed='false']");
   
   console.log("will like ",likearray.length);
   infoElement.innerHTML="will like "+likearray.length;
   var time = 0;
   var interval = setInterval(function () {
     if (time < likearray.length) {
       likearray[time].click();
       console.log(time + 1, "like");
       time++;
     } else {
       clearInterval(interval);
       console.log("like done");
       infoElement.innerHTML="like done "+likearray.length;
       logoff()
     }
   }, 2000);
 });

};
