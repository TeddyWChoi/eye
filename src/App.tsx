import { useState, useRef, useEffect } from 'react';
import { Eye, Camera, Image as ImageIcon, BookOpen, X, Users, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GhostOverlay } from './components/GhostOverlay';
import { CurseMeter } from './components/CurseMeter';
import { GhostGallery } from './components/GhostGallery';
import { StoryFragments } from './components/StoryFragments';
import { GlitchEffect } from './components/GlitchEffect';
import { SplashScreen } from './components/SplashScreen';
import { CommunityPage } from './components/CommunityPage';
import { GhostCodex } from './components/GhostCodex';
import { Button } from './components/ui/button';
import { scenes, type SceneData } from './data/scenes';

interface CapturedPhoto {
  id: string;
  imageData: string;
  timestamp: number;
  ghostType: string;
  location: string;
  sceneId: number;
  backgroundImage: string;
}

export default function App() {
  const [spiritVisionActive, setSpiritVisionActive] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [curseLevel, setCurseLevel] = useState(0);
  const [currentView, setCurrentView] = useState<'camera' | 'gallery' | 'story' | 'community' | 'codex'>('camera');
  const [capturedPhotos, setCapturedPhotos] = useState<CapturedPhoto[]>([]);
  const [showWarning, setShowWarning] = useState(true);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [selectedStoryId, setSelectedStoryId] = useState<number | undefined>(undefined);
  const [showCapturedImage, setShowCapturedImage] = useState(false);
  const [hasUnlockedHidden, setHasUnlockedHidden] = useState(false);
  const [showHiddenUnlock, setShowHiddenUnlock] = useState(false);
  const [showCursedMessage, setShowCursedMessage] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Filter available scenes based on curse level
  const availableScenes = scenes.filter(scene => {
    if (scene.isHidden && scene.requiredCurseLevel) {
      return hasUnlockedHidden;
    }
    return true;
  });

  const currentScene = availableScenes[currentSceneIndex] || scenes[0];

  const handleViewStory = (sceneId: number) => {
    setSelectedStoryId(sceneId);
    setCurrentView('story');
  };

  useEffect(() => {
    // Reset selected story when view changes
    if (currentView !== 'story') {
      setSelectedStoryId(undefined);
    }
  }, [currentView]);

  const activateSpiritVision = () => {
    setIsActivating(true);

    // Glitch effect duration
    setTimeout(() => {
      setSpiritVisionActive(true);
      setIsActivating(false);
    }, 2000);
  };

  const deactivateSpiritVision = () => {
    setSpiritVisionActive(false);
  };

  const capturePhoto = async () => {
    if (!canvasRef.current || !backgroundRef.current) return;

    // Instead of creating a canvas from the background, use the pre-captured image
    const newPhoto: CapturedPhoto = {
      id: Date.now().toString(),
      imageData: currentScene.capturedImage,
      timestamp: Date.now(),
      ghostType: getGhostTypeName(currentScene.ghostType),
      location: currentScene.location,
      sceneId: currentScene.id,
      backgroundImage: currentScene.backgroundImage
    };

    setCapturedPhotos(prev => [newPhoto, ...prev]);

    const newCurseLevel = Math.min(curseLevel + currentScene.curseIncrease, 100);
    setCurseLevel(newCurseLevel);

    // Flash effect
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;background:white;pointer-events:none;z-index:9999';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 100);

    // Show captured image with ghost - wait for user click
    setTimeout(() => {
      setShowCapturedImage(true);
    }, 150);
  };

  const handleCapturedImageClick = () => {
    // Hide the captured image
    setShowCapturedImage(false);

    // Check if this is the last scene (scene 6 - hidden place)
    const isLastScene = currentScene.id === 6;

    // If last scene, show cursed message
    if (isLastScene) {
      setTimeout(() => {
        setShowCursedMessage(true);
        // Later: play ending video
      }, 100);
    } else {
      // Check if hidden place unlocked
      const newCurseLevel = curseLevel;
      if (newCurseLevel >= 85 && !hasUnlockedHidden) {
        // Unlock hidden scene first
        setHasUnlockedHidden(true);

        setTimeout(() => {
          setShowHiddenUnlock(true);
          setTimeout(() => setShowHiddenUnlock(false), 3000);
        }, 100);

        // Move to next scene after hidden unlock message (force to scene 6)
        setTimeout(() => {
          setCurrentSceneIndex(5); // Directly set to index 5 (scene 6 in availableScenes after unlock)
          setSpiritVisionActive(false);
        }, 3200);
      } else {
        // Move to next scene normally
        setTimeout(() => {
          if (currentSceneIndex < availableScenes.length - 1) {
            setCurrentSceneIndex(prev => prev + 1);
            setSpiritVisionActive(false);
          }
        }, 100);
      }
    }
  };

  const getGhostTypeName = (type: string) => {
    const names: Record<string, string> = {
      'woman': '처녀귀신',
      'screaming-woman': '비명하는 여인',
      'twins': '쌍둥이 자매',
      'gate': '귀문 (鬼門)',
      'grad-student': '대학원생의 혼',
      'scientist': '연구원의 망령'
    };
    return names[type] || '알 수 없는 존재';
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentScene.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: spiritVisionActive ? 'contrast(1.3) saturate(1.4) hue-rotate(2deg)' : 'brightness(0.9)',
        }}
      />

      {/* Glitch overlay when spirit vision active */}
      {spiritVisionActive && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-cyan-900/10 pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
          />
          <motion.div
            animate={{
              opacity: [0, 0.15, 0, 0.1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.1, 0.2, 0.8, 1]
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 0, 100, 0.03) 2px, transparent 4px)',
            }}
          />
        </>
      )}

      {/* Hidden canvas for photo capture */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Warning Message */}
      <AnimatePresence>
        {showWarning && (
          <SplashScreen onStart={() => setShowWarning(false)} />
        )}
      </AnimatePresence>

      {/* Glitch Effect when activating */}
      {isActivating && <GlitchEffect />}

      {/* AR Ghost Overlays */}
      <AnimatePresence>
        {spiritVisionActive && currentView === 'camera' && (
          <GhostOverlay
            type={currentScene.ghostType}
            position={currentScene.ghostPosition}
            onInteract={() => setCurseLevel(prev => Math.min(prev + 3, 100))}
          />
        )}
      </AnimatePresence>

      {/* Captured Ghost Image Overlay */}
      <AnimatePresence>
        {showCapturedImage && currentView === 'camera' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-35 cursor-pointer"
            onClick={handleCapturedImageClick}
          >
            <img
              src={currentScene.capturedImage}
              alt="Captured ghost"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Click indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0.5, 1, 0.5],
                scale: [1, 1, 0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 4.5,
                times: [0, 0.66, 0.77, 0.88, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30"
            >
              <p className="text-white text-sm">화면을 터치하세요</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Curse Meter */}
      {currentView === 'camera' && !showCapturedImage && (
        <CurseMeter level={curseLevel} />
      )}

      {/* Gallery View */}
      <AnimatePresence>
        {currentView === 'gallery' && (
          <GhostGallery
            photos={capturedPhotos}
            onClose={() => setCurrentView('camera')}
            onViewStory={handleViewStory}
          />
        )}
      </AnimatePresence>

      {/* Story View */}
      <AnimatePresence>
        {currentView === 'story' && (
          <StoryFragments
            curseLevel={curseLevel}
            capturedPhotos={capturedPhotos}
            scenes={scenes}
            onClose={() => setCurrentView('camera')}
            initialSceneId={selectedStoryId}
          />
        )}
      </AnimatePresence>

      {/* Community View */}
      <AnimatePresence>
        {currentView === 'community' && (
          <CommunityPage
            onClose={() => setCurrentView('camera')}
          />
        )}
      </AnimatePresence>

      {/* Codex View */}
      <AnimatePresence>
        {currentView === 'codex' && (
          <GhostCodex
            onClose={() => setCurrentView('camera')}
            capturedPhotos={capturedPhotos}
          />
        )}
      </AnimatePresence>

      {/* Camera Controls */}
      {currentView === 'camera' && !showCapturedImage && (
        <div className="absolute inset-x-0 bottom-0 p-6 space-y-4 z-40">
          {/* Bottom Controls */}
          <div className="flex items-center justify-around bg-black/60 backdrop-blur-md rounded-full p-2">
            <button
              onClick={() => setCurrentView('codex')}
              className="flex items-center justify-center text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
              title="영안 도감"
            >
              <Book className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentView('gallery')}
              className="flex items-center justify-center text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
              title="사진 기록"
            >
              <ImageIcon className="w-6 h-6" />
            </button>

            {/* Combined Spirit Vision / Capture Button */}
            {!spiritVisionActive ? (
              <motion.button
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    '0 0 20px rgba(220, 38, 38, 0.5)',
                    '0 0 35px rgba(220, 38, 38, 0.8)',
                    '0 0 20px rgba(220, 38, 38, 0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onClick={activateSpiritVision}
                disabled={isActivating}
                className="w-16 h-16 rounded-full bg-red-600 border-4 border-red-400 hover:scale-105 transition-transform active:scale-95 disabled:opacity-50 flex items-center justify-center"
                title="영안 활성화"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.button>
            ) : (
              <button
                onClick={capturePhoto}
                className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 hover:scale-105 transition-transform active:scale-95"
                title="사진 촬영"
              >
                <Camera className="w-8 h-8 mx-auto text-black" />
              </button>
            )}

            <button
              onClick={() => handleViewStory(currentScene.id)}
              className="flex items-center justify-center text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
              title="스토리"
            >
              <BookOpen className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentView('community')}
              className="flex items-center justify-center text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
              title="커뮤니티"
            >
              <Users className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Curse Warning Overlay */}
      <AnimatePresence>
        {curseLevel >= 80 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 bg-red-950 pointer-events-none z-30"
          />
        )}
      </AnimatePresence>

      {/* Hidden Place Unlocked Alert */}
      <AnimatePresence>
        {showHiddenUnlock && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(220, 38, 38, 0.5)',
                  '0 0 40px rgba(220, 38, 38, 0.8)',
                  '0 0 20px rgba(220, 38, 38, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-red-950/90 border-4 border-red-600 rounded-lg p-8 max-w-md mx-4"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🚪</div>
                <h2 className="text-3xl text-red-400 mb-4">
                  히든 플레이스 해제
                </h2>
                <p className="text-white mb-2">
                  저주 게이지 85% 도달
                </p>
                <p className="text-red-300 text-sm mb-4">
                  211호 연구실이 열렸습니다...
                </p>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-yellow-500 text-sm"
                >
                  ⚠️ 위험: 최상위 등급 귀신 출현
                </motion.div>
              </motion.div>

              {/* Glitch effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0, 0.2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 0, 100, 0.1) 2px, transparent 4px)',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursed Message - Final Scene */}
      <AnimatePresence>
        {showCursedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              // Play ending video
              const video = document.createElement('video');
              video.src = '/src/assets/ending.mp4';
              video.className = 'absolute inset-0 w-full h-full object-cover z-50';
              video.autoplay = true;
              video.controls = true;
              document.body.appendChild(video);
              setShowCursedMessage(false);
            }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{
                scale: [0.5, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 1,
                times: [0, 0.5, 1]
              }}
              className="text-center"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 10px rgba(220, 38, 38, 0.8)',
                    '0 0 30px rgba(220, 38, 38, 1)',
                    '0 0 10px rgba(220, 38, 38, 0.8)'
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                💀
              </motion.div>

              <motion.h1
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl text-red-500 mb-4"
              >
                저주받았습니다
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-red-300 text-xl mb-8"
              >
                당신은 영안의 힘을 남용했습니다...
              </motion.p>

              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/60 text-sm"
              >
                혼돈의 문이 열렸습니다
              </motion.div>

              {/* Click indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0.8],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mt-12 text-white/70 text-base"
              >
                화면을 터치하여 엔딩을 확인하세요
              </motion.div>
            </motion.div>

            {/* Intense glitch effect */}
            <motion.div
              animate={{
                opacity: [0, 0.5, 0, 0.3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 0, 100, 0.2) 1px, transparent 2px)',
              }}
            />

            {/* Blood effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                times: [0, 0.5, 1]
              }}
              className="absolute inset-0 bg-gradient-to-b from-red-900/50 via-transparent to-red-950/50 pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}