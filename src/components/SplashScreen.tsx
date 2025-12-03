import { motion } from 'motion/react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/dd95800f11433a3cfdde1d1242663dac0a475210.png';
import backgroundImage from 'figma:asset/a3616e4cdafaffb4d0fac75baabddb3fc4bcf841.png';

interface SplashScreenProps {
  onStart: () => void;
}

export function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black z-50 flex flex-col"
    >
      {/* Background Image - Full screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={backgroundImage}
          alt="Creepy hallway"
          className="w-full h-full object-cover"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        
        {/* Glitch effect overlay */}
        <motion.div
          animate={{
            opacity: [0, 0.3, 0, 0.2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            times: [0, 0.1, 0.2, 0.8, 1]
          }}
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 0, 100, 0.1) 2px, transparent 4px)',
          }}
        />

        {/* Red vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black/40" />
      </div>

      {/* Text Content Section - Centered over background */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 space-y-6" style={{ transform: 'translateY(100px)' }}>
        {/* Logo with glow effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="absolute inset-0 blur-2xl bg-red-500/40 rounded-full" />
          <img 
            src={logoImage} 
            alt="영안 로고" 
            className="w-48 h-auto relative z-10 drop-shadow-[0_0_30px_rgba(239,68,68,0.6)]"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-center max-w-sm"
        >
          평범한 일상 속, 숨겨진 진실을 보시겠습니까?
        </motion.p>

        {/* Warning Box */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-red-950/50 backdrop-blur-sm border-2 border-red-600 rounded-lg p-6 max-w-sm w-full"
        >
          <p className="text-sm text-red-400 leading-relaxed">
            ⚠️ 경고: 이 앱을 사용하면 당신은 보이지 않는 존재들을 볼 수 있게 됩니다. 그들과의 상호작용은 예기치 않은 결과를 초래할 수 있습니다.
          </p>
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-full max-w-sm"
        >
          <Button
            onClick={onStart}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg shadow-lg shadow-red-500/30"
          >
            이해했습니다
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}