import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GhostOverlayProps {
  type: 'woman' | 'screaming-woman' | 'twins' | 'gate' | 'grad-student' | 'scientist';
  position: { x: number; y: number }; // percentage
  onInteract?: () => void;
}

export function GhostOverlay({ type, position, onInteract }: GhostOverlayProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Random creepy messages
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInteract = () => {
    setIsHovered(true);
    onInteract?.();
    setTimeout(() => setIsHovered(false), 1000);
  };

  const ghostConfig = {
    woman: {
      element: (
        <div className="relative">
          {/* Dark shadow figure */}
          <motion.div
            animate={{
              opacity: [0.6, 0.85, 0.6],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Main shadow body */}
            <div className="w-32 h-64 bg-black/90 blur-[6px]" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }} />
            {/* Darker core */}
            <div className="absolute inset-0 w-24 h-56 mx-auto bg-black/95 blur-[4px]" />
          </motion.div>
          {/* Dark ominous aura */}
          <div className="absolute inset-0 bg-red-900/30 blur-3xl" />
        </div>
      ),
      message: "왜... 날 깨웠어..."
    },
    'screaming-woman': {
      element: (
        <div className="relative">
          <motion.div
            animate={{
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.05, 1],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Distorted shadow figure */}
            <div className="w-36 h-68 bg-black/90 blur-[6px]" style={{ clipPath: 'polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)' }} />
            {/* Darker inner shadow */}
            <div className="absolute inset-0 w-28 h-60 mx-auto bg-black/95 blur-[4px]" />
            {/* Dark void - mouth */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-8 h-12 bg-black blur-[2px]" />
          </motion.div>
          {/* Dark red aura */}
          <div className="absolute inset-0 bg-red-900/40 blur-3xl" />
          {/* Scream wave effect */}
          <motion.div
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-20 h-20 border-2 border-red-900/80 rounded-full blur-[1px]"
          />
        </div>
      ),
      message: "아아아아악!!!"
    },
    twins: {
      element: (
        <div className="relative flex gap-8">
          {/* Twin 1 - shadow */}
          <motion.div
            animate={{
              opacity: [0.6, 0.85, 0.6],
              x: [-2, 0, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="w-24 h-52 bg-black/90 blur-[6px]" style={{ clipPath: 'ellipse(45% 50% at 50% 50%)' }} />
            <div className="absolute inset-0 w-20 h-48 mx-auto bg-black/95 blur-[4px]" />
          </motion.div>
          {/* Twin 2 - shadow */}
          <motion.div
            animate={{
              opacity: [0.6, 0.85, 0.6],
              x: [2, 0, 2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
            className="relative"
          >
            <div className="w-24 h-52 bg-black/90 blur-[6px]" style={{ clipPath: 'ellipse(45% 50% at 50% 50%)' }} />
            <div className="absolute inset-0 w-20 h-48 mx-auto bg-black/95 blur-[4px]" />
          </motion.div>
          <div className="absolute inset-0 bg-cyan-900/30 blur-3xl" />
        </div>
      ),
      message: "이리 와... 함께..."
    },
    gate: {
      element: (
        <div className="relative w-48 h-72">
          {/* Portal/Gate effect - darker */}
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            {/* Dark rings */}
            <div className="absolute inset-0 border-4 border-purple-900/80 rounded-full blur-[2px]" />
            <div className="absolute inset-4 border-4 border-red-900/80 rounded-full blur-[2px]" />
          </motion.div>
          
          {/* Multiple shadowy figures passing through */}
          <motion.div
            animate={{
              opacity: [0, 0.85, 0],
              x: [-20, 0, 20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-48 bg-black/90 blur-[6px]"
          />
          
          <motion.div
            animate={{
              opacity: [0, 0.75, 0],
              x: [20, 0, -20],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-44 bg-black/85 blur-[6px]"
          />
          
          {/* Center vortex - pure darkness */}
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 0.85, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-48 bg-black/95 blur-[8px] rounded-full"
          />
          
          {/* Distortion waves */}
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 border-2 border-purple-900/60 rounded-full blur-[1px]"
          />
          
          {/* Dark aura */}
          <div className="absolute inset-0 bg-purple-900/25 blur-3xl" />
          <div className="absolute inset-0 bg-red-900/25 blur-3xl" />
        </div>
      ),
      message: "들어가지... 마라..."
    },
    'grad-student': {
      element: (
        <div className="relative">
          <motion.div
            animate={{
              opacity: [0.6, 0.85, 0.6],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative"
          >
            {/* Walking shadow figure */}
            <div className="w-28 h-64 bg-black/90 blur-[6px]" style={{ clipPath: 'ellipse(42% 50% at 50% 50%)' }} />
            {/* Darker core */}
            <div className="absolute inset-0 w-22 h-58 mx-auto bg-black/95 blur-[4px]" />
            {/* Something held - laptop shadow */}
            <div className="absolute top-36 left-1/2 -translate-x-1/2 w-14 h-8 bg-black/80 blur-[3px]" />
          </motion.div>
          <div className="absolute inset-0 bg-purple-900/30 blur-3xl" />
          {/* Exhaustion particles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-800 rounded-full blur-[1px]"
          />
        </div>
      ),
      message: "끝내야... 졸업..."
    },
    scientist: {
      element: (
        <div className="relative scale-[2]">
          <motion.div
            animate={{
              opacity: [0.6, 0.9, 0.6],
              x: [0, -3, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Menacing shadow figure - 2x size */}
            <div className="w-32 h-68 bg-black/90 blur-[6px]" style={{ clipPath: 'ellipse(43% 50% at 50% 50%)' }} />
            {/* Darker inner shadow */}
            <div className="absolute inset-0 w-26 h-62 mx-auto bg-black/95 blur-[4px]" />
            {/* Something held - clipboard/notebook shadow */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-10 h-14 bg-black/80 blur-[3px]" />
          </motion.div>
          <div className="absolute inset-0 bg-green-900/25 blur-3xl" />
        </div>
      ),
      message: "끝내야... 한다..."
    }
  };

  const config = ghostConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      className="cursor-pointer z-20"
      onClick={handleInteract}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {config.element}
      
      {/* Creepy message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-red-400 px-4 py-2 rounded text-sm backdrop-blur-sm border border-red-500/50"
        >
          {config.message}
        </motion.div>
      )}

      {/* Interaction ripple */}
      {isHovered && (
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 border-2 border-red-500 rounded-full"
        />
      )}
    </motion.div>
  );
}