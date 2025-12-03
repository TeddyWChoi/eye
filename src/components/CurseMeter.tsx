import { motion, AnimatePresence } from 'motion/react';
import { Skull } from 'lucide-react';

interface CurseMeterProps {
  level: number; // 0-100
}

export function CurseMeter({ level }: CurseMeterProps) {
  const getWarningLevel = () => {
    if (level >= 80) return { color: 'text-red-500', bg: 'bg-red-500', message: '⚠️ 저주가 임박했습니다' };
    if (level >= 50) return { color: 'text-orange-500', bg: 'bg-orange-500', message: '주의: 저주 수치 상승' };
    if (level >= 30) return { color: 'text-yellow-500', bg: 'bg-yellow-500', message: '경고: 위험 감지' };
    return { color: 'text-green-500', bg: 'bg-green-500', message: '안전' };
  };

  const warning = getWarningLevel();

  return (
    <div className="absolute top-6 right-6 z-40">
      <motion.div
        animate={level >= 80 ? {
          scale: [1, 1.05, 1],
        } : {}}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
        className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-gray-700 min-w-[200px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <Skull className={`w-5 h-5 ${warning.color}`} />
          <span className="text-white text-sm">저주 게이지</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full ${warning.bg}`}
          />
          
          {/* Pulse effect at high levels */}
          {level >= 50 && (
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className={`absolute inset-0 ${warning.bg}`}
            />
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className={`text-xs ${warning.color}`}>{level}%</span>
          <span className="text-xs text-gray-400">{warning.message}</span>
        </div>

        {/* Critical warning */}
        <AnimatePresence>
          {level >= 80 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-red-500/50"
            >
              <p className="text-red-400 text-xs">
                저주가 당신을 잠식하고 있습니다. 즉시 영안을 해제하십시오.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Max curse reached */}
        <AnimatePresence>
          {level >= 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-red-900/90 backdrop-blur-sm rounded-lg flex items-center justify-center"
            >
              <div className="text-center p-4">
                <Skull className="w-12 h-12 text-white mx-auto mb-2 animate-pulse" />
                <p className="text-white">저주받았습니다</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
