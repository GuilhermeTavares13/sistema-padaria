let draggableElem = document.getElementsByClassName("dragbox")[0];

let initialX = 0, initialY = 0;
let moveElement = false;

let events = {
    
    ctrlKey: {
        down: "keydown"
    },

    shiftKey: {
        down: "keydown"
    },

    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },

    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    }
};

let deviceType = "";

const isTouchDevice = () => {
    try {
        document.createEvent("touchEvent");
        deviceType = "touch";
        return true;
    } 
    catch(e) {
        deviceType = "mouse";
        return false; 
    }
}

isTouchDevice();

draggableElem.addEventListener(events[deviceType].down, (e) => {
    if(e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        moveElement = true;
        draggableElem.style.cursor = 'move';
    }
});

draggableElem.addEventListener(events[deviceType].move, (e) => {
    if (moveElement) {
        e.preventDefault();

        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

        draggableElem.style.top = draggableElem.offsetTop - (initialY - newY) + "px";
        draggableElem.style.left = draggableElem.offsetLeft - (initialX - newX) + "px";
    
        initialX = newX;
        initialY = newY;
    }
});
  

draggableElem.addEventListener(events[deviceType].up,(stopMovement = (e) => {
    moveElement = false;
    draggableElem.style.cursor = 'default';
}));

draggableElem.addEventListener("mouseLeave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
    draggableElem.style.cursor = 'default';
});
