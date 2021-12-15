import {
    drawBoard,
    drawDisc,
} from './draw.js';

const DISC_RADIUS = 40.0;
const INIT_DISC_RADIUS = 25.0;

function randomRange(min, max) {
    return min + (max - min) * Math.random();
}

function baseRandom() {
    return Math.random() - 0.5;
}

export class Disc {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.r = INIT_DISC_RADIUS;
        this.defX = x;
        this.defY = y;
        this.defR = DISC_RADIUS;
        this.color = color;
        this.eyeOpen = Math.random() < 0.5;
        this.eyeX0 = 0.0;
        this.eyeY0 = 0.0;
        this.eyeX1 = 0.0;
        this.eyeY1 = 0.0;
        this.tgtEyeX0 = 0.7 * baseRandom();
        this.tgtEyeY0 = 0.7 * baseRandom();
        this.tgtEyeX1 = 0.0;
        this.tgtEyeY1 = 0.0;
    }

    reqularMove(ctx) {
        this.drawDiscObj(ctx);
        this.drawEye(ctx);
        if (Math.random() < 0.08) {
            this.movingEye();
        }
        if (this.r < this.defR) {
            this.r += 5.0;
        }
        let eyeA = 0.1;
        this.eyeX0 = (1.0 - eyeA) * this.eyeX0 + eyeA * (this.tgtEyeX0 - this.eyeX0);
        this.eyeY0 = (1.0 - eyeA) * this.eyeY0 + eyeA * (this.tgtEyeY0 - this.eyeY0);
        this.eyeX1 = (1.0 - eyeA) * this.eyeX1 + eyeA * (this.tgtEyeX1 - this.eyeX1);
        this.eyeY1 = (1.0 - eyeA) * this.eyeY1 + eyeA * (this.tgtEyeY1 - this.eyeY1);
    }

    drawDiscObj(ctx) {
        drawDisc(ctx, this.x, this.y, this.r, this.color);
    }

    drawEye(ctx) {
        if (!this.eyeOpen)
            return;
        var ex = this.x + this.eyeX0 * this.r;
        var ey = this.y + this.eyeY0 * this.r;
        drawDisc(ctx, ex, ey, this.r * 0.5, "white");
        ex += this.eyeX1 * this.r * 1.25;
        ey += this.eyeY1 * this.r * 1.25;
        if (this.color === "blue") {
            drawDisc(ctx, ex, ey, this.r * 0.24, "#0068b7");
            drawDisc(ctx, ex - 2.0, ey - 2.0, this.r * 0.09, "white");
        } else {
            drawDisc(ctx, ex, ey, this.r * 0.24, "#0063ad");
        }
    }

    movingEye() {
        this.tgtEyeX1 = 0.7 * baseRandom();
        this.tgtEyeY1 = 0.7 * baseRandom();
        if (Math.random() < 0.3) {
            this.tgtEyeX0 = this.tgtEyeX1 * 0.2;
            this.tgtEyeY0 = this.tgtEyeY1 * 0.2;
        }
    }
}

export class DiscPieces {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.vx = 30.0 * baseRandom();
        this.vy = 30.0 * baseRandom();
        this.r = 30.0;
    }

    crash(ctx) {
        this.vx *= 0.9;
        this.vy *= 0.9;
        this.x += this.vx;
        this.y += this.vy;
        this.r -= 1.0;
        if (this.r > 0.0) {
            drawDisc(ctx, this.x, this.y, this.r, this.color)
        }
    }
}
