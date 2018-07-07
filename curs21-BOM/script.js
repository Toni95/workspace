console.log('document', document);
console.log('frames', window.frames);
console.log('title', window.parent.document.title);

console.log('screen', window.screen);
console.log('screenX', window.screenX);
console.log('screenY', window.screenY);
console.log('fullScreen', window.fullScreen);
console.log('orientation', window.orientation);

console.log('innerHeight', window.innerHeight);
console.log('innerWidth', window.innerWidth);
console.log('outerHeight', window.outerHeight);
console.log('outerWidth', window.outerWidth);

console.log('scrollbars', window.scrollbars);
console.log('scrollX', window.scrollX);
console.log('pageXOffset', window.pageXOffset);
console.log('scrollY', window.scrollY);
console.log('pageYOffset',window.pageYOffset);

scrollTo(120, 0);

// window.onunload = function(e) {
//     var confirmationMessage = "window unload 1";
//     e.returnValue = confirmationMessage;
//     return confirmationMessage;
// }

// window.addEventListener("unload", function(e) {
//     var confirmationMessage = "window unload from event listener";
//     e.returnValue = confirmationMessage;
//     return confirmationMessage;
// });

// window.onbeforeunload = function(e) {
//     var confirmationMessage = "window before unload";
//     e.returnValue = confirmationMessage;
//     return confirmationMessage;
// };

setTimeout(() => {
    console.log('after 7 seconds');
    // clearInterval(reminderInterval);
}, 7000);

//console.log('reminder', reminderInterval);

let i = 0;
const reminderInterval = setInterval(() => {
    console.log('every 2 seconds');
    i++;
    if (i == 10) {
     clearInterval(reminderInterval);  
    }
}, 2000);

setTimeout(() => {
    console.log('Hello from set timeout');
}, 0);

console.log('hello');
console.log(window.location);

console.log(history.length);
// history.back();
// history.forward();

// history.go(-1);
// history.go(1);

const stateObj = {current: "next"};
history.pushState(stateObj, "next page", "next.html");
window.onpopstate = function(event) {
    console.log("location: ",
    document.location,
    "state: ",
    JSON.stringify(event.state)
    );
}