const darkRed = 'rgba(0, 0, 0, .25)' // '#c6303e';

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

class Delta {
    static deltaTime = 0;
    static lastDelta = performance.now();
}

class Sprite {
    x = 0;
    y = 0;
    id = uuidv4();
    
    constructor(
        x = 0,
        y = 0,
    ) {
        this.x = x;
        this.y = y;
    }
    
    update() {
        const speed = 70;
        // move down and to the left
        this.x -= speed * Delta.deltaTime;
        this.y += speed * Delta.deltaTime;
    }
}

class RingSprite extends Sprite {
    constructor(x, y) {
        super(x, y);
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x + 24, this.y + 24, 32, 0, 2 * Math.PI);
        ctx.strokeStyle = darkRed;
        ctx.lineWidth = 16;
        ctx.stroke();
    }
}

class PlusSprite extends Sprite {
    constructor(x, y) {
        super(x, y);
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x - 32, this.y);
        ctx.lineTo(this.x + 32, this.y);
        ctx.moveTo(this.x, this.y - 32);
        ctx.lineTo(this.x, this.y + 32);
        ctx.strokeStyle = darkRed;
        ctx.lineWidth = 16;
        ctx.stroke();
    }
}

class SquareSprite extends Sprite {
    constructor(x, y) {
        super(x, y);
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x - 28, this.y - 28);
        ctx.lineTo(this.x + 28, this.y - 28);
        ctx.lineTo(this.x + 28, this.y + 28);
        ctx.lineTo(this.x - 28, this.y + 28);
        ctx.lineTo(this.x - 28, this.y - 28);
        ctx.strokeStyle = darkRed;
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 16;
        ctx.closePath();
        ctx.stroke();
    }
}

class TriangleSprite extends Sprite {
    constructor(x, y) {
        super(x, y);
    }
    
    draw(ctx) {
        const side = 48;
        const h = side * (Math.sqrt(3)/2);
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.moveTo(0, -h / 2);
        ctx.lineTo(-side / 2, h / 2);
        ctx.lineTo(side / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.strokeStyle = darkRed;
        ctx.lineWidth = 16;
        ctx.lineJoin = 'miter';
        ctx.closePath();
        ctx.stroke();
        ctx.translate(-this.x, -this.y);
    }
}

class CrossSprite extends Sprite {
    constructor(x, y) {
        super(x, y);
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x - 24, this.y - 24);
        ctx.lineTo(this.x + 24, this.y + 24);
        ctx.moveTo(this.x + 24, this.y - 24);
        ctx.lineTo(this.x - 24, this.y + 24);
        ctx.strokeStyle = darkRed;
        ctx.lineWidth = 16;
        ctx.stroke();
    }
}

class Animation {
    sprites = [];
    
    constructor() {
        this.canvas = document.getElementById('animationCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.loop = this.loop.bind(this);

        this.resizeCanvas();
        window.onresize = () => this.resizeCanvas();

        const amountSpritesMedia = window.matchMedia("(min-width: 768px)")
        this.initSprites(amountSpritesMedia.matches ? 50 : 20);
        amountSpritesMedia.addEventListener('change', (ev) => {
            this.sprites = [];
            this.initSprites(ev.matches ? 50 : 20);
        });
    }

    initSprites(amount = 50) {
        if (amount <= 0) return;
        this.newSprite();
        (new Promise(resolve => setTimeout(resolve, randInt(100, 1000)))).then(() => this.initSprites(amount - 1));
    }
    
    newSprite() {
        const sideChance = Math.random() < 0.5; // 50/50 chance of true/false
        let x, y;
        if (sideChance) { // x, y on right
            x = this.canvas.width + 100;
            y = randInt(-100, this.canvas.height - 200);
        } else { // x, y on top
            x = randInt(0, this.canvas.width);
            y = -100;
        }
        
        let sprite;
        switch (randInt(0, 4)) {
            case 0:
                sprite = new RingSprite(x, y);
                break;
            case 1:
                sprite = new PlusSprite(x, y);
                break;
            case 2:
                sprite = new SquareSprite(x, y);
                break;
            case 3:
                sprite = new TriangleSprite(x, y);
                break;
            case 4:
                sprite = new CrossSprite(x, y);
                break;
        }
        
        this.sprites.push(sprite);
    }
    
    resizeCanvas() {
        this.canvas.style.width='100%';
        this.canvas.style.height='100%';
        this.canvas.width  = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    loop(hrt) {
        Delta.deltaTime = (hrt - Delta.lastDelta) / 1000;
        
        this.sprites.forEach(sprite => {
            sprite.update();
            if (sprite.x < -100 || sprite.y > this.canvas.height + 100) {
                const idx = this.sprites.findIndex((spr) => spr.id === sprite.id);
                this.sprites.splice(idx, 1);
                (new Promise(resolve => setTimeout(resolve, randInt(100, 1000)))).then(() => this.newSprite());
            }
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.sprites.forEach(sprite => sprite.draw(this.ctx));
        
        Delta.lastDelta = hrt;
        requestAnimationFrame(this.loop);
    }
    
    start() {
        requestAnimationFrame(this.loop);
    }
}

(new Animation()).start();
