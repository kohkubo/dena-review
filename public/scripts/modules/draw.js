
export function drawDisc(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, Math.PI * 2.0);
    ctx.fill();
}

export function drawDiscStoke(ctx, x, y, r, color, fillColor, lineWidth) {
    ctx.beginPath();
    drawDisc(ctx, x, y, r, fillColor);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

export function drawBoard(ctx, x, y, w, h, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    ctx.stroke();
}

function drawPositionGuide(ctx) {
    const PADDING = 15;
    for (let i = 0; i < 7; i++) {
        drawDisc(ctx, 50 + (i * 100) + PADDING, 50, 20, '#F2F2F2');
    }
}

export function topDiscAnimation(ctx, canvas, xPos, color, endFlg) {
    const PADDING = 15;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPositionGuide(ctx);
    if (endFlg === false) {
        let x = Math.min(parseInt(xPos / 100), 6);
        drawDisc(ctx, x * 100 + 50 + PADDING, 50, 35, color);
    }
}
