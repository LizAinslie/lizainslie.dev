import { ComponentProps, FC, useEffect, useRef, useState } from "react";
import { Delta } from "../utils/delta";

export type CanvasBaseProps = {
  draw: (ctx: CanvasRenderingContext2D) => void;
  changeDimension?: (width: number, height: number) => void;
  delta?: Delta;
  fps?: number;
} & ComponentProps<"canvas">;

export const CanvasBase: FC<CanvasBaseProps> = ({
  draw,
  changeDimension,
  delta,
  fps = 60,
  ...rest
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) setContext(ctx);
    }
  }, []);

  const resizeCanvas = (context: CanvasRenderingContext2D) => {
    const canvas = context.canvas;
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      if (changeDimension)
        changeDimension(canvas.width / ratio, canvas.height / ratio);
      context.scale(ratio, ratio);
      return true;
    }
    return false;
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    if (context) {
      // Initial canvas setup
      resizeCanvas(context);

      const render = (currentTime: number) => {
        animationFrameId = window.requestAnimationFrame(render);

        // Calculate delta time in seconds
        const deltaTimeMs = currentTime - lastTime;
        const deltaTimeSeconds = deltaTimeMs / 1000;

        // Update delta object if provided
        if (delta) {
          delta.deltaTime = deltaTimeSeconds;
          delta.lastDelta = currentTime;
        }

        // Check if canvas needs resizing
        resizeCanvas(context);

        // Call the draw function
        draw(context);

        lastTime = currentTime;
      };

      // Start the render loop
      animationFrameId = window.requestAnimationFrame(render);
    }

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [context, draw, changeDimension, delta]);

  return <canvas ref={canvasRef} {...rest} />;
};
