import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("hsl(var(--primary))");
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isDisabledZone, setIsDisabledZone] = useState(false);

  // Raw mouse values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Make the spring more responsive
  const springX = useSpring(cursorX, { stiffness: 900, damping: 25, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 900, damping: 25, mass: 0.4 });

  useEffect(() => {
    const dotCount = 10;
    setTrail(
      Array.from({ length: dotCount }, (_, i) => ({
        id: i,
        x: 0,
        y: 0,
      }))
    );

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Determine if we're inside a cursor disabled zone
      const target = e.target as HTMLElement | null;
      const inDisabled = !!target?.closest('.cursor-disabled-zone');
      if (inDisabled !== isDisabledZone) {
        setIsDisabledZone(inDisabled);
        // Toggle system cursor visibility to match custom cursor visibility
        document.body.style.cursor = inDisabled ? 'default' : 'none';
      }
    };

    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.tagName === "BUTTON") {
        setIsHovering(true);
        setCursorColor("hsl(var(--neon-cyan))");
      } else if (target.tagName === "A") {
        setIsHovering(true);
        setCursorColor("hsl(var(--neon-pink))");
      } else if (target.classList.contains("interactive")) {
        setIsHovering(true);
        setCursorColor("hsl(var(--primary))");
      }
    };

    const handleLeave = () => {
      setIsHovering(false);
      setCursorColor("hsl(var(--primary))");
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter, true);
    document.addEventListener("mouseleave", handleLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter, true);
      document.removeEventListener("mouseleave", handleLeave, true);
    };
  }, [cursorX, cursorY, isDisabledZone]);

  // Faster trail follow
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail];
        let x = springX.get();
        let y = springY.get();

        newTrail.forEach((dot) => {
          // Decrease the smoothing factor from 0.3 → 0.5 for snappier follow
          dot.x += (x - dot.x) * 0.5;
          dot.y += (y - dot.y) * 0.5;
          x = dot.x;
          y = dot.y;
        });

        return newTrail;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [springX, springY]);

  return (
    <>
      {/* Main Cursor */}
      {!isDisabledZone && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {/* Glow aura */}
          <motion.div
            className="absolute w-10 h-10 rounded-full blur-xl"
            animate={{
              scale: isHovering ? 3 : 1.5,
              opacity: isHovering ? 0.45 : 0.25,
              backgroundColor: cursorColor,
            }}
            transition={{ duration: 0.15 }}
          />

          {/* Main circle */}
          <motion.div
            className="relative w-6 h-6 rounded-full border-2"
            style={{ borderColor: cursorColor }}
            animate={{
              scale: isHovering ? 1.6 : 1,
              backgroundColor: isHovering ? cursorColor : "transparent",
            }}
            transition={{ type: "spring", stiffness: 800, damping: 20 }}
          />
        </motion.div>
      )}

      {/* Trail dots */}
      {!isDisabledZone && trail.map((dot, i) => (
        <motion.div
          key={dot.id}
          className="fixed top-0 left-0 pointer-events-none z-10"
          style={{
            x: dot.x - 10,
            y: dot.y - 10,
          }}
          animate={{
            opacity: 1 - i * 0.1,
            scale: (trail.length - i) / trail.length,
          }}
          transition={{ duration: 0.1 }}
        >
          <div
            className="rounded-full"
            style={{
              width: 10 + (trail.length - i) * 1.2,
              height: 10 + (trail.length - i) * 0.8,
              backgroundImage: `radial-gradient(circle at center, ${cursorColor} 0%, transparent 70%)`,
              filter: `blur(${Math.max(1, i * 0.6)}px)`,
              boxShadow: `0 0 ${12 - i}px ${cursorColor}`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CursorTrail;
