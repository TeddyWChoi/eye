import { motion } from 'motion/react';
import { X, Calendar, MapPin, Ghost } from 'lucide-react';

interface CapturedPhoto {
  id: string;
  imageData: string;
  timestamp: number;
  ghostType: string;
  location: string;
  sceneId: number;
  backgroundImage: string;
}

interface GhostGalleryProps {
  photos: CapturedPhoto[];
  onClose: () => void;
  onViewStory: (sceneId: number) => void;
}

export function GhostGallery({ photos, onClose, onViewStory }: GhostGalleryProps) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Ghost className="w-6 h-6 text-red-500" />
            <div>
              <h2 className="text-white">영안 기록</h2>
              <p className="text-sm text-gray-400">{photos.length}개의 영혼 포착됨</p>
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

      {/* Gallery Grid */}
      <div className="p-4">
        {photos.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <Ghost className="w-20 h-20 text-gray-700 mb-4" />
            <h3 className="text-gray-400 mb-2">아직 포착된 영혼이 없습니다</h3>
            <p className="text-gray-600 text-sm">
              영안을 활성화하고 유령을 촬영하세요
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/50 transition-colors group cursor-pointer"
                onClick={() => onViewStory(photo.sceneId)}
              >
                {/* Photo with ghost overlay */}
                <div className="relative w-full bg-gray-950 min-h-[70vh] flex items-center justify-center">
                  <img
                    src={photo.imageData}
                    alt={`Ghost capture ${photo.id}`}
                    className="w-full h-auto object-contain max-h-[70vh]"
                  />
                  {/* Glitch overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-red-500/20 via-transparent to-cyan-500/20" 
                    style={{
                      mixBlendMode: 'screen'
                    }}
                  />
                  
                  {/* Scene number badge */}
                  <div className="absolute top-3 left-3 bg-red-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs">제 {photo.sceneId}장</span>
                  </div>

                  {/* Click to view story indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-500/50">
                      <span className="text-white text-sm">스토리 보기 →</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <Ghost className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm">{photo.ghostType}</p>
                      <p className="text-gray-500 text-xs">영혼 형태 확인됨</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs">{photo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs">{formatDate(photo.timestamp)}</p>
                    </div>
                  </div>

                  {/* Warning badge */}
                  <div className="pt-3 border-t border-gray-800">
                    <div className="bg-red-950/50 border border-red-900/50 rounded px-2 py-1">
                      <p className="text-red-400 text-xs">⚠️ 저주의 흔적 감지됨</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer note */}
      {photos.length > 0 && (
        <div className="p-6 text-center">
          <p className="text-gray-600 text-sm">
            * 촬영된 영혼들은 당신과의 연결을 형성했을 수 있습니다
          </p>
        </div>
      )}
    </motion.div>
  );
}