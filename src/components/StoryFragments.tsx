import { motion } from 'motion/react';
import { X, BookOpen, Lock, Unlock, Ghost } from 'lucide-react';
import type { SceneData } from '../data/scenes';
import { useEffect, useRef } from 'react';

interface CapturedPhoto {
  id: string;
  imageData: string;
  timestamp: number;
  ghostType: string;
  location: string;
  sceneId: number;
  backgroundImage: string;
}

interface StoryFragmentsProps {
  curseLevel: number;
  capturedPhotos: CapturedPhoto[];
  scenes: SceneData[];
  onClose: () => void;
  initialSceneId?: number;
}

interface StoryFragment {
  id: number;
  title: string;
  unlockLevel: number;
  content: string;
  type: 'diary' | 'letter' | 'note';
}

export function StoryFragments({ curseLevel, capturedPhotos, scenes, onClose, initialSceneId }: StoryFragmentsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (initialSceneId && scrollContainerRef.current) {
      // Scroll to the specific scene
      const sceneElement = document.getElementById(`scene-${initialSceneId}`);
      if (sceneElement) {
        sceneElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [initialSceneId]);

  const fragments: StoryFragment[] = [
    {
      id: 1,
      title: '낡은 일기장 - 첫 번째 페이지',
      unlockLevel: 0,
      type: 'diary',
      content: `20XX년 3월 15일

오늘부터 이 앱을 사용하기 시작했다. 
'영안'이라는 이름이 마음에 들었다.
보이지 않는 것을 본다니, 얼마나 흥미로운가.

아직은 아무것도 보이지 않는다.
하지만 이상하게도... 누군가 날 보고 있는 것 같은 기분이 든다.`
    },
    {
      id: 2,
      title: '찢어진 편지',
      unlockLevel: 20,
      type: 'letter',
      content: `사랑하는 당신에게,

이 편지가 당신에게 닿을지 모르겠어요.
아니, 이미 당신은... 

제발 그 앱을 지우세요.
당신이 그들을 보는 순간,
그들도 당신을 보게 됩니다.

그것이 시작이에요.
돌이킬 수 없는...

[나머지 부분은 피로 얼룩져 읽을 수 없다]`
    },
    {
      id: 3,
      title: '낡은 일기장 - 7일째',
      unlockLevel: 40,
      type: 'diary',
      content: `20XX년 3월 22일

그것들이 보인다.
처음엔 그저 희미한 그림자였다.
이제는... 얼굴이 보인다.

그 여자는 늘 같은 자리에 앉아있다.
내 방 구석, 오래된 의자 위에.
날 보면 미소 짓는다.

왜 웃는 걸까?
무엇이 그렇게 재미있는 걸까?

저주 게이지가 50%를 넘었다.
하지만 멈출 수가 없다.
알고 싶다. 그들이 무엇을 원하는지.`
    },
    {
      id: 4,
      title: '무속인의 경고문',
      unlockLevel: 60,
      type: 'note',
      content: `[오래된 종이에 붉은 글씨로 적혀있다]

영안을 가진 자에게 고하노니,

세 가지를 명심하라.

첫째, 그들의 이름을 부르지 말라.
둘째, 그들의 요구에 응하지 말라.
셋째, 저주가 70%를 넘거든 즉시 멈추라.

이를 어길 시, 그대는 돌이킬 수 없는 
경계를 넘게 되리라.

이승과 저승의 문이 열리고,
그대는  사이에 갇히게 되리니...

[아래 부적 문양이 그려져 있다]`
    },
    {
      id: 5,
      title: '낡은 일기장 - 마지막 페이지',
      unlockLevel: 80,
      type: 'diary',
      content: `20XX년 4월 1일

이제 그만 써야겠다.
손이 떨려서 글씨를 쓸 수가 없다.

저주 게이지가 90%다.
그들이 가까이 온다.
너무 가까이.

거울 속에서 내가 아닌 무언가가 웃고 있다.
창문 밖에서 누군가 손을 흔든다.
침대 밑에서 속삭임이 들린다.

"같이... 가자..."

아, 드디어 이해했다.
이 앱은 문이었던 거다.
한 번 열면 닫을 수 없는.

미안해. 다음 사용자에게.
당신도 곧 알게 될 거야.

그들이 원하는 건 단순해.
외롭지 않게 해달라는 것.

영원히.

[이후 페이지들은 모두 찢어져 나갔다]`
    }
  ];

  const getFragmentIcon = (type: string) => {
    switch (type) {
      case 'diary':
        return '📔';
      case 'letter':
        return '✉️';
      case 'note':
        return '📜';
      default:
        return '📄';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black z-50 overflow-y-auto"
      ref={scrollContainerRef}
    >
      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-amber-500" />
            <div>
              <h2 className="text-white">스토리 파편</h2>
              <p className="text-sm text-gray-400">저주의 진실을 밝혀라</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Story fragments */}
      <div className="p-6 space-y-6 max-w-2xl mx-auto" ref={scrollContainerRef}>
        {scenes.map((scene, index) => {
          const isUnlocked = capturedPhotos.some(photo => photo.sceneId === scene.id);
          const photo = capturedPhotos.find(p => p.sceneId === scene.id);

          return (
            <motion.div
              key={scene.id}
              id={`scene-${scene.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${
                isUnlocked 
                  ? 'from-amber-950/50 to-gray-900/50 border-amber-800/50' 
                  : 'from-gray-900/30 to-gray-950/30 border-gray-800/50'
              } border rounded-lg backdrop-blur-sm`}
            >
              {/* Lock/Unlock icon - moved inside with proper spacing */}
              <div className="absolute top-4 right-4 z-10">
                {isUnlocked ? (
                  <div className="bg-amber-600 p-2 rounded-full shadow-lg">
                    <Unlock className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="bg-gray-700 p-2 rounded-full shadow-lg">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Photo preview if unlocked */}
              {isUnlocked && photo && (
                <div className="relative w-full overflow-hidden rounded-t-lg bg-black min-h-[70vh] flex items-center justify-center">
                  <img 
                    src={photo.imageData}
                    alt={scene.name}
                    className="w-full h-auto object-contain max-h-[70vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <Ghost className="w-4 h-4 text-red-400" />
                    <span className="text-white text-sm">{photo.ghostType}</span>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Fragment header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">📖</span>
                  <div className="flex-1">
                    <h3 className={`${isUnlocked ? 'text-amber-200' : 'text-gray-500'} mb-1`}>
                      {scene.storyTitle}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {isUnlocked 
                        ? `${scene.location} - 해제됨` 
                        : `${scene.location} - 사진 촬영 필요`
                      }
                    </p>
                  </div>
                </div>

                {/* Fragment content */}
                {isUnlocked ? (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <div className="bg-black/40 p-4 rounded border border-amber-900/30">
                      <pre className="text-gray-300 whitespace-pre-wrap text-sm font-serif leading-relaxed">
                        {scene.storyContent}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="bg-black/60 p-8 rounded border border-gray-800/50 text-center">
                    <Lock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">
                      {scene.name}에서 귀신을 촬영하여 해제하세요
                    </p>
                  </div>
                )}

                {/* Warning for high curse level fragments */}
                {isUnlocked && scene.curseIncrease >= 20 && (
                  <div className="mt-4 bg-red-950/30 border border-red-900/50 rounded p-3">
                    <p className="text-red-400 text-xs">
                      ⚠️ 저주 +{scene.curseIncrease}% - 강한 저주의 기운이 감지됩니다
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Progress indicator */}
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 text-center">
          <p className="text-gray-400 mb-2">
            해제된 스토리: <span className="text-amber-400">{capturedPhotos.length} / {scenes.length}</span>
          </p>
          <p className="text-gray-400 mb-2">
            현재 저주 수치: <span className="text-red-400">{curseLevel}%</span>
          </p>
          <p className="text-gray-600 text-sm">
            {capturedPhotos.length < scenes.length
              ? '모든 장소를 탐험하고 진실을 밝혀내십시오...'
              : '모든 진실이 밝혀졌습니다. 이제 돌아갈 수 없습니다.'
            }
          </p>
        </div>
      </div>
    </motion.div>
  );
}