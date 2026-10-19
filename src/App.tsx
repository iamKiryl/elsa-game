import { useEffect, useRef } from "react";
import "./App.css";
import { Application, Assets, Sprite, Graphics, Text } from "pixi.js";

function App() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sceneRef.current;
    let disposed = false;
    let initialized = false;

    if (!container) return;
    const app = new Application();
    const speed = 120;
    const pressedKeys = new Set<string>();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;
      pressedKeys.add(event.code);
    };

    const onKeyUp = (event: KeyboardEvent) => {
      pressedKeys.delete(event.code);
    };

    const onBlur = () => {
      pressedKeys.clear();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);

    const initScene = async () => {
      await app.init({
        width: 800,
        height: 400,
        backgroundColor: "#4c7830",
      });

      initialized = true;

      if (disposed) {
        app.destroy(true, { children: true });
        return;
      }
      const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
      if (disposed) return;

      const player = new Sprite(texture);
      player.position.set(0, 0);
      app.stage.addChild(player);

      const collectible = new Graphics().rect(0, 0, 24, 24).fill("#ffd700");
      let collected = false;

      collectible.position.set(400, 200);
      app.stage.addChild(collectible);

      const exit = new Graphics().rect(0, 0, 24, 64).fill("#69d2ff");
      let won = false;

      exit.position.set(700, 300);
      app.stage.addChild(exit);

      const victoryText = new Text({
        text: "You won!",
        style: {
          fill: "#ffffff",
          fontSize: 36,
        },
      });

      victoryText.position.set(300, 160);
      victoryText.visible = false;
      app.stage.addChild(victoryText);

      const resetGame = () => {
        player.position.set(0, 0);
        won = false;
        collected = false;
        collectible.visible = true;
        victoryText.visible = false;
      };

      app.ticker.add((ticker) => {
        if (pressedKeys.has("KeyR")) {
          resetGame();
          pressedKeys.clear();
          return;
        }
        if (won) {
          victoryText.visible = true;
          return;
        }
        const delta = ticker.deltaMS / 1000;
        const directionX =
          Number(pressedKeys.has("ArrowRight")) -
          Number(pressedKeys.has("ArrowLeft"));
        const directionY =
          Number(pressedKeys.has("ArrowDown")) -
          Number(pressedKeys.has("ArrowUp"));
        const length = Math.hypot(directionX, directionY);
        const normalizedX = length > 0 ? directionX / length : 0;
        const normalizedY = length > 0 ? directionY / length : 0;

        player.x = Math.max(
          Math.min(
            player.x + speed * delta * normalizedX,
            app.screen.width - player.width,
          ),
          0,
        );

        player.y = Math.max(
          Math.min(
            player.y + speed * delta * normalizedY,
            app.screen.height - player.height,
          ),
          0,
        );

        const isOverlapping =
          player.x < collectible.x + collectible.width &&
          player.x + player.width > collectible.x &&
          player.y < collectible.y + collectible.height &&
          player.y + player.height > collectible.y;

        if (isOverlapping && !collected) {
          console.log("Collectible collected!");
          collected = true;
          collectible.visible = false;
        }
        if (collected) {
          const isOverlappingExit =
            player.x < exit.x + exit.width &&
            player.x + player.width > exit.x &&
            player.y < exit.y + exit.height &&
            player.y + player.height > exit.y;

          if (isOverlappingExit && !won) {
            console.log("You won!");
            won = true;
          }
        }
      });

      container.appendChild(app.canvas);
    };
    console.log("Effect started");

    initScene().catch((error: unknown) => {
      console.error("Failed to initialize scene:", error);
    });

    return () => {
      console.log("Cleanup called");
      disposed = true;

      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);

      if (initialized) {
        app.destroy(true, { children: true });
      }
    };
  }, []);

  return (
    <>
      <h2>Collect all items and reach the exit!</h2>
      <div ref={sceneRef} />
    </>
  );
}

export default App;
