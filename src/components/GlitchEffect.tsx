import { motion } from 'motion/react';

export function GlitchEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 pointer-events-none"
    >
      {/* RGB split effect */}
      <motion.div
        animate={{
          x: [0, -5, 5, -3, 3, 0],
          opacity: [0.8, 0.3, 0.8, 0.3, 0.8],
        }}
        transition={{
          duration: 0.3,
          repeat: 6,
          ease: "linear"
        }}
        className="absolute inset-0 bg-red-500/20 mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, 5, -5, 3, -3, 0],
          opacity: [0.8, 0.3, 0.8, 0.3, 0.8],
        }}
        transition={{
          duration: 0.3,
          repeat: 6,
          ease: "linear"
        }}
        className="absolute inset-0 bg-blue-500/20 mix-blend-screen"
      />

      {/* Scan lines */}
      <motion.div
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 2,
          ease: "linear"
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      {/* Horizontal glitch bars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            scaleX: 0,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            scaleX: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 0.2,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="absolute left-0 right-0 h-[2px] bg-white"
          style={{
            top: `${20 + i * 15}%`,
          }}
        />
      ))}

      {/* Static noise overlay */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 0.15,
          repeat: 12,
        }}
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Distortion text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1.2, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          times: [0, 0.3, 0.7, 1],
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{
              x: [-2, 2, -2, 2, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: 8,
            }}
            className="text-white text-2xl mb-2"
            style={{
              textShadow: '2px 2px #ff0000, -2px -2px #00ff00',
            }}
          >
            👁️ 영안 활성화 중...
          </motion.div>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.5,
              repeat: 3,
            }}
            className="text-red-500 text-sm"
          >
            ⚠️ WARNING: DIMENSIONAL BARRIER OPENING
          </motion.div>
        </div>
      </motion.div>

      {/* Final flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0, 0, 1, 0],
        }}
        transition={{
          duration: 2,
          times: [0, 0.7, 0.85, 0.9, 1],
        }}
        className="absolute inset-0 bg-white"
      />
    </motion.div>
  );
}
