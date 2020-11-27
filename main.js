// Getting the mouse cursor
const mouseCursor = document.querySelector(".cursor");
const mouseCursorFollower = document.querySelector(".cursor-follower");

// Making the cursor mover function
const cursorMover = (e) => {
  gsap.to(mouseCursor, {
    duration: 0,
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to(mouseCursorFollower, {
    duration: 0.5,
    x: e.clientX,
    y: e.clientY,
  });
};

window.addEventListener("mousemove", cursorMover);
