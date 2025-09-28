import { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { CanvasBase } from "../CanvasBase";
import { useMediaQuery } from "../../utils/media";
import { Delta } from "../../utils/delta";

const darken = "rgba(0, 0, 0, .25)";

const delta = new Delta();

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

abstract class Sprite {
  x = 0;
  y = 0;
  id = crypto.randomUUID();

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  update() {
    const speed = 70;
    // move down and to the left
    this.x -= speed * delta.deltaTime;
    this.y += speed * delta.deltaTime;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
}

class RingSprite extends Sprite {
  constructor(x: number, y: number) {
    super(x, y);
  }

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x + 24, this.y + 24, 32, 0, 2 * Math.PI);
    ctx.strokeStyle = darken;
    ctx.lineWidth = 16;
    ctx.stroke();
  }
}

class PlusSprite extends Sprite {
  constructor(x: number, y: number) {
    super(x, y);
  }

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x - 32, this.y);
    ctx.lineTo(this.x + 32, this.y);
    ctx.moveTo(this.x, this.y - 32);
    ctx.lineTo(this.x, this.y + 32);
    ctx.strokeStyle = darken;
    ctx.lineWidth = 16;
    ctx.stroke();
  }
}

class SquareSprite extends Sprite {
  constructor(x: number, y: number) {
    super(x, y);
  }

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x - 28, this.y - 28);
    ctx.lineTo(this.x + 28, this.y - 28);
    ctx.lineTo(this.x + 28, this.y + 28);
    ctx.lineTo(this.x - 28, this.y + 28);
    ctx.lineTo(this.x - 28, this.y - 28);
    ctx.strokeStyle = darken;
    ctx.lineJoin = "miter";
    ctx.lineWidth = 16;
    ctx.closePath();
    ctx.stroke();
  }
}

class TriangleSprite extends Sprite {
  constructor(x: number, y: number) {
    super(x, y);
  }

  override draw(ctx: CanvasRenderingContext2D) {
    const side = 48;
    const h = side * (Math.sqrt(3) / 2);
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-side / 2, h / 2);
    ctx.lineTo(side / 2, h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.strokeStyle = darken;
    ctx.lineWidth = 16;
    ctx.lineJoin = "miter";
    ctx.closePath();
    ctx.stroke();
    ctx.translate(-this.x, -this.y);
  }
}

class CrossSprite extends Sprite {
  constructor(x: number, y: number) {
    super(x, y);
  }

  override draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x - 24, this.y - 24);
    ctx.lineTo(this.x + 24, this.y + 24);
    ctx.moveTo(this.x + 24, this.y - 24);
    ctx.lineTo(this.x - 24, this.y + 24);
    ctx.strokeStyle = darken;
    ctx.lineWidth = 16;
    ctx.stroke();
  }
}

export const ShapesAnimationCanvas: FC = () => {
  const [sprites, setSprites] = useState<Sprite[]>([]);
  const amountSpritesMedia = useMediaQuery("(min-width: 768px)");
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const newSprite = () => {
    const sideChance = Math.random() < 0.5; // 50/50 chance of true/false
    let x: number, y: number;
    if (sideChance) {
      // x, y on right
      x = width + 100;
      y = randInt(-100, height - 200);
    } else {
      // x, y on top
      x = randInt(0, width);
      y = -100;
    }

    let sprite: Sprite;
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

    setSprites((prev) => [...prev, sprite]);
  };

  const initSprites = (amount = 50) => {
    if (amount <= 0) return;
    newSprite();
    new Promise((resolve) => setTimeout(resolve, randInt(100, 1000))).then(() =>
      initSprites(amount - 1)
    );
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    const spritesToRemove: string[] = [];

    sprites.forEach((sprite) => {
      sprite.update();
      if (sprite.x < -100 || sprite.y > height + 100) {
        spritesToRemove.push(sprite.id);
      }
    });

    // Remove sprites and schedule new ones outside the render loop
    if (spritesToRemove.length > 0) {
      setSprites((prev) =>
        prev.filter((sprite) => !spritesToRemove.includes(sprite.id))
      );
      spritesToRemove.forEach(() => {
        setTimeout(() => newSprite(), randInt(100, 1000));
      });
    }

    ctx.clearRect(0, 0, width, height);
    sprites.forEach((sprite) => sprite.draw(ctx));
  };

  useEffect(() => {
    setSprites([]);
    initSprites(amountSpritesMedia ? 50 : 20);

    return () => {
      setSprites([]);
    };
  }, [amountSpritesMedia]);

  return (
    <CanvasBase
      draw={draw}
      className={styles.canvas}
      delta={delta}
      changeDimension={(width, height) => {
        setWidth(width);
        setHeight(height);
      }}
    />
  );
};
