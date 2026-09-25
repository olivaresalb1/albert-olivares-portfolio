import { useState, useRef, useCallback, useEffect } from "react";
import Matter from "matter-js";

interface RegisteredElement {
  id: string;
  element: HTMLElement;
  body?: Matter.Body;
  width: number;
  height: number;
}

export function usePhysicsWorld() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);
  const [gravity, setGravityState] = useState<{ x: number; y: number }>({ x: 0, y: 1 });
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<number | null>(null);
  const elementsMapRef = useRef<Map<string, RegisteredElement>>(new Map());
  const boundariesRef = useRef<Matter.Body[] | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const isPausedRef = useRef<boolean>(false);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (motionQuery.matches) {
        setIsRecruiterMode(true);
      }
    }
  }, []);

  const registerElement = useCallback(
    (id: string, element: HTMLElement | null) => {
      if (!element) {
        elementsMapRef.current.delete(id);
        return;
      }
      elementsMapRef.current.set(id, {
        id,
        element,
        width: 0,
        height: 0,
      });
    },
    []
  );

  const resetPhysics = useCallback(() => {
    if (runnerRef.current !== null) {
      cancelAnimationFrame(runnerRef.current);
      runnerRef.current = null;
    }

    if (mouseConstraintRef.current) {
      Matter.Mouse.clearSourceEvents(mouseConstraintRef.current.mouse);
      mouseConstraintRef.current = null;
    }

    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
      engineRef.current = null;
    }

    boundariesRef.current = null;
    isPausedRef.current = false;

    elementsMapRef.current.forEach((item) => {
      const el = item.element;
      el.style.width = "";
      el.style.height = "";
      el.style.position = "";
      el.style.top = "";
      el.style.left = "";
      el.style.zIndex = "";
      el.style.margin = "";
      el.style.transform = "";
      el.classList.remove("is-dragging", "is-physics-active");
      delete item.body;
    });

    setGravityState({ x: 0, y: 1 });
    setIsActive(false);
  }, []);

  const toggleRecruiterMode = useCallback(() => {
    setIsRecruiterMode((prev) => {
      const nextState = !prev;
      if (nextState) {
        resetPhysics();
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      return nextState;
    });
  }, [resetPhysics]);

  const pausePhysics = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resumePhysics = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const setGravity = useCallback((x: number, y: number) => {
    if (engineRef.current) {
      engineRef.current.gravity.x = x;
      engineRef.current.gravity.y = y;
      setGravityState({ x, y });
    }
  }, []);

  const setZeroG = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.gravity.x = 0;
      engineRef.current.gravity.y = 0;
      setGravityState({ x: 0, y: 0 });

      elementsMapRef.current.forEach((item) => {
        if (item.body) {
          const forceMagnitude = 0.005 * item.body.mass;
          const angle = Math.random() * Math.PI * 2;
          Matter.Body.applyForce(item.body, item.body.position, {
            x: Math.cos(angle) * forceMagnitude,
            y: Math.sin(angle) * forceMagnitude,
          });
        }
      });
    }
  }, []);

  const setNormalGravity = useCallback(() => {
    setGravity(0, 1);
  }, [setGravity]);

  const invertGravity = useCallback(() => {
    setGravity(0, -1);
  }, [setGravity]);

  const startPhysics = useCallback(() => {
    if (isActive || isRecruiterMode || typeof window === "undefined") return;

    // 1. Initialize Engine
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 },
    });
    engineRef.current = engine;
    setGravityState({ x: 0, y: 1 });
    isPausedRef.current = false;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 2. Create Static Boundary Walls
    const wallOptions: Matter.IBodyDefinition = {
      isStatic: true,
      restitution: 0.4,
      friction: 0.1,
    };

    const floor = Matter.Bodies.rectangle(
      windowWidth / 2,
      windowHeight + 30,
      windowWidth * 2,
      60,
      wallOptions
    );
    const leftWall = Matter.Bodies.rectangle(
      -30,
      windowHeight / 2,
      60,
      windowHeight * 2,
      wallOptions
    );
    const rightWall = Matter.Bodies.rectangle(
      windowWidth + 30,
      windowHeight / 2,
      60,
      windowHeight * 2,
      wallOptions
    );
    const ceiling = Matter.Bodies.rectangle(
      windowWidth / 2,
      -60,
      windowWidth * 2,
      60,
      wallOptions
    );

    const boundaries = [floor, leftWall, rightWall, ceiling];
    boundariesRef.current = boundaries;
    Matter.Composite.add(engine.world, boundaries);

    // 3. Map Registered DOM Elements to Rigid Bodies
    elementsMapRef.current.forEach((item) => {
      const rect = item.element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      item.width = rect.width;
      item.height = rect.height;

      const body = Matter.Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          restitution: 0.45,
          friction: 0.1,
          frictionAir: 0.015,
        }
      );

      item.body = body;

      // Lock DOM element rendering size and switch to fixed positioning
      const el = item.element;
      el.style.width = `${rect.width}px`;
      el.style.height = `${rect.height}px`;
      el.style.position = "fixed";
      el.style.top = "0px";
      el.style.left = "0px";
      el.style.zIndex = "30";
      el.style.margin = "0px";
      el.classList.add("is-physics-active");

      Matter.Composite.add(engine.world, body);
    });

    // 4. Initialize Pointer Drag-and-Throw Mouse Constraint
    const mouse = Matter.Mouse.create(document.body);
    const mouseInternal = mouse as unknown as { mousewheel?: EventListener };
    if (mouseInternal.mousewheel) {
      mouse.element.removeEventListener("mousewheel", mouseInternal.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouseInternal.mousewheel);
      mouse.element.removeEventListener("wheel", mouseInternal.mousewheel);
    }

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    mouseConstraintRef.current = mouseConstraint;

    Matter.Events.on(mouseConstraint, "startdrag", (event) => {
      const targetBody = (event as Matter.IEvent<Matter.MouseConstraint> & { body: Matter.Body }).body;
      elementsMapRef.current.forEach((item) => {
        if (item.body === targetBody) {
          item.element.classList.add("is-dragging");
        }
      });
    });

    Matter.Events.on(mouseConstraint, "enddrag", (event) => {
      const targetBody = (event as Matter.IEvent<Matter.MouseConstraint> & { body: Matter.Body }).body;
      elementsMapRef.current.forEach((item) => {
        if (item.body === targetBody) {
          item.element.classList.remove("is-dragging");
        }
      });
    });

    Matter.Composite.add(engine.world, mouseConstraint);

    setIsActive(true);

    // 5. 60 FPS Render Tick Loop via requestAnimationFrame
    const tick = () => {
      if (!engineRef.current) return;

      if (!isPausedRef.current) {
        Matter.Engine.update(engineRef.current, 1000 / 60);

        elementsMapRef.current.forEach((item) => {
          if (!item.body) return;
          const { body, element, width, height } = item;
          const x = body.position.x - width / 2;
          const y = body.position.y - height / 2;
          const angle = body.angle;

          element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotate(${angle}rad)`;
        });
      }

      runnerRef.current = requestAnimationFrame(tick);
    };

    runnerRef.current = requestAnimationFrame(tick);
  }, [isActive, isRecruiterMode]);

  useEffect(() => {
    if (!isActive) return;

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!engineRef.current || !boundariesRef.current) return;

        const w = window.innerWidth;
        const h = window.innerHeight;
        const boundaries = boundariesRef.current;

        // 1. Update positions of static boundary bodies
        if (boundaries[0]) Matter.Body.setPosition(boundaries[0], { x: w / 2, y: h + 30 });
        if (boundaries[1]) Matter.Body.setPosition(boundaries[1], { x: -30, y: h / 2 });
        if (boundaries[2]) Matter.Body.setPosition(boundaries[2], { x: w + 30, y: h / 2 });
        if (boundaries[3]) Matter.Body.setPosition(boundaries[3], { x: w / 2, y: -60 });

        // 2. Clamp dynamic rigid bodies inside new viewport bounds
        const margin = 30;
        elementsMapRef.current.forEach((item) => {
          if (!item.body) return;
          const body = item.body;
          let newX = body.position.x;
          let newY = body.position.y;
          let changed = false;

          if (newX < margin) {
            newX = margin;
            changed = true;
          } else if (newX > w - margin) {
            newX = w - margin;
            changed = true;
          }

          if (newY < margin) {
            newY = margin;
            changed = true;
          } else if (newY > h - margin) {
            newY = h - margin;
            changed = true;
          }

          if (changed) {
            Matter.Body.setPosition(body, { x: newX, y: newY });
            Matter.Body.setVelocity(body, { x: 0, y: 0 });
          }
        });
      }, 100);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPausedRef.current = true;
      } else {
        isPausedRef.current = false;
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isActive]);

  useEffect(() => {
    return () => {
      resetPhysics();
    };
  }, [resetPhysics]);

  return {
    registerElement,
    startPhysics,
    resetPhysics,
    pausePhysics,
    resumePhysics,
    setGravity,
    setZeroG,
    setNormalGravity,
    invertGravity,
    gravity,
    isActive,
    isRecruiterMode,
    toggleRecruiterMode,
    engineRef,
  };
}
