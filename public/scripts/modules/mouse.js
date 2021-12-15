export function getMousePos(evt, canvas) {
    return {
        x: evt.offsetX * canvas.width / canvas.clientWidth,
        y: evt.offsetY * canvas.height / canvas.clientHeight
    };
}