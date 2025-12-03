import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Eye, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

// Ghost thumbnail images
import ghostThumbnail1 from 'figma:asset/410a4edc0add1efe63f581f78ecaaf717fe8f48e.png';
import ghostThumbnail2 from 'figma:asset/1ae6ca93840401e7901bb9af0989edfbbde55b07.png';
import ghostThumbnail3 from 'figma:asset/d5ee62893123cfe50c1cef54eef543816e81a83a.png';
import ghostThumbnail4 from 'figma:asset/fa6d1d2491deb59a2df588569a584bd933a88d88.png';
import ghostThumbnail5 from 'figma:asset/0e94b10802a42442f075d0df9ca99bc800d73453.png';
import ghostThumbnail6 from 'figma:asset/17c70fa04eff57a533f5602efe5e7fefcf16d144.png';

interface GhostData {
  id: string;
  name: string;
  type: string;
  location: string;
  discovered: boolean;
  sightings: number;
  dangerLevel: number;
  description: string;
  traits: string[];
  warning: string;
  thumbnailImage?: string;
}

interface GhostCodexProps {
  onClose: () => void;
  capturedPhotos: any[];
}

const allGhosts: GhostData[] = [
  {
    id: 'woman',
    name: '처녀귀신',
    type: 'woman',
    location: '기숙사 로비',
    discovered: false,
    sightings: 0,
    dangerLevel: 3,
    description: '30년 전 약혼자를 기다리다 죽은 여성의 혼령. 긴 검은 머리로 얼굴을 가리고 있다.',
    traits: ['야간 활동', '슬픈 울음소리', '차가운 기운'],
    warning: '직접 눈을 마주치지 마십시오',
    thumbnailImage: ghostThumbnail1
  },
  {
    id: 'screaming-woman',
    name: '비명하는 여인',
    type: 'screaming-woman',
    location: '폐건물 옥상',
    discovered: false,
    sightings: 0,
    dangerLevel: 4,
    description: '추락 사고로 죽은 여성의 망령. 입을 벌린 채 끊임없이 비명을 지른다.',
    traits: ['소리 공격', '공포 유발', '고통스런 표정'],
    warning: '비명소리를 듣지 마십시오',
    thumbnailImage: ghostThumbnail2
  },
  {
    id: 'twins',
    name: '쌍둥이 자매',
    type: 'twins',
    location: '어두운 숲길',
    discovered: false,
    sightings: 0,
    dangerLevel: 4,
    description: '20년 전 숲에서 실종된 쌍둥이 소녀들. 손을 잡고 함께 다닌다.',
    traits: ['동시 행동', '친구 찾기', '강력한 유대'],
    warning: '그들의 제안을 받아들이지 마십시오',
    thumbnailImage: ghostThumbnail3
  },
  {
    id: 'gate',
    name: '귀문 (鬼門)',
    type: 'gate',
    location: '캠퍼스 중앙',
    discovered: false,
    sightings: 0,
    dangerLevel: 5,
    description: '저승과 이승을 잇는 통로. 수많은 혼령들이 이곳을 통해 드나든다.',
    traits: ['차원 연결', '다수 출현', '시공간 왜곡'],
    warning: '절대 가까이 가지 마십시오',
    thumbnailImage: ghostThumbnail4
  },
  {
    id: 'grad-student',
    name: '대학원생의 혼',
    type: 'grad-student',
    location: '연구동 복도',
    discovered: false,
    sightings: 0,
    dangerLevel: 4,
    description: '과로사한 대학원생의 영혼. 아직도 논문을 끝내지 못해 방황한다.',
    traits: ['피로한 외형', '반복 행동', '집념'],
    warning: '논문에 대해 묻지 마십시오',
    thumbnailImage: ghostThumbnail5
  },
  {
    id: 'scientist',
    name: '연구원의 망령',
    type: 'scientist',
    location: '211호 연구실',
    discovered: false,
    sightings: 0,
    dangerLevel: 5,
    description: '불멸 연구에 미쳐 죽은 연구원. 자신의 실험에 성공했다고 믿는다.',
    traits: ['강박적 행동', '불멸 집착', '현실 침투'],
    warning: '위험! 접근 금지! 저주 포화 상태!',
    thumbnailImage: ghostThumbnail6
  }
];

export function GhostCodex({ onClose, capturedPhotos }: GhostCodexProps) {
  const [selectedGhost, setSelectedGhost] = useState<GhostData | null>(null);

  // Update ghost data based on captured photos
  const ghostsWithData = allGhosts.map(ghost => {
    const photos = capturedPhotos.filter(photo => {
      const ghostType = photo.ghostType.includes('처녀귀신') ? 'woman' :
                       photo.ghostType.includes('비명하는 여인') ? 'screaming-woman' :
                       photo.ghostType.includes('쌍둥이') ? 'twins' :
                       photo.ghostType.includes('귀문') ? 'gate' :
                       photo.ghostType.includes('대학원생') ? 'grad-student' :
                       photo.ghostType.includes('연구원') ? 'scientist' : '';
      return ghostType === ghost.id;
    });
    
    return {
      ...ghost,
      discovered: photos.length > 0,
      sightings: photos.length
    };
  });

  const discoveredCount = ghostsWithData.filter(g => g.discovered).length;

  const getDangerColor = (level: number) => {
    if (level <= 2) return 'text-yellow-500';
    if (level <= 3) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black z-50"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 to-transparent p-4 z-10 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white flex items-center gap-2">
              <Eye className="w-6 h-6 text-red-500" />
              <span>영안 도감</span>
            </h2>
            <p className="text-sm text-gray-400">
              발견: {discoveredCount} / {allGhosts.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {!selectedGhost ? (
          /* Grid View */
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pt-24 pb-6 overflow-y-auto"
          >
            <div className="px-4 space-y-3">
              {ghostsWithData.map((ghost, index) => (
                <motion.button
                  key={ghost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => ghost.discovered && setSelectedGhost(ghost)}
                  disabled={!ghost.discovered}
                  className={`
                    w-full p-4 rounded-lg border-2 transition-all
                    ${ghost.discovered 
                      ? 'bg-red-950/30 border-red-900/50 hover:bg-red-950/50 hover:border-red-800' 
                      : 'bg-gray-900/30 border-gray-800/50'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Thumbnail Image */}
                    <div className={`
                      w-16 h-16 rounded-lg flex items-center justify-center border-2 overflow-hidden relative
                      ${ghost.discovered 
                        ? 'bg-red-900/50 border-red-700' 
                        : 'bg-gray-800 border-gray-700'
                      }
                    `}>
                      {ghost.discovered && ghost.thumbnailImage ? (
                        <img 
                          src={ghost.thumbnailImage} 
                          alt={ghost.name}
                          className="w-full h-full object-cover"
                        />
                      ) : ghost.discovered ? (
                        <Eye className="w-8 h-8 text-red-400" />
                      ) : (
                        <Lock className="w-8 h-8 text-gray-600" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-left">
                      <h3 className={`mb-1 ${ghost.discovered ? 'text-white' : 'text-gray-600'}`}>
                        {ghost.discovered ? ghost.name : '??? 미발견'}
                      </h3>
                      <p className={`text-sm ${ghost.discovered ? 'text-gray-400' : 'text-gray-700'}`}>
                        {ghost.discovered ? ghost.location : '장소 불명'}
                      </p>
                      {ghost.discovered && (
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-gray-500">
                            목격: {ghost.sightings}회
                          </span>
                          <span className={`text-xs flex items-center gap-1 ${getDangerColor(ghost.dangerLevel)}`}>
                            <AlertTriangle className="w-3 h-3" />
                            위험도 {ghost.dangerLevel}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Glitch effect for discovered ghosts */}
                    {ghost.discovered && (
                      <motion.div
                        animate={{
                          opacity: [0, 0.2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="absolute inset-0 pointer-events-none rounded-lg"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent)',
                        }}
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Warning message */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-8 px-4"
            >
              <div className="p-4 bg-red-950/20 border border-red-900/50 rounded-lg">
                <p className="text-sm text-red-400 text-center">
                  영안으로 귀신을 촬영하여 도감을 완성하세요...
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Detail View */
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute inset-0 pt-24 pb-6 overflow-y-auto"
          >
            <div className="px-4 space-y-4">
              {/* Back button */}
              <button
                onClick={() => setSelectedGhost(null)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                ← 돌아가기
              </button>

              {/* Ghost Card */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-red-950/30 border-2 border-red-900/50 rounded-lg p-6 space-y-4"
              >
                {/* Thumbnail Image */}
                {selectedGhost.thumbnailImage && (
                  <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-red-700/50 bg-black/50">
                    <img 
                      src={selectedGhost.thumbnailImage} 
                      alt={selectedGhost.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl text-white mb-1">{selectedGhost.name}</h2>
                    <p className="text-gray-400">{selectedGhost.location}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full border ${getDangerColor(selectedGhost.dangerLevel)} border-current`}>
                    <span className="text-sm">위험도 {selectedGhost.dangerLevel}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-center">
                  <div className="flex-1 bg-black/30 rounded-lg p-3">
                    <p className="text-2xl text-red-400">{selectedGhost.sightings}</p>
                    <p className="text-xs text-gray-500 mt-1">목격 횟수</p>
                  </div>
                  <div className="flex-1 bg-black/30 rounded-lg p-3">
                    <p className="text-2xl text-red-400">{selectedGhost.traits.length}</p>
                    <p className="text-xs text-gray-500 mt-1">특성</p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="text-red-400">설명</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedGhost.description}
                  </p>
                </div>

                {/* Traits */}
                <div className="space-y-2">
                  <h3 className="text-red-400">특성</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedGhost.traits.map((trait, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/40 border border-red-900/50 rounded-full text-xs text-gray-300"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Warning */}
                <motion.div
                  animate={{
                    boxShadow: ['0 0 0px rgba(220, 38, 38, 0)', '0 0 20px rgba(220, 38, 38, 0.3)', '0 0 0px rgba(220, 38, 38, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-red-950/50 border-2 border-red-700 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-red-400 mb-1">⚠️ 경고</h3>
                      <p className="text-red-300 text-sm">
                        {selectedGhost.warning}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Glitch overlay */}
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0, 0.05, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255, 0, 100, 0.05) 2px, transparent 4px)',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}