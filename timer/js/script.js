var interval = setInterval(
 (function(){
  var time = 5;
  return function(){
   console.log(time);
   time--;
   if (time === 0) {
    clearInterval(interval);
	window.location.replace("http://www.google.com");
   }
  }
 })()
 , 1000);