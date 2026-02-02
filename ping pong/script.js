document.addEventListener("keydown", (e) => {
    if (e.key === "w" && paddleLeftY > 0) paddleLeftY -= 20;
    if (e.key === "s" && paddleLeftY < 320) paddleLeftY += 20;

    if (e.key === "ArrowUp" && paddleRightY > 0) paddleRightY -= 20;
    if (e.key === "ArrowDown" && paddleRightY < 320) paddleRightY += 20;

    paddleLeft.setAttribute("y", paddleLeftY);
    paddleRight.setAttribute("y", paddleRightY);
});